'use client'

import Image from "next/image"

export default function Promote() {
    return (
        <div className="bg-white text-black flex justify-center pb-[10vw] min-h-screen flex-col items-center">
            <div className="min-w-[80vw] max-md:min-w-[90vw]">
                {/* <p className="text-[2vw] text-center max-md:text-[6vw]">Promote ICPC Regionals 2024, Amritapuri</p> */}
                <div className="mt-[3vw] flex flex-col max-md:items-center">
                    <div className="max-md:w-[90vw]">
                        <p className="font-semibold text-[3vw] max-md:text-[6vw]">Contest Guidelines</p>
                        <p className="text-[1.2vw] -mt-[0.5vw] max-md:text-[4vw]">Click to download the pdf containing the contest guidelines.</p>
                    </div>
                    <div className="flex pt-[1vw] flex-wrap max-w-[83vw] max-md:max-w-[90vw] max-md:justify-center max-md:w-[90vw]">
                        <a href="/data/Online Round Rules.pdf" download className="rounded-[1vw] shadow-[0_0px_20px_rgba(0,_0,_0,_0.7)] max-md:shadow-[0_0px_13px_rgba(0,_0,_0,_0.7)] hover:text-blue-500 max-md:mt-[5vw]">
                            <Image 
                                    src="/contest-guidelines-ss.png" 
                                    alt="Registered Teams PDF Preview" 
                                    width={1} 
                                    height={1}
                                    className="rounded-[1vw] min-w-[20vw] min-h-[20vw] bg-stone-600 max-md:min-w-[60vw] max-md:min-h-[60vw] blur-[2px] hover:opacity-50"
                                    unoptimized
                                />
                            <span className="absolute flex justify-center items-center 
                            font-semibold -mt-[3vw] ml-[1vw] text-[1.5vw] max-md:text-[5vw] max-md:-mt-[9vw] max-md:ml-[3vw]">
                                Download PDF
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
