import { useState } from "react"
import Link from "next/link";
import X from "@/app/archive/components25/svg/x";

export default function PracticeRound(){
    const [open, setOpen] = useState(true);
    return(
        <div className={`${open?'':'hidden'} min-w-full min-h-full fixed inset-0 z-40 bg-black/5 backdrop-blur-sm`}>
        <div className="fixed z-50 bottom-1/2 max-md:min-w-[90vw] left-1/2 -translate-x-1/2 translate-y-1/2 border-[2px] bg-white border-solid border-gray-500 backdrop-blur-lg text-black min-w-[38vw] rounded-[1vw] m-[1vw] max-md:rounded-[4vw] max-md:p-[5vw] p-[1.5vw] flex flex-col justify-center">
            <div className="text-[1.5vw] max-md:text-[7vw] flex">
                <p className="font-semibold flex items-center">Notice<span className="text-gray-500 text-[1.2vw] max-md:text-[5vw] font-medium">&nbsp;(20-11-2024)</span></p>
                <div className="flex-1 flex justify-end">
                    <button onClick={()=>{setOpen(false)}}><X/></button>
                </div>
            </div>
            <div className="text-[1.2vw] flex">
                <p className="max-w-[35vw] max-md:max-w-[80vw] max-md:text-[4vw]">
                    The ICPC India Practice Contest is scheduled for tomorrow, <span className="font-semibold">Thursday, November 21, 2024</span>, from <span className="font-semibold">6:30 PM</span>.
                    <br/>Participants will receive their <span className="font-semibold">login credentials</span> via email, which can also be used for the <span className="font-semibold">main contest</span>.
                </p>
                {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
            </div>
        </div>
        </div>
    )
}