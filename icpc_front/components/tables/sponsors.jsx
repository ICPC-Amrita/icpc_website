'use client'
import React from 'react';
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Sponsors = () => {
    return (
        <section className="text-blue-950 flex justify-center flex-col items-center relative overflow-hidden pb-[5vw] pt-[3vw] min-h-[50vh] bg-white">
            <div className="w-full max-w-[90vw] flex relative flex-col justify-center">
                <div className="text-[2.5vw] max-md:text-[6vw] font-semibold w-full flex justify-center items-center pointer-events-none mb-[3vw]">
                    <div className="text-blue-900 text-center">Past Sponsors</div>
                </div>
                
                <Fade>
                    <div className="flex flex-col gap-8 w-full">
                        
                        {/* Title Sponsors Section */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
                               ICPC Titanium Multi-Regional Sponsor
                            </h2>
                            <div className=" p-4 md:p-6 rounded-xl  inline-flex items-center justify-center">
                                <a href="https://www.janestreet.com/" className="hover:opacity-80 transition-opacity">
                                    <Image
                                        alt="Jane Street Logo"
                                        src="/jane2.png"
                                        className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                                        width={150}
                                        height={100}
                                        unoptimized
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Platinum Sponsors Section */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
                               ICPC Global Sponsor Programming Tools
                            </h2>
                            <div className="p-4 md:p-6 rounded-xl inline-flex items-center justify-center">
                                <a href="https://www.jetbrains.com/" className="hover:opacity-80 transition-opacity">
                                    <Image
                                        alt="JetBrains Logo"
                                        src="/jetbrains_logo.svg"
                                        className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                                        width={120}
                                        height={80}
                                        unoptimized
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Community Partners Section */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
                                Community Partners
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {/* Ask Senior Card */}
                                <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200">
                                    <div className="flex flex-col items-center justify-center gap-4 min-h-[120px]">
                                        <div className="flex-shrink-0">
                                            <a href="https://www.asksenior.in/" className="hover:opacity-80 transition-opacity">
                                                <Image
                                                    alt="Ask Senior Logo"
                                                    src="/senior.png"
                                                    className="max-h-[70px] md:max-h-[100px] w-auto object-contain"
                                                    width={200}
                                                    height={200}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* CodeChef Card */}
                                <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200">
                                    <div className="flex flex-col items-center justify-center gap-4 min-h-[120px]">
                                        <div className="flex-shrink-0">
                                            <a href="https://www.codechef.com/" className="hover:opacity-80 transition-opacity">
                                                <Image
                                                    alt="CodeChef Logo"
                                                    src="https://cdn.codechef.com/images/cc-logo.svg"
                                                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-70 hover:opacity-80 transition-opacity"
                                                    width={56}
                                                    height={56}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Algo Zenith Card */}
                                <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200">
                                    <div className="flex flex-col items-center justify-center gap-4 min-h-[120px]">
                                        <div className="flex-shrink-0">
                                            <a href="https://maang.in/" className="hover:opacity-80 transition-opacity">
                                                <Image
                                                    alt="Algo Zenith Logo"
                                                    src="/algozenith.png"
                                                    className="max-h-[70px] md:max-h-[100px] w-auto object-contain"
                                                    width={100}
                                                    height={80}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Sponsors;