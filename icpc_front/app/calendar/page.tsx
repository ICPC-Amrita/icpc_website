'use client'
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

export default function CalendarPage() {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(false);
    const [darkSection, setDarkSection] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Navbar hide/show logic
            if (scrollY < lastScrollY) {
                setOpen(true);
            } else if (scrollY > lastScrollY && scrollY > windowHeight) {
                setOpen(false);
            }

            scrollDir.current = scrollY > lastScrollY ? "scrolling down" : "scrolling up";
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar open={open} hero={hero} darkSection={darkSection} />
            
            {/* Coming Soon Content */}
            <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4 py-16 md:py-24">
                <div className="text-center max-w-3xl">
                    {/* Icon/Illustration */}
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full">
                            <svg 
                                className="w-16 h-16 md:w-20 md:h-20 text-blue-900" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                                />
                            </svg>
                        </div>
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
                        ICPC Calendar
                    </h1>
                    
                    {/* Coming Soon Badge */}
                    <div className="inline-block bg-[#b02a1c] text-white px-6 py-2 rounded-full text-lg font-semibold mb-6">
                        Coming Soon
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        We&apos;re preparing an interactive calendar with all important dates, 
                        deadlines, and events for ICPC 2026 Amritapuri Regionals. 
                        Stay tuned for updates!
                    </p>
                    
                    {/* Features List */}
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 text-left">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
                            What to Expect
                        </h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Registration deadlines and important dates</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Contest schedules and timelines</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Preparation workshops and webinars</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Downloadable calendar with QR code access</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link 
                            href="/"
                            className="bg-[#b02a1c] hover:bg-[#6d2121] text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200 ease-in-out"
                        >
                            Back to Home
                        </Link>
                        <Link 
                            href="/#important_dates"
                            className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200 ease-in-out"
                        >
                            View Important Dates
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-950 text-white" aria-labelledby="site-footer-heading">
                <h2 id="site-footer-heading" className="sr-only">
                    Footer
                </h2>

                <div className="mx-auto max-w-6xl px-4 py-12">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Contact Info */}
                        <section aria-labelledby="contact-heading">
                            <h3 id="contact-heading" className="text-lg font-semibold">
                                Contact Us
                            </h3>
                            <address className="mt-4 not-italic text-gray-300 leading-relaxed">
                                <p>Amrita School of Engineering</p>
                                <p>Amritapuri, Kollam</p>
                                <p>Kerala, India - 690525</p>
                            </address>
                        </section>

                        {/* Quick Links */}
                        <nav aria-labelledby="quick-links-heading">
                            <h3 id="quick-links-heading" className="text-lg font-semibold">
                                Quick Links
                            </h3>
                            <ul className="mt-4 space-y-3 text-gray-300">
                                <li>
                                    <Link
                                        href="https://icpc.global/"
                                        className="transition-colors hover:text-sky-400"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        ICPC Global
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="transition-colors hover:text-sky-400">
                                        Registration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#important_dates" className="transition-colors hover:text-sky-400">
                                        Important Dates
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Get in Touch */}
                        <section aria-labelledby="get-in-touch-heading">
                            <h3 id="get-in-touch-heading" className="text-lg font-semibold">
                                Get in Touch
                            </h3>
                            <ul className="mt-4 space-y-3 text-gray-300">
                                <li>
                                    <a href="mailto:icpc@am.amrita.edu" className="transition-colors hover:text-sky-400">
                                        icpc@am.amrita.edu
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-300">
                        &copy; 2025 ICPC Asia Amritapuri Regional Contest. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}