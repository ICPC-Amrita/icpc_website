'use client'
import { useEffect, useState, useRef } from "react";
import Terminal from "@/components/ui_elems/terminal/terminalnew";
import Navbar from "@/components/navbar/navbar";
import Script from "next/script";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            if (scrollY > window.innerHeight || (window.innerWidth < 680 && scrollY > window.innerWidth) || pathname == '/halloffame') {
                setHero(false);
            } else {
                setHero(true);
            }
            if (scrollY < lastScrollY) {
                setOpen(true);
            }
            else if (scrollY > lastScrollY && scrollY > window.innerHeight) {
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
    }, [pathname]);

    return (
        <div className="w-full">
            
           {/* Google Tag Manager */}
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MGVBWT6D');
                `}
            </Script>
            
            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe 
                    src="https://www.googletagmanager.com/ns.html?id=GTM-MGVBWT6D"
                    height="0" 
                    width="0" 
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
            <Navbar open={open} hero={hero} darkSection={false} />
             <div className="max-w-screen md:-mt-[6vw] max-md:-pt-[-9vw] bg-stone-30 bg-white">
                {children}
                {/* <Terminal/> */}
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
