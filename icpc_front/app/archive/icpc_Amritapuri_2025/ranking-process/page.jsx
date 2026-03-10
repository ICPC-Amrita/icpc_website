'use client'

import X from "@/app/archive/components25/svg/x";
import Image from "next/image"

export default function Promote() {
    return (
        <div className="bg-white text-black flex justify-center pb-[10vw] min-h-screen flex-col items-center">
            <div className="min-w-[80vw] max-md:min-w-[90vw]">
                {/* <p className="text-[2vw] text-center max-md:text-[6vw]">Promote ICPC Regionals 2024, Amritapuri</p> */}
                <div className="mt-[3vw] flex flex-col max-md:items-center">
                    <div className="max-md:w-[90vw] md:max-w-[80vw] max-md:min-w-[95vw]">
                        <p className="font-semibold text-[3vw] max-md:text-[6vw] justify-center flex mb-[2vw] max-md:mb-[4vw] max-md:mt-[8vw]">ICPC Ranking Process</p>
                        
                        <div className="text-[1.2vw] flex flex-col ">
                            <div class="bg-white w-full max-md:text-[3.5vw]">
                                
                                <div class="">
                                    <p class="text-gray-700 mb-4">
                                        When things go wrong during a contest, ensuring fairness for everyone becomes incredibly challenging. Unfortunately this time, we faced issues twice, and we sincerely apologise for that.
                                    </p>
                                    
                                    <p class="text-gray-700 mb-4">
                                        To address this, we have increased the number of slots and included as many affected teams as possible. This decision wasn&apos;t easy and has significantly increased our onsite seat requirements beyond initial estimates. However, we are doing our best to accommodate most of the affected teams.
                                    </p>
                                    
                                    <h2 class="text-[1.5vw] max-md:text-[4.5vw] font-semibold text-gray-800 mt-6 mb-4">What we are doing:</h2>
                                    
                                    <ol class="list-decimal pl-6 space-y-4">
                                        <li>
                                            <strong>&quot;Yet Another GCD Problem&quot; Adjustments:</strong>
                                            <ul class="list-disc pl-6">
                                                <li>We rejudged all non-accepted submissions after removing the K=0 case.</li>
                                                <li>Penalties were adjusted based on the first accepted submission.</li>
                                            </ul>
                                            <p class="italic text-gray-600 mt-2">This produced, say, <strong>Ranklist R1</strong>.</p>
                                        </li>
                                        
                                        <li>
                                            <strong>&quot;Small Indices&quot; Problem Removal:</strong>
                                            <ul class="list-disc pl-6">
                                                <li>After the &quot;Yet Another GCD Problem&quot; rejudge, we then removed the &quot;Small Indices&quot; problem completely and recalculated the ranklist.</li>
                                            </ul>
                                            <p class="italic text-gray-600 mt-2">This produced, say, <strong>Ranklist R2</strong>.</p>
                                        </li>
                                        
                                        <li>
                                            <strong>Final Selection:</strong>
                                            <ul class="list-disc pl-6">
                                                <li>For each site, we select N teams (as per site specific team selection process) from <strong>R1</strong> and N teams from <strong>R2</strong>, where N is the original number of teams announced for that site.</li>
                                                <li>We take the union of these two lists of teams and invite them all to the finals.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
                        </div>
                        <p className="text-[1.2vw] mt-[3vw] max-md:text-[3.5vw]">Click to download the pdf containing the ranking process details.</p>
                    </div>
                    <div className="flex pt-[1vw] flex-wrap max-w-[83vw] max-md:max-w-[90vw] max-md:justify-center max-md:w-[90vw]">
                        <a href="/data/ICPC Selection.pdf" download className="rounded-[1vw] shadow-[0_0px_20px_rgba(0,_0,_0,_0.7)] max-md:shadow-[0_0px_13px_rgba(0,_0,_0,_0.7)] hover:text-blue-500 max-md:mt-[5vw]">
                            <Image 
                                    src="/selection_update.png" 
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
