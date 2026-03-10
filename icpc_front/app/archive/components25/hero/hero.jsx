export default function Hero(){
    return(
        <>
        <div className="rounded-bg-full absolute -z-10 top-[2.4vw]">
            <video
                id="background-video"
                loop
                autoPlay
                muted
                controls
                className="w-auto bg-white h-[50vw] rounded-b-[2vw] max-md:h-[90vw]"
            >
                <source src="/vid_sample.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="min-h-[50vw] flex flex-col justify-center items-center w-full max-md:mt-[15vw] max-md:min-h-[90vw]">
            <p className="text-[3.5vw] max-md:text-[6vw] tracking-tighter max-w-[50vw] max-md:max-w-[90vw] text-center text-[#4b82c4] font-semibold mb-[2vw]">
                Empower Your <br/>Coding Journey at ICPC 2024 Amritapuri Regionals
            </p>
            <p className="text-[1.4vw] max-md:text-[4vw] max-w-[50vw] max-md:max-w-[90vw] text-center text-black font-medium tracking-tighter mb-[2vw]">
                Join the brightest minds from around the region at Amrita Vishwa Vidyapeetham for the ICPC 2024 Regional Contest. Challenge yourself, showcase your coding prowess, and take the first step toward global recognition.
            </p>
            <button className="bg-[#b02a1c] transition ease-in duration-100 hover:bg-[#6d2121] text-[2vw] max-md:text-[5vw] flex justify-center items-center h-[3.5vw] max-md:h-[8vw] w-[13vw] max-md:w-[25vw] rounded-[1vw] max-md:rounded-[2vw] font-semibold">Join Us</button>
        </div>
        </>
    )
}