import { useState } from "react"
import Link from "next/link";
import X from "@/app/archive/components25/svg/x";

export default function Apology(){
    const [open, setOpen] = useState(true);
    return(
        <div className={`${open?'':'hidden'} min-w-full min-h-full fixed inset-0 z-40 bg-black/5 backdrop-blur-sm`}>
        <div className="fixed z-50 bottom-1/2 max-md:min-w-[90vw] left-1/2 -translate-x-1/2 translate-y-1/2 border-[2px] bg-white border-solid border-red-500 backdrop-blur-lg text-black min-w-[40vw] rounded-[1vw] m-[1vw] max-md:rounded-[4vw] max-md:p-[5vw] p-[1vw] flex flex-col justify-center">
            <div className="text-[1.5vw] max-md:text-[7vw] flex">
                <p className="font-semibold flex items-center">Notice<span className="text-red-400 text-[1.2vw] max-md:text-[5vw] font-medium">&nbsp;(16-11-2024)</span></p>
                <div className="flex-1 flex justify-end">
                    <button onClick={()=>{setOpen(false)}}><X/></button>
                </div>
            </div>
            <div className="text-[1.2vw] flex">
                <p className="max-w-[38vw] max-md:max-w-[80vw] max-md:text-[4vw]">
                We deeply regret the technical issues faced during today&apos;s ICPC contest and sincerely apologize for the inconvenience caused. To ensure fairness and provide the competitive experience you deserve, we will be organizing a re-contest. The new date, time, and updated rules will be announced soon—thank you for your patience and understanding</p>
                {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
            </div>
        </div>
        </div>
    )
}