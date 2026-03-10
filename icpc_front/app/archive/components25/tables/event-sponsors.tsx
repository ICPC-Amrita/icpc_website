// import Image from "next/image";
// import Link from "next/link";
// export default function Sponsors(){
//     return(
//         <div className="text-blue-950 flex justify-center flex-col items-center relative overflow-hidden py-[5vw] pb-[6vw]">
//             <div className="min-w-[85vw] max-md:flex-1 flex relative flex-col justify-center">
//                 <div className="text-[2.5vw] max-md:text-[6vw] font-semibold w-full max-md:h-[10vw] flex justify-center items-center pointer-events-none mb-[2vw]">
//                     <div className="max-w-[85vw] flex-1">Community Partners</div>
//                 </div>
//                 <div className="flex w-full justify-center max-w-[100vw] overflow-hidden items-center py-[1vw] max-md:w-[90vw] max-md:px-[1.5vw]">
//                     <div className="flex-1 flex max-md:flex-col max-w-[65vw] md:gap-x-[8vw] max-md:gap-y-[2vh] max-md:min-w-full min-h-[15vw] justify-center">
//                         <div className="flex-1 md:max-w-[30vw] rounded-[1vw] max-md:min-h-[15vh] border-blue-950 border-[.25vw] border-solid hover:scale-105 hover:bg-yellow-100 shadow-[5px_5px_0px_0px_rgba(23,_37,_84,_1)] transition flex justify-center items-center pb-[2vw]">
//                                 <Link href="https://www.asksenior.in/">
//                                     <Image src="/senior.png" className="h-[15vw] max-md:h-[25vw] w-auto" width={1} height={1} unoptimized /> 
//                                 </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//              <div className="min-w-[85vw] max-md:flex-1 flex relative flex-col justify-center">
//                 <div className="text-[2.5vw] max-md:text-[6vw] font-semibold w-full max-md:h-[10vw] flex justify-center items-center pointer-events-none mb-[2vw]">
//                     <div className="max-w-[85vw] flex-1">Past Sponsors</div>
//                 </div>
//                 <div className="flex w-full justify-center max-w-[100vw] overflow-hidden items-center py-[1vw] max-md:w-[90vw] max-md:px-[1.5vw]">
//                     <div className="flex-1 flex max-md:flex-col max-w-[65vw] md:gap-x-[8vw] max-md:gap-y-[2vh] max-md:min-w-full min-h-[15vw] justify-center">
//                         <div className="flex-1 md:max-w-[30vw] rounded-[1vw] max-md:min-h-[15vh] border-blue-950 border-[.25vw] border-solid hover:scale-105 hover:bg-yellow-100 shadow-[5px_5px_0px_0px_rgba(23,_37,_84,_1)] transition flex justify-center items-center pb-[2vw]">
//                             <Link href="https://www.jetbrains.com/">
//                                 <Image src="/jetbrains-logo.png" className="h-[15vw] max-md:h-[25vw] w-auto" width={1} height={1} unoptimized /> 
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
'use client'
import React from 'react';
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const EventSponsors = () => {
    return (
        <section className="text-blue-950 flex justify-center flex-col items-center relative overflow-hidden pb-[5vw] pt-[3vw] min-h-[50vh] bg-white">
            <div className="min-w-[85vw] max-md:flex-1 flex relative flex-col justify-center">
                <div className="text-[2.5vw] max-md:text-[6vw] font-semibold w-full max-md:h-[10vw] flex justify-start items-center pointer-events-none mb-[3vw]">
                    <div className="max-w-[85vw] flex-1 text-blue-900">Sponsors</div>
                </div>
                <div className="flex w-full justify-center max-w-[100vw] overflow-hidden items-center py-[1vw] max-md:w-[90vw] max-md:px-[1.5vw]">
                    <div className="bg-white p-4 rounded-xl w-full shadow-lg border border-gray-200 max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[45vw]">
                        <Fade>


                               {/* Our Sponsors Section */}
                                <div className="text-center mb-12">
                                    <h4 className="font-black mb-6 text-2xl text-center">
                                        Our Sponsors
                                    </h4>
                                    <div className="flex flex-wrap gap-6 md:gap-12 items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <a
                                                href="https://www.janestreet.com/"
                                                className="flex items-center gap-2"
                                            >
                                                <Image
                                                    alt="Jane Street Logo"
                                                    draggable="false"
                                                    src="/jane2.png"
                                                    className="max-h-[60px] md:max-h-[80px] w-auto object-contain"
                                                    width={100}
                                                    height={100}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                href="https://www.jetbrains.com/"
                                                className="flex items-center gap-2"
                                            >
                                                <Image
                                                    alt="JetBrains Logo"
                                                    draggable="false"
                                                    src="/jetbrains_logo.svg"
                                                    className="max-h-[120px] md:max-h-[170px] w-auto object-contain"
                                                    width={100}
                                                    height={100}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                {/* Community Partners Section */}
                                <div className="text-center mb-12">
                                    <h4 className="font-black mb-6 text-xl text-center">
                                        Community Partners
                                    </h4>
                                    <div className="flex flex-wrap gap-6 md:gap-12 items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <a href="https://www.codechef.com/">
                                                <Image
                                                    alt="CodeChef"
                                                    draggable="false" 
                                                    src="https://cdn.codechef.com/images/cc-logo.svg"
                                                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-70 hover:opacity-80 transition-opacity"
                                                    width={56}
                                                    height={56}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a href="https://www.asksenior.in/">
                                                <Image
                                                    alt="Ask Senior"
                                                    draggable="false" 
                                                    src="/senior.png"
                                                    className="max-h-[70px] md:max-h-[100px] w-auto object-contain"
                                                    width={200}
                                                    height={200}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <a
                                                href="https://maang.in/"
                                                className="flex items-center gap-2"
                                            >
                                                <Image
                                                    alt="Algo Zenith"
                                                    draggable="false"
                                                    src="/algozenith.png"
                                                    className="max-h-[70px] md:max-h-[100px] w-auto object-contain"
                                                    width={100}
                                                    height={100}
                                                    unoptimized
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Past Sponsors Section */}
                                {/* <div className="mb-12">
                                        <h4 className=" font-black mb-6 text-xl text-center">
                                            Past Sponsors
                                        </h4>
                                  
                                    <div className="flex flex-wrap gap-8 items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <a href="https://www.jetbrains.com/">
                                                <Image
                                                    alt="JetBrains"
                                                    draggable="false" 
                                                    src="/jetbrains-logo.png"
                                                    className="max-h-[100px] w-auto object-contain  opacity-70 hover:opacity-80 transition-opacity"
                                                width={100}
                                                height={100}
                                                unoptimized
                                            />
                                            </a>
                                        </div> */}
                                        
                                        {/* <div className="flex items-center justify-center">
                                            <img
                                                alt="GeeksforGeeks"
                                                draggable="false" 
                                                src="/geeks-for-geeks.png"
                                                className="max-h-14 w-auto object-contain  hover:opacity-80 transition-opacity"
                                            />
                                        </div> */}
                                    {/* </div>
                                </div> */}
                                
                                {/* Past Outreach Sponsors Section */}
                                {/* <div className="mb-6">
                                  
                                        <h4 className=" font-black mb-6 text-xl text-center">
                                            Past Outreach Sponsors
                                        </h4>
                                  
                                    <div className="flex flex-wrap gap-8 items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                alt="CodeChef"
                                                draggable="false" 
                                                src="https://cdn.codechef.com/images/cc-logo.svg"
                                                className="max-h-14 w-auto object-contain  opacity-70 hover:opacity-80 transition-opacity"
                                                width={56}
                                                height={56}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image
                                                alt="GeeksforGeeks"
                                                draggable="false" 
                                                src="/geeks-for-geeks.png"
                                                className="max-h-9 w-auto object-contain  opacity-70 hover:opacity-80 transition-opacity"
                                                width={36}
                                                height={36}
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div> */}
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventSponsors;