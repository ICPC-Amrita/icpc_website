import { useState } from "react"
import Link from "next/link";
import X from "@/app/archive/components25/svg/x";

export default function RankList(){
    const [open, setOpen] = useState(true);
    return(
        <div className={`${open?'':'hidden'} min-w-full min-h-full fixed inset-0 z-40 bg-black/5 backdrop-blur-sm`}>
        <div className="fixed z-50 bottom-1/2 max-md:min-w-[90vw] left-1/2 -translate-x-1/2 translate-y-1/2 border-[2px] bg-white border-solid border-gray-500 backdrop-blur-lg text-black min-w-[45vw] rounded-[1vw] m-[1vw] max-md:rounded-[4vw] max-md:p-[5vw] p-[1.5vw] flex flex-col justify-center">
            <div className="text-[1.5vw] max-md:text-[7vw] flex">
                <p className="font-semibold flex items-center">Notice<span className="text-gray-500 text-[1.2vw] max-md:text-[5vw] font-medium">&nbsp;(02-12-2024)</span></p>
                <div className="flex-1 flex justify-end">
                    <button onClick={()=>{setOpen(false)}}><X/></button>
                </div>
            </div>
            <div className="text-[1.2vw] flex">
                <div className="max-w-[45vw] max-md:max-w-[80vw] max-md:text-[4vw]">
                    <p className="mt-[.3vw]">The <strong>official Rank List</strong> for ICPC 2024 has been published, following the guidelines outlined in the ICPC Ranking Process document.</p>
                    <p className="mt-[.2vw]"><Link href="/archive/icpc_Amritapuri_2025/ranked-teams"><span className="font-semibold text-blue-800 hover:text-purple-900 underline mt-[1vw]">Click here</span></Link> the view the <span className="font-semibold">Rank List</span>.</p>
                    <p className="mt-[.7vw]"><strong>Disclaimer:</strong> <span className="font-semibold"></span>This ranklist is provisional and subject to change. Teams found guilty of plagiarism will be removed, while those cleared may be reinstated. Final onsite selection depends on the criteria of individual regional sites.</p>
                </div>
                {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
            </div>
        </div>
        </div>
    )
}