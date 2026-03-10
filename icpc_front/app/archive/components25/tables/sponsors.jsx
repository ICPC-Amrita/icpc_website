'use client'
import React from 'react';
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Sponsors = () => {
    return (
        <section className="text-blue-950 flex justify-center flex-col items-center relative overflow-hidden pb-[5vw] pt-[3vw] min-h-[50vh] bg-white">
            <div className="w-full max-w-[90vw] flex relative flex-col justify-center">
                <div className="text-[2.5vw] max-md:text-[6vw] font-semibold w-full flex justify-center items-center pointer-events-none mb-[3vw]">
                    <div className="text-blue-900 text-center">Sponsors</div>
                </div>
                
                <Fade>
                    <div className="flex flex-col gap-8 w-full">
                        
                        {/* Title Sponsors Section */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
                               ICPC Titanium Multi-Regional Sponsor
                            </h2>
                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                                    <div className="flex-shrink-0">
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
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                                            Jane Street
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            Jane Street has a long history of supporting programming competitions worldwide, boasting several ICPC alumni, including multiple World Finalists, among its esteemed employees. This partnership provides an exciting opportunity to sustain and nurture the incredible community of talented programmers worldwide.
                                            <br /><br />
                                            Jane Street, a quantitative trading firm with offices worldwide, seeks to hire smart, humble individuals who love solving problems, building systems, and testing theories. Could Jane Street&apos;s next great idea come from you? Explore opportunities in Software Engineering, Quantitative Trading, Quantitative Research, and more in Jane Street&apos;s 2024 Summer internships: {" "}
                                            <a 
                                                href="https://www.janestreet.com/join-jane-street/open-roles/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 underline"
                                            >
                                                https://www.janestreet.com/join-jane-street/open-roles/
                                            </a>
                                            <br /><br />
                                            Jane Street also runs various educational programs in London, Hong Kong, and New York to help educate students on how Jane Street applies mathematical and computer science concepts in everyday work. For more information, check out their educational initiatives: {" "}
                                            <a 
                                                href="https://www.janestreet.com/join-jane-street/programs-and-events/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 underline"
                                            >
                                                https://www.janestreet.com/join-jane-street/programs-and-events/
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platinum Sponsors Section */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">
                               ICPC Global Sponsor Programming Tools
                            </h2>
                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-200">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                                    <div className="flex-shrink-0">
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
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                                            JetBrains
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            JetBrains is a global software company that creates professional software development tools and advanced collaboration solutions trusted by more than 15 million users worldwide. Since 2000, we have built a product catalog that covers all stages of the software development cycle, major technologies, programming languages, and educational processes.
                                            <br /><br />
                                            As developers of the Kotlin programming language and creators of professional development products like IntelliJ IDEA, CLion, and PyCharm, as well as educational tools that help people learn and teach computer programming, we are dedicated to supporting individuals throughout their software development journeys. Sponsoring ICPC has special significance for JetBrains and aligns with our commitment to nurturing promising young talent and working with the brightest minds.
                                            <br /><br />
                                            Visit {" "}
                                            <a 
                                                href="https://jb.gg/icpc" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 underline"
                                            >
                                                jb.gg/icpc
                                            </a>
                                            {" "} to learn about JetBrains&apos; involvement with the ICPC and find materials on how the company supports the brilliant minds of the ICPC community.
                                        </p>
                                    </div>
                                </div>
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