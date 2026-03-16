import Image from "next/image"

export default function WhyParticipate(){
    return(
        <div id="why_participate" className="min-h-screen max-md:py-[5vw] bg-blue-950 flex justify-center items-center">
            <div className="w-[85vw] max-md:w-[90vw] flex flex-col">
                {/* Header Section */}
                <div className="flex max-md:flex-col gap-[2vw] mb-[4vw] flex-col">
                    <div className="flex-1">
                        <h1 className="text-[2.5vw] max-md:text-[6vw] font-semibold text-white">
                           Why Choose the Amritapuri Multisite Regionals?

                        </h1>
                    </div>
                    <div className="flex-1">
                        <p className="text-[1.1vw] max-md:text-[3vw] text-gray-300">
                            {/* <strong className="text-white">Amrita</strong> isn&apos;t just an institution—it&apos;s a diverse experience across multiple campuses, each offering something unique. At <strong className="text-white">Amritapuri</strong>, 
                            you&apos;ll be inspired by the tranquil backwaters of Kerala; <strong className="text-white">Coimbatore</strong> surrounds you with scenic hills that fuel focus and creativity; and 
                            in <strong className="text-white">Bangalore</strong>, you&apos;re at the heart of India&apos;s Silicon Valley. Here&apos;s what you can expect at the regionals: */}
                         This year, <strong>Amritapuri</strong> offers <strong>~310 onsite slots</strong>, giving more teams the chance to qualify and experience the excitement of onsite competition.

We also provide a dedicated Telegram channel for participant support at every stage.

By registering for the <strong>Amritapuri Regionals</strong>, you join a vibrant ecosystem of learning, camaraderie, and technical excellence. With the addition of our new <strong>Mysuru</strong> site, alongside <strong>Coimbatore</strong>, <strong>Kollam</strong>, and <strong>Bangalore</strong>, the <strong>Amritapuri region</strong> now brings even more opportunities to compete.

Each site offers its own inspiration — <strong>Amritapuri’s</strong> serene backwaters, <strong>Coimbatore’s</strong> scenic hills, <strong>Bangalore’s</strong> tech-driven energy, and <strong>Mysuru’s</strong> rich cultural heritage.

We warmly invite you to be part of the <strong>Amritapuri Online Regionals</strong>.

                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-[3vw] max-md:grid-cols-1">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center gap-[2vw]">
                        <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden bg-white/10 p-[2vw]">
                            <Image 
                                src="/expert.png" 
                                width={500} 
                                height={500} 
                                alt="Expert Organization"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw] text-white">
                                Expert Organization
                            </h2>
                            <p className="text-[1vw] max-md:text-[3vw] text-gray-300 max-w-[25vw] max-md:max-w-[80vw]">
                                Benefit from our extensive experience in hosting ICPC regionals, ensuring a smooth and professional contest environment.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center gap-[2vw]">
                        <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden bg-white/10 p-[2vw]">
                            <Image 
                                src="/guycoding.png" 
                                width={500} 
                                height={500} 
                                alt="State-of-the-Art Facilities"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw] text-white">
                                State-of-the-Art Facilities
                            </h2>
                            <p className="text-[1vw] max-md:text-[3vw] text-gray-300 max-w-[25vw] max-md:max-w-[80vw]">
                                Access advanced air-conditioned labs and infrastructure designed to support peak performance.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center gap-[2vw]">
                        <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden bg-white/10 p-[2vw]">
                            <Image 
                                src="/team.png" 
                                width={500} 
                                height={500} 
                                alt="Inspiring Atmosphere"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw] text-white">
                                Inspiring Atmosphere
                            </h2>
                            <p className="text-[1vw] max-md:text-[3vw] text-gray-300 max-w-[25vw] max-md:max-w-[80vw]">
                                Immerse yourself in an academic setting that promotes innovation, collaboration, and technical excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}