import { useState } from "react"
import Link from "next/link";
import X from "@/app/archive/components25/svg/x";

export default function RegisterCheck(){
    const [open, setOpen] = useState(true);
    return(
        <div className={`fixed z-50 bottom-0 left-0 border-[0px] bg-blue-500/[1] border-dashed border-[#737373] backdrop-blur-lg text-white min-w-[30vw] rounded-[1vw] m-[1vw] ${open?'':'hidden'} p-[1vw] flex flex-col justify-center`}>
            <div className="text-[1.5vw] flex">
                <p className="font-semibold">Already Registered?</p>
                <div className="flex-1 flex justify-end">
                    <button onClick={()=>{setOpen(false)}}><X/></button>
                </div>
            </div>
            <div className="text-[1.2vw] flex">
                <p className="max-w-[28vw]">
                    <Link href="/archive/icpc_Amritapuri_2025/registered-teams" className="underline hover:font-semibold">Check</Link> and confirm if your team has been accepted.</p>
                {/* <button className="bg-white rounded-[1vw] flex-1">Click</button> */}
            </div>
        </div>
    )
}