"use client";

import Image from "next/image";

export default function WebinarSection() {
  return (
    <div className="py-[3vw] max-md:py-[8vw] bg-white flex justify-center items-center">
      <div className="w-[85vw] flex flex-col max-md:w-[90vw]">
        {/* Title */}
        <h1
          id="perks"
          className="text-[2.5vw] mb-[2vw] max-md:text-[6vw] max-md:mb-[4vw] font-semibold text-blue-950 animate-fade-in-down"
        >
          Past Webinar Sessions
        </h1>

        {/* Grid of Perks */}
        <div className="grid grid-cols-2 gap-[2vw] max-md:grid-cols-1 max-md:gap-y-[6vw]">
          {/* Perk 1 */}
          <div className="flex gap-[2vw] items-center group cursor-pointer animate-fade-in-up animation-delay-100">
            <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/vivek_gupta.jpg"
                width={500}
                height={500}
                alt="Expanded Participation"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="transition-transform duration-300 group-hover:translate-x-2">
              <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950 transition-colors duration-300 group-hover:text-blue-600">
                Roadmap to Reaching WF in ICPC 
              </h2>
              <p>Vivek Gupta | Algo Zenith</p>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                October 4, 2025 | 8:30 PM IST
              </p>
            </div>
          </div>

          {/* Perk 3 */}
          <div className="flex gap-[2vw] items-center group cursor-pointer animate-fade-in-up animation-delay-200">
            <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/abhijith.jpg"
                width={500}
                height={500}
                alt="Certificates"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="transition-transform duration-300 group-hover:translate-x-2">
              <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950 transition-colors duration-300 group-hover:text-blue-600">
                Introduction to Competitive Programming 
              </h2>
              <p>Abhijith R Pillai | ICPC@Amrita Club Lead</p>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                October 7, 2025 | 6:30 PM IST
              </p>
            </div>
          </div>
           {/* Perk 3 */}
          <div className="flex gap-[2vw] items-center group cursor-pointer animate-fade-in-up animation-delay-200">
            <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/gayathry.jpeg"
                width={500}
                height={500}
                alt="Certificates"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="transition-transform duration-300 group-hover:translate-x-2">
              <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950 transition-colors duration-300 group-hover:text-blue-600">
                 Live Problem Solving & How to Make the Best Use of CP Platforms
              </h2>
              <p>Gayathry S. Namputhiri | ICPC@Amrita Club Member</p>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                October 11, 2025 | 6:30 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}