'use client';

import { Heart, Mail } from "lucide-react";
import { MdAnnouncement } from "react-icons/md";

export function BannerComponent() {
  return (
    <div className="w-full border-b border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
      <div className="flex w-full justify-between p-4">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <Heart className="mr-4 h-4 w-4" />
            <span>
              Thankyou Everyone for making Asia Amritapuri Regionals 2025 a Huge Success! &nbsp;

              {/* <a href="/onsite-winners"
                
                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                More Details ...
              </a> */}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}