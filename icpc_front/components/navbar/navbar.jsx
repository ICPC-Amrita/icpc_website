// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import SideMenu from "./sidemenu/sidemenu";
// import Bars from "../svg/bars-3";
// import { useState } from "react";
// import { usePathname, useRouter } from 'next/navigation';

// export default function Navbar({ open, hero, darkSection }) {
//     const currentPath = usePathname();
//     const router = useRouter();
//     const [openMenu, setOpenMenu] = useState(false);
    
//     // Use white text for hero section and dark sections, black text otherwise
//     const textColor = (hero || darkSection) ? "text-black hover:text-gray-300" : "text-black hover:text-red-500";
    
//     const locations = [
//         { name: "Amritapuri", href: "/reach-us/amritapuri" },
//         { name: "Bengaluru", href: "/reach-us/bengaluru" },
//         { name: "Coimbatore", href: "/reach-us/coimbatore" }
//     ];
    
//     const locations24 = [
//         { name: "Amritapuri", href: "/archive/icpc_Amritapuri_2024/reach-us/amritapuri" },
//         { name: "Bengaluru", href: "/archive/icpc_Amritapuri_2024/reach-us/bengaluru" },
//         { name: "Coimbatore", href: "/archive/icpc_Amritapuri_2024/reach-us/coimbatore" }
//     ];
    
//     const archiveweblinks = [
//         {name: "ICPC 2024", href: "/archive/icpc_Amritapuri_2024"},
//     ];

//     // Function to handle smooth scrolling to sections
//     const handleSmoothScroll = (e, targetId, basePath = "/") => {
//         e.preventDefault();
        
//         // If we're already on the correct page, just scroll
//         if (currentPath === basePath) {
//             const element = document.getElementById(targetId);
//             if (element) {
//                 element.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         } else {
//             // Navigate to the page first, then scroll
//             router.push(`${basePath}#${targetId}`);
//         }
//     };

