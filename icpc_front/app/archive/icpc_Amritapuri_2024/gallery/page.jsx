import React from 'react';
import { Gallery } from 'next-gallery';

// const images = {
//     Day_1: [
//         ...Array.from({ length: 42 }, (_, i) => ({
//             src: `/ICPC_Photos/Day_1/${i + 1}.jpg`,
//             aspect_ratio: i % 3 === 0 ? 4 / 3 : i % 3 === 1 ? 3 / 2 : 16 / 9,
//         })),
//     ],
//     Day_2: [
//         ...Array.from({ length: 16 }, (_, i) => ({
//             src: `/ICPC_Photos/Day_2/${i + 1}.jpg`,
//             aspect_ratio: i % 4 === 0 ? 4 / 3 : i % 4 === 1 ? 3 / 2 : i % 4 === 2 ? 16 / 9 : 21 / 9,
//         })),
//     ],
//     Latest: [
//         ...Array.from({ length: 146 }, (_, i) => ({
//             src: `/ICPC_Photos/Latest_pic/${i + 1}.JPG`,
//             aspect_ratio: i % 2 === 0 ? 16 / 9 : 4 / 3,
//         })),
//         ...Array.from({ length: 7 }, (_, i) => ({
//             src: `/ICPC_Photos/Latest_pic/ed/${i + 1}.jpg`,
//             aspect_ratio: i % 2 === 0 ? 16 / 9 : 4 / 3,
//         })),
//     ],
// };

const widths = [500, 1000, 1600];
const ratios = [2.2, 4, 6, 8];

export default function GalleryPage() {
    return (
        <div className="bg-white text-black mt-[5vw] min-h-screen">
            <p className="font-semibold text-[3vw] max-md:text-[6vw] justify-center flex mb-[2vw] max-md:mb-[4vw] max-md:mt-[8vw]">Event Gallery</p>
            {/* <div className="flex flex-col gap-10 mx-[7vw]">
                <Gallery {...{ widths, ratios, images: [...images.Day_1, ...images.Day_2, ...images.Latest] }} lastRowBehavior="match-previous" />
            </div> */}
        </div>
    );
}
