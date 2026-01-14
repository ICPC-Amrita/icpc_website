// 

'use client'

import React from 'react';
import hallOfFameData from '../json/hall_of_fame.json';
import Image from 'next/image';
export default function HallOfFame() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
            <div className="w-full max-w-7xl">
         <h1
  className="relative flex items-center justify-center gap-3
             text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
             font-bold text-black
             mb-6
             mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] xl:mt-[90px] 2xl:mt-[100px]"
>
  <Image
    src="/trophy.avif"
    alt="Hall of Fame"
    width={50}
    height={50}
    className="inline-block"
  />
  <span className="relative">
    Hall of Fame
    <span
      className="absolute left-0 -bottom-2 w-full h-[4px]
                 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600
                 rounded-full"
    />
  </span>
</h1>


                <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 leading-relaxed">
                    Celebrating the champions who have made their mark at the ICPC Amritapuri Regionals
                </p>
                
                {/* Mobile Card Layout */}
                <div className="block md:hidden space-y-3 sm:space-y-4">
                    {hallOfFameData.map((entry, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-3 sm:p-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                                    {entry.year}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                    Winner
                                </span>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                                {entry.team}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {entry.college}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* Desktop Table Layout */}
                <div className="hidden md:block w-full overflow-x-auto 
                bg-white dark:bg-slate-800
                shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                border border-slate-200 dark:border-slate-700">
                    <table className="w-full min-w-full text-sm lg:text-base text-left text-gray-500 dark:text-gray-400">
                      <thead className="uppercase bg-blue-900 text-white">
  <tr>
    <th className="px-6 py-5 text-sm tracking-wider">Year</th>
    <th className="px-6 py-5 text-sm tracking-wider">Team</th>
    <th className="px-6 py-5 text-sm tracking-wider">Institution</th>
  </tr>
</thead>

                        <tbody>
                            {hallOfFameData.map((entry, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <td className="px-4 lg:px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        {entry.year}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 text-gray-900 dark:text-white font-medium">
                                        {entry.team}
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 text-gray-900 dark:text-white">
                                        {entry.college}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}