//     return (
//         <>
//         <nav className={`min-h-[5vw] z-50 sticky top-0 max-md:min-h-[15vw] backdrop-blur-md ${hero?"":"max-md:bg-black"} flex items-center text-[1vw] max-md:text-[5vw] w-full transition-transform ease-in-out duration-300 ${open ? "md:transform translate-y-0" : "md:transform -translate-y-full"}`}>
//             <Link href="/">
//             <Image 
//                 src="/icpc_foundation.png" 
//                 width={1} 
//                 href="/"
//                 height={1} 
//                 className="mix-blend-normal h-[6vw] max-md:h-[15vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[2vw]" 
//                 alt="Logo" 
//                 unoptimized
//             />
//             </Link>
//             {currentPath.startsWith("/archive/icpc_Amritapuri_2024")  ? (
//             <div className="md:flex flex-1 justify-center items-center max-md:hidden">
//                 <Link 
//                     href="/archive/icpc_Amritapuri_2024" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Home
//                 </Link>
//                 <a 
//                     href="#perks" 
//                     onClick={(e) => handleSmoothScroll(e, 'perks', '/archive/icpc_Amritapuri_2024')}
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300 cursor-pointer`}
//                 >
//                     Why Amrita
//                 </a>
//                 <a 
//                     href="#faq" 
//                     onClick={(e) => handleSmoothScroll(e, 'faq', '/archive/icpc_Amritapuri_2024')}
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300 cursor-pointer`}
//                 >
//                     FAQ
//                 </a>
//                 <Link 
//                     href="/archive/icpc_Amritapuri_2024/halloffame" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Hall of Fame
//                 </Link>
//                 <div className="group">
//                     <button
//                         className={`mx-[1vw] ${textColor} transition ease-in duration-300 group`}
//                     >
//                         Reach Us
//                     </button>
//                     <div 
//                     className="absolute -translate-x-[20%] bg-white shadow-lg rounded-md border border-gray-200 z-10 min-w-[8vw] group-hover:block hidden"
//                     >
//                     {locations24.map((location24, index) => (
//                         <Link
//                         href={location24.href} 
//                         key={index} 
//                         className="py-2 hover:bg-gray-100 text-gray-800 hover:text-black flex justify-center"
//                         >
//                         {location24.name}
//                         </Link>
//                     ))}
//                     </div>
//                 </div>
//                 <Link 
//                     href="/archive/icpc_Amritapuri_2024/gallery" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Gallery
//                 </Link>
//                  <div className="group">
//                     <button
//                         className={`mx-[1vw] ${textColor} transition ease-in duration-300 group`}
//                     >
//                         Archive
//                     </button>
//                     <div 
//                     className="absolute -translate-x-[20%] bg-white shadow-lg rounded-md border border-gray-200 z-10 min-w-[8vw] group-hover:block hidden"
//                     >
//                     {archiveweblinks.map((archiveweblinks, index) => (
//                         <Link
//                         href={archiveweblinks.href} 
//                         key={index} 
//                         className="p-2 hover:bg-gray-100 text-gray-800 hover:text-black flex justify-center"
//                         >
//                         {archiveweblinks.name}
//                         </Link>
//                     ))}
//                     </div>
//                 </div>
//             </div>
//             ) : currentPath.startsWith("/") ? (
//                  <div className="md:flex flex-1 justify-center items-center max-md:hidden">
//                 <Link 
//                     href="/" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Home
//                 </Link>
//                 <a 
//                     href="#perks" 
//                     onClick={(e) => handleSmoothScroll(e, 'perks')}
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300 cursor-pointer`}
//                 >
//                     Why Amrita
//                 </a>
//                 <a 
//                     href="#faq" 
//                     onClick={(e) => handleSmoothScroll(e, 'faq')}
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300 cursor-pointer`}
//                 >
//                     FAQ
//                 </Link>
//                 <Link 
//                     href="/halloffame" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Hall of Fame
//                 </Link>
//                 <div className="group">
//                     <button
//                         className={`mx-[1vw] ${textColor} transition ease-in duration-300 group`}
//                     >
//                         Reach Us
//                     </button>
//                     <div 
//                     className="absolute -translate-x-[20%] bg-white shadow-lg rounded-md border border-gray-200 z-10 min-w-[8vw] group-hover:block hidden"
//                     >
//                     {locations.map((location, index) => (
//                         <Link
//                         href={location.href} 
//                         key={index} 
//                         className="py-2 hover:bg-gray-100 text-gray-800 hover:text-black flex justify-center"
//                         >
//                         {location.name}
//                         </Link>
//                     ))}
//                     </div>
//                 </div>
//                 <Link 
//                     href="/promote" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Promote
//                 </Link> 

