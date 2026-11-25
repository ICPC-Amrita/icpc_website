'use client'
import React from 'react';
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const mainSponsors = [
    {
        tier: "ICPC Titanium Multi-Regional Sponsor",
        name: "Jane Street",
        href: "https://www.janestreet.com/",
        src: "/jane2.png",
        imgClassName: "h-16 md:h-20 lg:h-24 w-auto object-contain",
        width: 150,
        height: 100,
    },
    {
        tier: "ICPC Global Sponsor Programming Tools",
        name: "JetBrains",
        href: "https://www.jetbrains.com/",
        src: "/jetbrains_logo.svg",
        imgClassName: "h-9 md:h-11 lg:h-12 w-auto object-contain",
        width: 120,
        height: 80,
    },
];

const pastSponsors = [
    {
        name: "Jane Street",
        href: "https://www.janestreet.com/",
        src: "/jane2.png",
        imgClassName: "max-h-10 md:max-h-12 w-auto object-contain",
        width: 140,
        height: 80,
    },
    {
        name: "JetBrains",
        href: "https://www.jetbrains.com/",
        src: "/jetbrains_logo.svg",
        imgClassName: "max-h-7 md:max-h-8 w-auto object-contain",
        width: 120,
        height: 60,
    },
    {
        name: "Ask Senior",
        href: "https://www.asksenior.in/",
        src: "/senior.png",
        imgClassName: "max-h-12 md:max-h-14 w-auto object-contain",
        width: 160,
        height: 160,
    },
    {
        name: "CodeChef",
        href: "https://www.codechef.com/",
        src: "https://cdn.codechef.com/images/cc-logo.svg",
        imgClassName: "max-h-9 md:max-h-10 w-auto object-contain",
        width: 56,
        height: 56,
    },
    {
        name: "Algo Zenith",
        href: "https://maang.in/",
        src: "/algozenith.png",
        imgClassName: "max-h-12 md:max-h-14 w-auto object-contain",
        width: 100,
        height: 80,
    },
];

const Sponsors = () => {
    return (
        <section className="text-blue-950 flex justify-center flex-col items-center relative overflow-hidden pb-[5vw] pt-[3vw] min-h-[50vh] bg-white">
            <div className="w-full max-w-[90vw] flex relative flex-col justify-center">
                {/* Main Sponsors Section */}
                <div className="font-display text-4xl sm:text-5xl font-bold w-full flex justify-center items-center pointer-events-none mb-10">
                    <div className="text-ink text-center">Sponsors</div>
                </div>

                <Fade>
                    <div className="flex flex-col gap-10 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto w-full">
                            {mainSponsors.map((sponsor) => (
                                <div key={sponsor.name} className="flex flex-col items-center justify-between">
                                    <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-4 text-center">
                                        {sponsor.tier}
                                    </h2>
                                    <div className="w-full min-h-[140px] p-6 rounded-2xl border border-blue-100 bg-blue-50/30 shadow-sm flex items-center justify-center">
                                        <a
                                            href={sponsor.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:opacity-80 transition-opacity"
                                        >
                                            <Image
                                                alt={`${sponsor.name} Logo`}
                                                src={sponsor.src}
                                                className={sponsor.imgClassName}
                                                width={sponsor.width}
                                                height={sponsor.height}
                                                unoptimized
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Past Sponsors Section (Secondary) */}
                        <div className="border-t border-gray-200 pt-10 mt-4">
                            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-600 mb-6 text-center">
                                Past Sponsors
                            </h2>
                            <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
                                {pastSponsors.map((partner) => (
                                    <div
                                        key={partner.name}
                                        className="bg-gray-50/70 p-4 rounded-xl border border-gray-200/80 flex items-center justify-center w-40 sm:w-44 min-h-[88px]"
                                    >
                                        <a
                                            href={partner.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="opacity-80 hover:opacity-100 transition-opacity"
                                        >
                                            <Image
                                                alt={`${partner.name} Logo`}
                                                src={partner.src}
                                                className={partner.imgClassName}
                                                width={partner.width}
                                                height={partner.height}
                                                unoptimized
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Sponsors;