'use client';
import Image from "next/image";
import Link from "next/link";
// import AnnouncementModal from "../tables/announcement-modal";

export default function AltHero() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            
            {/* Main Content Container - Added more top spacing */}
            <div className="flex flex-col lg:flex-row min-h-screen pt-28 sm:pt-32 md:pt-36 lg:pt-24 xl:pt-20">
                
                {/* Left Content Section */}
                <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-20">
                    
                    {/* Highlight Badge */}
                    <div className="mb-6">
                        <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full border border-blue-200">
                            highlights: 320+ on-site slots !
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                        ICPC 2025
                        <br />
                        <span className="text-blue-600">REGIONALS</span>
                    </h1>
                    
                    {/* Location List */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                        <Link href={'/reach-us/bengaluru'} className="hover:text-blue-600 transition-colors duration-300">
                            Bengaluru
                        </Link> , <Link href={'/reach-us/coimbatore'} className="hover:text-blue-600 transition-colors duration-300">
                            Coimbatore
                        </Link> , <Link href={'/reach-us/amritapuri'} className="hover:text-blue-600 transition-colors duration-300">
                            Kollam
                        </Link> , <span className="hover:text-blue-600 transition-colors duration-300">
                            Mysuru
                        </span>
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Link
                            href="https://icpc.global/regionals/finder/Asia-Amritapuri-First-Round-2026"
                            className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                        >
                            Register Now
                        </Link>

                        <Link
                            href="/data/Declaration_form.pdf"
                            download
                            className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 text-base font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="hidden sm:inline">College Declaration Form</span>
                            <span className="sm:hidden">College Form</span>
                        </Link>
                    </div>

                    {/* Sponsored by section */}
                    <div className="mb-8">
                        <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">
                            Sponsored By
                        </p>
                        <div className="flex items-start gap-6 sm:gap-8">
                            <div className="flex flex-col items-start">
                                <div className="h-8 sm:h-10 md:h-12 flex items-center justify-start mb-2">
                                    <Image
                                        src="/jane2.png"
                                        alt="Jane Street"
                                        width={120}
                                        height={40}
                                        className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <p className="text-gray-600 text-xs font-medium">
                                    ICPC Titanium Multi-<br />Regional Sponsor
                                </p>
                            </div>

                            <div className="flex flex-col items-start">
                                <div className="h-8 sm:h-10 md:h-12 flex items-center justify-start mb-2">
                                    <Image
                                        src="/jetbrains_logo.svg"
                                        alt="JetBrains"
                                        width={80}
                                        height={30}
                                        className="h-3/4 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <p className="text-gray-600 text-xs font-medium">
                                    ICPC Global Sponsor<br />Programming Tools
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="flex-1 relative min-h-[400px] sm:min-h-[500px] lg:min-h-screen mt-6 lg:mt-0 flex items-center justify-center px-4 lg:px-8">
                    <div className="relative w-full max-w-lg lg:max-w-xl">
                        <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
                            <defs>
                                <clipPath id="clip-main-image" clipPathUnits={'objectBoundingBox'}>
                                    <path
                                        d='M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z'
                                        fill='#D9D9D9'
                                    />
                                </clipPath>
                            </defs>
                        </svg>

                        <figure 
                            style={{ clipPath: 'url(#clip-main-image)' }} 
                            className="w-full aspect-[3/4]"
                        >
                            <img
                                src="/coursel_images/2.jpg"
                                alt="ICPC 2025 Regionals"
                                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                            />
                        </figure>
                    </div>
                </div>
            </div>

            {/* Timeline Section - Full Width Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 sm:py-6">
                    <div className="flex justify-center items-center gap-6 sm:gap-12 md:gap-16">
                        
                        <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">24 OCT</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Registration Ends</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">8 NOV</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Online Prelims</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">2-3 JAN</div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">Onsite Regionals</div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* <AnnouncementModal /> */}
        </div>
    )
}
