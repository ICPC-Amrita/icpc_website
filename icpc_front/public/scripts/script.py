import obspython as obs
import hashlib
import requests
import time
import os
import platform
import threading

server_url = "http://192.168.242.25:5000/hash"

# 🔹 Global variables
codechef_id = ""
video_folder = ""
pending_uploads = []
lock = threading.Lock()
all_hashes_sent = threading.Event()

# -------------------- OBS UI --------------------


def script_properties():
    props = obs.obs_properties_create()
    obs.obs_properties_add_text(props, "codechef_id", "Enter your CodeChef ID", obs.OBS_TEXT_DEFAULT)
    obs.obs_properties_add_text(props, "video_folder", "Recording folder (leave blank for auto)", obs.OBS_TEXT_DEFAULT)
    return props

def get_obs_default_recording_path():
    system = platform.system()
    try:
        if system == "Windows":
            import ctypes.wintypes
            CSIDL_MYVIDEO = 14
            buf = ctypes.create_unicode_buffer(ctypes.wintypes.MAX_PATH)
            ctypes.windll.shell32.SHGetFolderPathW(None, CSIDL_MYVIDEO, None, 0, buf)
            return buf.value
        elif system == "Darwin":
            return os.path.expanduser("~/Movies")
        else:
            return os.path.expanduser("~/Videos")
    except Exception as e:
        print(f"⚠️ Could not determine default OBS path: {e}")
        return None

def script_update(settings):
    global codechef_id, video_folder
    codechef_id = obs.obs_data_get_string(settings, "codechef_id")
    video_folder = obs.obs_data_get_string(settings, "video_folder")
    if not video_folder:
        video_folder = get_obs_default_recording_path()
        if video_folder:
            print(f"✅ Auto-detected video folder: {video_folder}")
        else:
            print("⚠️ Please set the video folder manually in OBS script settings.")

# -------------------- Hash Helpers --------------------
def compute_file_hash(filepath):
    sha256 = hashlib.sha256()
    try:
        with open(filepath, 'rb') as f:
            for chunk in iter(lambda: f.read(4096), b""):
                sha256.update(chunk)
        return sha256.hexdigest()
    except Exception as e:
        print(f"❌ Error hashing file {filepath}: {e}")
        return None

def get_latest_videos(folder, count=3):
    if not folder or not os.path.isdir(folder):
        print("⚠️ Video folder not found.")
        return []
    video_exts = ['.mp4', '.mkv', '.flv', '.mov', '.avi', '.wmv']
    files = [os.path.join(folder, f) for f in os.listdir(folder)
             if os.path.isfile(os.path.join(folder, f)) and os.path.splitext(f)[1].lower() in video_exts]
    files.sort(key=os.path.getmtime, reverse=True)
    return files[:count]

# -------------------- Network Send --------------------
def send_with_retry(data, description=""):
    """Keep retrying until the server responds with confirmation."""
    global pending_uploads

    while True:
        try:
            print(f"🌐 Sending {description} ...")
            response = requests.post(server_url, json=data, timeout=10)

            if response.status_code == 200:
                res_json = response.json()
                # Check server-side "ok" or "verified"
                if res_json.get("status") == "ok":
                    print(f"📩 Server confirmed receipt of {description}")
                    with lock:
                        if data in pending_uploads:
                            pending_uploads.remove(data)
                            if not pending_uploads:
                                all_hashes_sent.set()
                    break
                else:
                    print(f"⚠️ Server responded but not verified ({res_json})")

            elif response.status_code == 403:
                print(f"🚫 Server rejected {description}: {response.text}")

            else:
                print(f"⚠️ Unexpected {response.status_code} for {description}")

        except Exception as e:
            print(f"❌ Network error sending {description}: {e}")

        print(f"🔁 Retrying {description} in 10s...")
        time.sleep(10)

def queue_send(data, description=""):
    """Send in background."""
    with lock:
        pending_uploads.append(data)
        all_hashes_sent.clear()
    t = threading.Thread(target=send_with_retry, args=(data, description))
    t.daemon = True
    t.start()

# -------------------- Send Script + Video Hashes --------------------
def send_script_hash():
    global codechef_id
    if not codechef_id:
        print("⚠️ Missing CodeChef ID. Please set it in OBS.")
        return
    script_path = os.path.abspath(__file__)
    script_hash = compute_file_hash(script_path)
    if script_hash:
        queue_send({"codechef_id": codechef_id, "script_file_hash": script_hash}, "script hash")
    else:
        print("❌ Failed to compute script hash.")

def send_video_hashes(folder):
    global codechef_id
    latest_files = get_latest_videos(folder, count=3)
    if not latest_files:
        print("⚠️ No video files found.")
        return
    for f in latest_files:
        h = compute_file_hash(f)
        if h:
            queue_send(
                {"codechef_id": codechef_id, "video_file": os.path.basename(f), "video_file_hash": h},
                f"video hash ({os.path.basename(f)})"
            )

# -------------------- OBS Event Handlers --------------------
def on_event(event):
    global codechef_id, video_folder

    if event == obs.OBS_FRONTEND_EVENT_RECORDING_STARTED:
        print("\n🔴 Recording started — sending script hash...")
        send_script_hash()

    elif event == obs.OBS_FRONTEND_EVENT_RECORDING_STOPPED:
        print("\n⏹️ Recording stopped — sending video hashes...")
        time.sleep(3)
        send_video_hashes(video_folder)

    elif event == obs.OBS_FRONTEND_EVENT_EXIT:
        print("\n🧩 OBS is exiting — waiting for all pending uploads...")
        while True:
            with lock:
                if not pending_uploads:
                    print("✅ All hashes sent successfully. OBS can safely exit.")
                    break
            print(f"⌛ Still waiting for {len(pending_uploads)} pending upload(s)...")
            time.sleep(5)

# -------------------- Load Script --------------------
def script_load(settings):
    obs.obs_frontend_add_event_callback(on_event)
    print("🚀 hash.py loaded — ready to monitor OBS events.")
