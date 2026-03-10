import { useState } from "react"
import Link from "next/link";
import X from "@/app/archive/components25/svg/x";

export default function RankCriteria(){
    const [open, setOpen] = useState(true);
    return(
        <div className={`${open?'':'hidden'} min-w-full min-h-full fixed inset-0 z-40 bg-black/5 backdrop-blur-sm`}>
        <div className="fixed z-50 bottom-1/2 max-md:min-w-[90vw] left-1/2 -translate-x-1/2 translate-y-1/2 border-[2px] bg-white border-solid border-gray-500 backdrop-blur-lg text-black min-w-[38vw] rounded-[1vw] m-[1vw] max-md:rounded-[4vw] max-md:p-[5vw] p-[1.5vw] flex flex-col justify-center">
            <div className="text-[1.5vw] max-md:text-[7vw] flex">
                <p className="font-semibold flex items-center">Notice<span className="text-gray-500 text-[1.2vw] max-md:text-[5vw] font-medium">&nbsp;(01-12-2024)</span></p>
                <div className="flex-1 flex justify-end">
                    <button onClick={()=>{setOpen(false)}}><X/></button>
                </div>
            </div>
            <div className="text-[1.2vw] flex">
                <div className="max-w-[35vw] max-md:max-w-[80vw] max-md:text-[4vw]">
                    <p className="mt-[.3vw]">The <span className="font-semibold">ICPC ranking process</span> has been updated to ensure fairness after addressing recent challenge.</p>
                    <p className="mt-[.2vw]"><Link href="/archive/icpc_Amritapuri_2025/ranking-process"><span className="font-semibold text-blue-800 hover:text-purple-900 underline mt-[1vw]">Click here</span></Link> to view the detailed breakdown of the <span className="font-semibold">adjustments</span> and <span className="font-semibold">final rankings</span>.</p>
                </div>
                {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
            </div>
        </div>
        </div>
    )
}