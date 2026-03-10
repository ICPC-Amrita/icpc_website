import Image from "next/image"
import Link from "next/link";

export default function WhatsICPC(){
    return(
        <div className="min-h-screen bg-white flex justify-center items-center py-[5vw]">
            <div className="w-[85vw] flex flex-col max-md:w-[95vw]">
                {/* Title and Main Description */}
                <div className="mb-[4vw] max-md:px-[2vw]">
                    <h1 className="text-[2.5vw] mb-[1vw] max-md:text-[6vw] font-semibold text-blue-950">
                        What&apos;s ICPC?
                    </h1>
                    <div className="space-y-[1vw]">
                        <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-left">
                            The International Collegiate Programming Contest (ICPC) is the world&apos;s oldest and most esteemed programming competition and is the ultimate stage for students passionate about coding and problem-solving. 
                            ICPC sharpens <span className="font-semibold">creativity</span>, <span className="font-semibold">teamwork</span>, and <span className="font-semibold">resilience</span>—qualities that make a real difference in your day to day and professional life.
                        </p>
                        <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-left">
                            Have no worry if you&apos;re just a <span className="font-semibold">beginner</span>—ICPC welcomes all skill levels and backgrounds, from computer science to biology, chemistry, and more. 
                            In today&apos;s AI-driven world, ICPC helps you develop critical problem-solving and logical skills that machines can&apos;t replicate. 
                            It&apos;s a space to build resilience, and prepare yourself with skills that keep you relevant, no matter how fast technology evolves.
                        </p>
                    </div>
                </div>

                {/* Grid of Benefits */}
                <div className="grid grid-cols-2 gap-[2vw] max-md:grid-cols-1 max-md:px-[2vw]">
                    {/* Benefit 1 */}
                    <div className="flex gap-[2vw] items-start max-md:flex-col max-md:items-center">
                        <div className="w-[15vw] h-[15vw] max-md:w-[40vw] max-md:h-[40vw] rounded-[1vw] overflow-hidden flex-shrink-0">
                            <Image 
                                src="/guy_fix_server.webp" 
                                width={500} 
                                height={500} 
                                alt="Problem Solving"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center max-md:items-center">
                            <h2 className="text-[1.5vw] max-md:text-[4.5vw] font-semibold mb-[0.5vw] text-blue-950 max-md:text-center">
                                Problem Solving Excellence
                            </h2>
                            <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-center">
                                Dive into the art of solving complex problems under real-world constraints, enhancing your analytical and coding abilities.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex gap-[2vw] items-start max-md:flex-col max-md:items-center">
                        <div className="w-[15vw] h-[15vw] max-md:w-[40vw] max-md:h-[40vw] rounded-[1vw] overflow-hidden flex-shrink-0">
                            <Image 
                                src="/guy_learning.webp" 
                                width={500} 
                                height={500} 
                                alt="Networking"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center max-md:items-center">
                            <h2 className="text-[1.5vw] max-md:text-[4.5vw] font-semibold mb-[0.5vw] text-blue-950 max-md:text-center">
                                Global Community
                            </h2>
                            <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-center">
                                Connect with passionate coders worldwide and build lasting relationships with like-minded problem solvers.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex gap-[2vw] items-start max-md:flex-col max-md:items-center">
                        <div className="w-[15vw] h-[15vw] max-md:w-[40vw] max-md:h-[40vw] rounded-[1vw] overflow-hidden flex-shrink-0">
                            <Image 
                                src="/bagpack.png" 
                                width={500} 
                                height={500} 
                                alt="Career Growth"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center max-md:items-center">
                            <h2 className="text-[1.5vw] max-md:text-[4.5vw] font-semibold mb-[0.5vw] text-blue-950 max-md:text-center">
                                Future-Ready Skills
                            </h2>
                            <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-center">
                                Develop critical thinking and logical skills that remain relevant in our rapidly evolving technological landscape.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="flex gap-[2vw] items-start max-md:flex-col max-md:items-center">
                        <div className="w-[15vw] h-[15vw] max-md:w-[40vw] max-md:h-[40vw] rounded-[1vw] overflow-hidden flex-shrink-0">
                            <Image 
                                src="/trophy.webp" 
                                width={500} 
                                height={500} 
                                alt="Competition"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center max-md:items-center">
                            <h2 className="text-[1.5vw] max-md:text-[4.5vw] font-semibold mb-[0.5vw] text-blue-950 max-md:text-center">
                                Inclusive Competition
                            </h2>
                            <p className="text-[1.1vw] max-md:text-[3.2vw] text-gray-600 leading-snug max-md:text-center">
                                Welcome to all skill levels and backgrounds, from computer science enthusiasts to interdisciplinary problem solvers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}