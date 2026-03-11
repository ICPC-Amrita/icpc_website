"use client";

import Image from "next/image";

export default function ExclusivePerks2() {
  return (
    <div className="min-h-screen max-md:py-[5vw] bg-white flex justify-center items-center">
      <div className="w-[85vw] flex flex-col max-md:w-[90vw]">
        {/* Title */}
        <h1
          id="perks"
          className="text-[2.5vw] mb-[3vw] max-md:text-[6vw] max-md:mb-[5vw] font-semibold text-blue-950"
        >
          Exclusive Perks
        </h1>

        {/* Grid of Perks */}
        <div className="grid grid-cols-2 gap-[3vw] max-md:grid-cols-1 max-md:gap-y-[10vw]">
          {/* Perk 1 */}
          <div className="flex gap-[2vw] items-center">
            <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden flex-shrink-0">
              <Image
                src="/ICPC_Photos/ICPC_25/Day-1/arena.jpg"
                width={500}
                height={500}
                alt="Expanded Participation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950">
                Expanded On-Site Participation
              </h2>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600">
                {/* We have increased our on-site capacity, offering more students
                the chance to get selected for the regionals. */}
                We have added an extra site in <strong>Mysuru</strong> and increased our on-site slot to <strong>~310 teams</strong>,
                offering more students the chance to get selected for the regionals.
              </p>
            </div>
          </div>

          {/* Perk 2 */}
          {/* <div className="flex gap-[2vw] items-center">
            <div className="w-[13vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden flex-shrink-0">
              <Image
                src="/jaskaransingh.png"
                width={500}
                height={500}
                alt="Exclusive Webinar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950">
                Exclusive Webinar
              </h2>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600">
                Access an exclusive webinar led by an ICPC World Finalist,
                offering invaluable tips and strategies.
              </p>
            </div>
          </div> */}

          {/* Perk 3 */}
          <div className="flex gap-[2vw] items-center">
            <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden flex-shrink-0">
              <Image
                src="/ICPC_Photos/ICPC_25/Day-1/first.jpg"
                width={500}
                height={500}
                alt="Certificates"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950">
                Noteworthy Certificates
              </h2>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600">
                All teams who submit at least one solution successfully will
                receive a certificate of participation.
              </p>
            </div>
          </div>

          {/* Perk 4 */}
          <div className="flex gap-[2vw] items-center">
            <div className="w-[15vw] h-[15vw] max-md:w-[30vw] max-md:h-[30vw] rounded-[1vw] overflow-hidden flex-shrink-0">
              <Image
                src="/smart_india.jpg"
                width={500}
                height={500}
                alt="Coach Recognition"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[0.5vw] text-blue-950">
                Coach Recognition
              </h2>
              <p className="text-[1vw] max-md:text-[3vw] text-gray-600">
                Special certificates for coaches who get 5 or more teams
                registered, recognizing their effort in fostering talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
