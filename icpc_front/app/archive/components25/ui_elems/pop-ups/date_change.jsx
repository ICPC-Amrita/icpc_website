import { useState } from "react"
import Link from "next/link";
import X from "@/app/archive/components25/svg/x";

export default function PrelimDateUpdate(){
    const [open, setOpen] = useState(true);
    return(
        <div className={`${open?'':'hidden'} min-w-full min-h-full fixed inset-0 z-40 bg-black/5 backdrop-blur-sm`}>
        <div className="fixed z-50 bottom-1/2 max-md:min-w-[90vw] left-1/2 -translate-x-1/2 translate-y-1/2 border-[2px] bg-white border-solid border-blue-500 backdrop-blur-lg text-black min-w-[38vw] rounded-[1vw] m-[1vw] max-md:rounded-[4vw] max-md:p-[5vw] p-[1vw] flex flex-col justify-center">
            <div className="text-[1.5vw] max-md:text-[7vw] flex">
                <p className="font-semibold flex items-center">Notice<span className="text-gray-500 text-[1.2vw] max-md:text-[5vw] font-medium">&nbsp;(18-11-2024)</span></p>
                <div className="flex-1 flex justify-end">
                    <button onClick={()=>{setOpen(false)}}><X/></button>
                </div>
            </div>
            <div className="text-[1.2vw] flex">
                <p className="max-w-[35vw] max-md:max-w-[80vw] max-md:text-[4vw]">
                    The ICPC India Preliminary Round re-contest is scheduled for <strong>Saturday, November 23, 2024</strong>, from <span className="font-semibold">9:00 PM</span> to <span className="font-semibold">11:30 PM</span>.
                    <br/>CodeChef platform will be used in the Preliminary Round.
                </p>
                {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
            </div>
        </div>
        </div>
    )
}