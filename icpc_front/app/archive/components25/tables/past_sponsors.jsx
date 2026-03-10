'use client'
import Image from "next/image";

export default function Pastsponsors() {
  return (
    <div className="text-center py-10 px-4 space-y-16">
      {/* Silver Level Partners */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-8">Past Sponsors</h2>
        <div className="flex justify-center items-center flex-wrap gap-10">
          <div className="w-[150px] sm:w-[180px] md:w-[200px]">
            <Image
              src="/jetbrains-logo.png"
              alt="JetBrains"
              className="w-full h-auto object-contain"
              width={500}
              height={300}
            />
          </div>
          {/* Add more logos here in same format */}
        </div>
      </div>

      {/* Bronze Level Partners */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-8">Past Outreach Partners</h2>
        <div className="flex justify-center items-center flex-wrap gap-10">
          <div className="w-[150px] sm:w-[180px] md:w-[200px]">
            <Image
              src="/geeks-for-geeks.png"
              alt="GeeksForGeeks"
              className="w-full h-auto object-contain"
              width={500}
              height={300}
            />
          </div>
          <div className="w-[150px] sm:w-[180px] md:w-[200px]">
            <Image
              src="https://cdn.codechef.com/images/cc-logo.svg"
              alt="CodeChef"
              className="w-full h-auto object-contain"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
