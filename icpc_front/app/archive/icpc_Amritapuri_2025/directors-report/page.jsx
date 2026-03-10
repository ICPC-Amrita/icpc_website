'use client'

import Image from "next/image"

export default function DirectorReport() {
    return (
        <div className="bg-white text-black flex justify-center pb-[10vw] min-h-screen flex-col items-center">
            <div className="min-w-[80vw] max-md:min-w-[90vw]">
                <div className="mt-[3vw] flex flex-col max-md:items-center">
                    <div className="max-md:w-[90vw]">
                        <p className="font-semibold text-[3vw] max-md:text-[6vw]">Report From The Contest Director</p>
                        <p className="text-[1.2vw] -mt-[0.5vw] max-md:text-[4vw]">Click to download the pdf containing the report.</p>
                    </div>
                    <div className="flex pt-[1vw] flex-wrap max-w-[83vw] max-md:max-w-[90vw] max-md:justify-center max-md:w-[90vw]">
                        <a href="/data/ICPC_Amritapuri_2024__Report_from_the_Contest_Director-1.pdf" download className="rounded-[1vw] shadow-[0_0px_20px_rgba(0,_0,_0,_0.7)] max-md:shadow-[0_0px_13px_rgba(0,_0,_0,_0.7)] hover:text-blue-500 max-md:mt-[5vw]">
                            <Image 
                                    src="/ICPC_Amritapuri_2024__Report_from_the_Contest_Director-1.png" 
                                    alt="Preview of report from contest director" 
                                    width={1} 
                                    height={1}
                                    className="rounded-[1vw] min-w-[20vw] min-h-[20vw] bg-stone-600 max-md:min-w-[60vw] max-md:min-h-[60vw] blur-[1px] hover:opacity-50"
                                    unoptimized
                                />
                            <span className="absolute flex justify-center items-center 
                            font-semibold -mt-[2.5vw] ml-[1vw] text-[1.5vw] max-md:text-[5vw] max-md:-mt-[9vw] max-md:ml-[3vw]">
                                Download PDF
                            </span>
                            {/**/}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