//                  <Link 
//                     href="/ambassador-program" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Ambassador Program
//                 </Link> 
//                 <Link 
//                     href="/why-sponsor-us" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Why Sponsor Us
//                 </Link>
//                 <Link 
//                     href="/gallery" 
//                     className={`mx-[1vw] ${textColor} transition ease-in duration-300`}
//                 >
//                     Gallery
//                 </Link>
//                  <div className="group">
//                     <button
//                         className={`mx-[1vw] ${textColor} transition ease-in duration-300 group`}
//                     >
//                         Archive
//                     </button>
//                     <div 
//                     className="absolute -translate-x-[20%] bg-white shadow-lg rounded-md border border-gray-200 z-10 min-w-[8vw] group-hover:block hidden"
//                     >
//                     {archiveweblinks?.map((archiveweblinks, index) => (
//                         <Link
//                         href={archiveweblinks.href} 
//                         key={index} 
//                         className="p-2 hover:bg-gray-100 text-gray-800 hover:text-black flex justify-center"
//                         >
//                         {archiveweblinks.name}
//                         </Link>
//                     ))}
//                     </div>
//                 </div>
//             </div>
//             ) : null}
//             <button className={`py-[0.5vw] px-[1vw] max-md:pr-[2vw] mx-[1vw] hover:bg-white hover:text-black rounded-full transition duration-300 ease max-md:hidden invisible ${textColor}`}>
//                 Login
//             </button>
//             <div className="flex justify-end items-center text-5xl px-5 md:hidden max-md:flex-1 ">
//                 <button className="text-[6vw]" onClick={()=>{setOpenMenu(true)}}>
//                     <Bars/>
//                 </button>
//             </div>
//         </nav>
//         <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} locations={locations}/>
//         </>
//     );
// }
'use client'
import Image from "next/image";
import Link from "next/link";
import SideMenu from "./sidemenu/sidemenu";
import Bars from "../svg/bars-3";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar({ open, hero, darkSection }) {
    const currentPath = usePathname();
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    
    // Check for tablet size (adjust the range as needed)
    useEffect(() => {
        const checkTabletSize = () => {
            const width = window.innerWidth;
            setIsTablet(width >= 768 && width <= 1024);
        };
        
        checkTabletSize();
        window.addEventListener('resize', checkTabletSize);
        
        return () => window.removeEventListener('resize', checkTabletSize);
    }, []);
    
    // Improved text color logic with better contrast
    const getTextColor = () => {
        if (hero) {
            return "text-gray-900 hover:text-red-600"; // Dark text
        } else if (darkSection) {
            return "text-white hover:text-gray-200"; // White text on dark sections
        } else {
            return "text-gray-900 hover:text-red-600"; // Dark text with good contrast
        }
    };
    
    const textColor = getTextColor();
    
    // Enhanced navbar background with better visibility
    const getNavbarBg = () => {
        if (hero) {
            return "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"; // White background
        } else if (darkSection) {
            return "bg-white/10 backdrop-blur-md border-b border-white/10";
        } else {
            return "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm";
        }
    };
    
    const locations = [
        { name: "Amritapuri", href: "/reach-us/amritapuri" },
        { name: "Bengaluru", href: "/reach-us/bengaluru" },
        { name: "Coimbatore", href: "/reach-us/coimbatore" }
    ];
    
    const locations24 = [
        { name: "Amritapuri", href: "/archive/icpc_Amritapuri_2024/reach-us/amritapuri" },
        { name: "Bengaluru", href: "/archive/icpc_Amritapuri_2024/reach-us/bengaluru" },
        { name: "Coimbatore", href: "/archive/icpc_Amritapuri_2024/reach-us/coimbatore" }
    ];
    
    const archiveweblinks = [
        {name: "ICPC 2024", href: "/archive/icpc_Amritapuri_2024"},
    ];

    // Function to handle smooth scrolling to sections
    const handleSmoothScroll = (e, targetId, basePath = "/") => {
        e.preventDefault();
        
        if (currentPath === basePath) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            router.push(`${basePath}#${targetId}`);
        }
    };

    // Navigation items for cleaner code
    const getNavigationItems = () => {
        if (currentPath.startsWith("/archive/icpc_Amritapuri_2024")) {
            return [
                { label: "Home", href: "/archive/icpc_Amritapuri_2024", type: "link" },
                { label: "Why Amrita", href: "#perks", type: "scroll", basePath: "/archive/icpc_Amritapuri_2024" },
                { label: "FAQ", href: "#faq", type: "scroll", basePath: "/archive/icpc_Amritapuri_2024" },
                { label: "Hall of Fame", href: "/archive/icpc_Amritapuri_2024/halloffame", type: "link" },
                { label: "Reach Us", type: "dropdown", items: locations24 },
                { label: "Gallery", href: "/archive/icpc_Amritapuri_2024/gallery", type: "link" },
                { label: "Archive", type: "dropdown", items: archiveweblinks }
            ];
        } else {
            return [
                { label: "Home", href: "/", type: "link" },
                { label: "Why Amrita", href: "#perks", type: "scroll" },
                { label: "FAQ", href: "#faq", type: "scroll" },
                { label: "Hall of Fame", href: "/halloffame", type: "link" },
                { label: "Reach Us", type: "dropdown", items: locations },
                { label: "Promote", href: "/promote", type: "link" },
                { label: "Ambassador Program", href: "/ambassador-program", type: "link" },
                { label: "Organizers", href: "/organizers", type: "link" },
                { label: "Why Sponsor Us", href: "/why-sponsor-us", type: "link" },
                { label: "Gallery", href: "/gallery", type: "link" },
                { label: "Archive", type: "dropdown", items: archiveweblinks }
            ];
        }
    };

    const navigationItems = getNavigationItems();

    return (
        <>
        <nav className={`min-h-[5vw] z-50 sticky top-0 max-md:min-h-[15vw] ${getNavbarBg()} flex items-center text-[1vw] max-md:text-[4vw] w-full transition-all ease-in-out duration-300 ${open ? "md:transform translate-y-0" : "md:transform -translate-y-full"}`}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <Image 
                    src="/icpc_foundation.png" 
                    width={1} 
                    height={1} 
                    className="mix-blend-normal h-[6vw] max-md:h-[12vw] w-auto mx-[2vw] max-md:mx-[4vw] transition-transform hover:scale-105" 
                    alt="ICPC Foundation Logo" 
                    unoptimized
                />
            </Link>

            {/* Desktop Navigation - Show on all md+ screens including tablets */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-[0.6vw] overflow-visible">
                {navigationItems.map((item, index) => (
                    <div key={index} className="relative group">
                        {item.type === "link" ? (
                            <Link 
                                href={item.href} 
                                className={`px-2 py-2 ${textColor} transition-all duration-300 font-medium hover:bg-white/10 rounded-lg ${isTablet ? 'text-[1.1vw]' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ) : item.type === "scroll" ? (
                            <a 
                                href={item.href} 
                                onClick={(e) => handleSmoothScroll(e, item.href.substring(1), item.basePath)}
                                className={`px-2 py-2 ${textColor} transition-all duration-300 cursor-pointer font-medium hover:bg-white/10 rounded-lg ${isTablet ? 'text-[1.1vw]' : ''}`}
                            >
                                {item.label}
                            </a>
                        ) : item.type === "dropdown" ? (
                            <>
                                <button
                                    className={`px-2 py-2 ${textColor} transition-all duration-300 font-medium hover:bg-white/10 rounded-lg flex items-center gap-1 ${isTablet ? 'text-[1.1vw]' : ''}`}
                                >
                                    {item.label}
                                    <svg
                                        className={`transition-transform group-hover:rotate-180 ${isTablet ? 'w-3 h-3' : 'w-4 h-4'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Submenu */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-xl rounded-lg border border-gray-200 z-20 min-w-[10vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    {item.items && item.items.map((subItem, subIndex) => (
                                        <Link
                                            href={subItem.href}
                                            key={subIndex}
                                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg font-medium ${isTablet ? 'text-[1.1vw]' : ''}`}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : null}
                    </div>
                ))}
            </div>

            {/* Mobile Menu Button - Only show on truly mobile devices */}
            <div className="flex md:hidden flex-1 justify-end items-center pr-4">
                <button 
                    className={`p-2 ${textColor} hover:bg-white/10 rounded-lg transition-all duration-300`}
                    onClick={() => setOpenMenu(true)}
                    aria-label="Open mobile menu"
                >
                    <Bars className="w-6 h-6" />
                </button>
            </div>
        </nav>
        
        <SideMenu 
            openMenu={openMenu} 
            setOpenMenu={setOpenMenu} 
            locations={locations}
            navigationItems={navigationItems}
            textColor={textColor}
        />
        </>
    );
}