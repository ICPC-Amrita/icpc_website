import Image from "next/image";
import { CalendarIcon, ClockIcon, CheckCircle2, UserIcon, MapPinIcon } from "lucide-react";
export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-indigo-100">
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-40 pb-8 sm:pb-12">
        {/* Breadcrumb / Nav placeholder */}
        {/* <div className="pb-6 text-sm text-gray-500 font-medium">
          Home &gt; Upcoming webinars &gt; The Art of Problem Solving
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded mb-6 shadow-sm">
              Free to Join
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl  mb-6 leading-tight">
              The Art of Problem Solving
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-700 mb-10 ">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-blue-600" />
                <span>Monday, July 20</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-600" />
                <span>11:00 AM ET</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-blue-600" />
                <span>Online Webinar</span>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl  mb-6">Key Takeaways</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <p>In a world where answers are everywhere, understand why <strong>problem-solving</strong> is what makes you valuable.</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <p>Everyone is learning AI, but few are learning how to think. Learn how to master logical thinking and interview skills.</p>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <p>Discover the mindset needed for competitive programming and acing technical interviews.</p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl  mb-6">Speaker</h2>
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="relative w-28 h-28 shrink-0 rounded-full overflow-hidden shadow-md">
                  <Image 
                    src="/vipinSir.png" 
                    alt="Vipin Pavithran" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl ">Vipin Pavithran</h3>
                  {/* <p className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <UserIcon className="w-4 h-4"/> Regional Contest Director ICPC Amritapuri
                  </p> */}
                  <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                    Founder, Chief Mentor - Team bios (India's No 1 CTF Team). Founder, AmFOSS. Passionate about mentoring the next generation of problem solvers.
                  </p>
                </div>
              </div>
            </div>
            
            {/* <div className="mb-12">
                <button className="text-blue-600 font-semibold hover:underline text-sm">Show less ^</button>
            </div> */}
            <div>
              <h2 className="text-2xl sm:text-3xl  mb-4">Why This Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                 Problem solving is not just a skill, it's a mindset. Let's build it together. 
                 The boundaries of what AI can do in data analysis and development are shifting fast.
                 What remains critical is the intellectual curiosity and structural logic required to solve complex, real-world problems.
              </p>
            </div>
          </div>
          {/* Right Column - Registration Form (sticky) */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <div className="sticky top-8 space-y-6">
              
              <div className="bg-white rounded-2xl shadow-[0_0px_40px_rgb(0,0,0,0.06)] border border-slate-100 p-6 sm:p-8">
                <h3 className="text-2xl  text-center mb-8">Register for the webinar</h3>
                <div className="flex flex-col items-center">
                  <a 
                    href="https://forms.gle/zmqgyykYVDrPYNy56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-blue-900 hover:bg-blue-950 text-white py-4 px-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_14px_0_rgba(0,208,114,0.3)] text-lg"
                  >
                    Register Now
                  </a>
                  {/* <p className="text-[11px] text-slate-500 leading-relaxed mt-4 text-center">
                    By registering, you accept our <a href="#" className="text-indigo-600 hover:underline">Terms of Use</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                  </p> */}
                </div>
              </div>
              
              {/* Session Poster Placeholder */}
              {/* <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 p-6 flex flex-col items-center justify-center min-h-[160px] text-center">
                 <div className="mx-auto w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 mb-3">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Session Poster Placeholder</p>
                 <p className="text-xs text-slate-400 mt-1">Insert poster graphic here</p>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}