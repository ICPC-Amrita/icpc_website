'use client'
import { useEffect, useState, useRef } from "react";
import Terminal from "@/app/archive/components25/ui_elems/terminal/terminalnew";
import Navbar from "@/app/archive/components25/navbar/navbar";
import Script from "next/script";
import { usePathname } from "next/navigation"; // Add this import

export default function Layout({ children }) {
    const [open, setOpen] = useState(true);
    const scrollDir = useRef("scrolling down");
    const [hero, setHero] = useState(false);
    const pathname = usePathname(); // Add this line

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            // Add pathname condition like in the promote layout
            if (scrollY > window.innerHeight || (window.innerWidth < 680 && scrollY > window.innerWidth) || pathname=='/archive/icpc_Amritapuri_2025/ambassador-leaderboard') {
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
    }, [pathname]); // Add pathname to dependency array

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
            
        </div>
    );
}
