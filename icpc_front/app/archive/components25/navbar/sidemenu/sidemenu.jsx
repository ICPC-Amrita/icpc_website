// 'use client'

// import Link from "next/link"
// import Image from "next/image"
// import { useState } from "react"
// import Bars from "../../svg/bars-3"
// import Logo from "../../../app/_assets/logo2.png"
// import X from "../../svg/x"

// export default function SideMenu({openMenu, setOpenMenu, locations}){
//     // const [open, setOpen]=useState(false)
//     return(
//         <>
//             {/* <button className="text-[6vw]" onClick={()=>{setOpen(true)}}>
//                 <Bars/>
//             </button> */}
//             <div className={`fixed z-[1000] bg-[rgba(20,20,20,0.5)] backdrop-blur-sm h-full w-full left-0 top-0 flex justify-end ${openMenu?'':'hidden'}`}>
//                 <div className={`
//                 ${/*bg-[#4b82c4]*/ true}
//                 bg-blue-600
//                  w-[70vw] p-4 rounded-l-[2vw] text-white`}>
//                     <button className="text-5xl" onClick={()=>{setOpenMenu(false)}}>
//                         <p className="text-white"><X/></p>
//                     </button>
//                     <div className="flex flex-col flex-1 justify-center items-start text-[6vw]">
//                         <Link href="/" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Home</Link>
//                         <Link href="/#perks" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Why Amrita</Link>
//                         <Link href="/halloffame" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Hall of Fame</Link>
//                         <div className="group">
//                             <p
//                                 className={`mx-[1vw] transition ease-in duration-300 group`}
//                             >
//                                 Reach Us
//                             </p>
//                             <div 
//                             className="ml-[5vw] flex flex-col gap-y-[1.5vw]"
//                             >
//                             {locations.map((location, index) => (
//                                 <Link
//                                 href={location.href} 
//                                 key={index} 
//                                 className="hover:text-blue-400"
//                                 >
//                                 {location.name}
//                                 </Link>
//                             ))}
//                             </div>
//                         </div>
//                         <Link href="/ranking-process" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Ranking Process</Link>
//                         <Link href="/team-selection-process" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Selection Process</Link>
//                         <Link href="/ambassador-program" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Ambassador Program</Link>
//                         <Link href="/sponsor-us" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Sponsor Us</Link>
//                         <Link href="/gallery" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Gallery</Link>
//                         <Link href="/why-sponsor-us" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Why Sponsor Us</Link>
//                         <Link href="/archive/icpc_Amritapuri_2024" className="mx-[1vw] my-[1.5vw] mt-[4vw] hover:text-blue-400">Archive</Link>


//                     </div>
//                     {/* <ul className="flex justify-center flex-col text-4xl mt-3">
//                         {options.map(option=>
//                             <li key={option.id} className="mt-1">
//                                 <Link onClick={()=>setOpen(false)} href={option.href}>{option.option}</Link>
//                             </li>
//                         )}
//                     </ul> */}
//                     <ul className="absolute bottom-0 mb-4 flex justify-center w-[60vw]">
//                         <li>
//                             {/* <button className="text-[6vw]">Login</button> */}
//                             <Image src={Logo} className="h-[15vw] max-md:pl-[2vw] w-auto -mr-[2vw] mx-[1vw]"></Image>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }

'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function SideMenu({ openMenu, setOpenMenu, locations, navigationItems, textColor }) {
    const currentPath = usePathname();
    const router = useRouter();
    const [expandedDropdown, setExpandedDropdown] = useState(null);

    // Function to handle smooth scrolling for mobile
    const handleSmoothScroll = (e, targetId, basePath = "/archive/icpc_Amritapuri_2025") => {
        e.preventDefault();
        setOpenMenu(false); // Close menu first
        
        setTimeout(() => {
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
        }, 300);
    };

    const toggleDropdown = (index) => {
        setExpandedDropdown(expandedDropdown === index ? null : index);
    };

    const handleLinkClick = () => {
        setOpenMenu(false);
        setExpandedDropdown(null);
    };

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                    openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setOpenMenu(false)}
            />

            {/* Side Menu - Added flex-col and h-screen structure */}
            <div className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
                openMenu ? 'translate-x-0' : 'translate-x-full'
            }`}>
                
                {/* Header - Fixed height */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-blue-950 shrink-0">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <button 
                        onClick={() => setOpenMenu(false)}
                        className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Items - Added flex-grow and overflow-y-auto */}
                <div className="flex-grow overflow-y-auto py-4">
                    <nav className="px-4 space-y-2">
                        {navigationItems?.map((item, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-b-0">
                                {item.type === "link" ? (
                                    <Link 
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className={`flex items-center justify-between p-4 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors font-medium rounded-lg ${
                                            currentPath === item.href ? 'bg-red-50 text-red-600' : ''
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : item.type === "scroll" ? (
                                    <a 
                                        href={item.href}
                                        onClick={(e) => handleSmoothScroll(e, item.href.substring(1), item.basePath)}
                                        className="flex items-center justify-between p-4 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer font-medium rounded-lg"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className="flex items-center justify-between w-full p-4 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors font-medium rounded-lg"
                                        >
                                            {item.label}
                                            <svg 
                                                className={`w-5 h-5 transition-transform duration-200 ${
                                                    expandedDropdown === index ? 'rotate-180' : ''
                                                }`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        
                                        {/* Dropdown Items */}
                                        <div className={`overflow-hidden transition-all duration-300 ${
                                            expandedDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="pl-4 pb-2 space-y-1">
                                                {item.items?.map((subItem, subIndex) => (
                                                    <Link
                                                        href={subItem.href}
                                                        key={subIndex}
                                                        onClick={handleLinkClick}
                                                        className={`block p-3 text-gray-600 hover:bg-gray-50 hover:text-red-600 transition-colors rounded-lg font-medium ${
                                                            currentPath === subItem.href ? 'bg-red-50 text-red-600' : ''
                                                        }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Footer - Fixed height */}
                <div className="p-4 border-t border-gray-200 shrink-0">
                    {/* <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-blue-600 transition-colors" 
                            aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-sky-500 transition-colors" 
                            aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-blue-700 transition-colors" 
                            aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-pink-600 transition-colors" 
                            aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-red-600 transition-colors" 
                            aria-label="Youtube">
                            <Youtube size={20} />
                        </a>
                    </div> */}
                </div>
            </div>
        </>
    );
}