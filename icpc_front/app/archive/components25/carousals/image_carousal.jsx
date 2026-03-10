import Image from "next/image"

export default function ImageCarousal(){
    return(
        <div className="flex animate-infinite-scroll-x">
            <div className="min-w-[30vw] min-h-[20vw] max-md:min-w-[50vw] max-md:min-h-[37vw] rounded-[1vw] max-md:mx-[1.5vw] bg-slate-500 mx-[1vw]"></div>
            <div className="min-w-[30vw] min-h-[20vw] max-md:min-w-[50vw] max-md:min-h-[37vw] rounded-[1vw] max-md:mx-[1.5vw] bg-slate-500 mx-[1vw]"></div>
            <div className="min-w-[30vw] min-h-[20vw] max-md:min-w-[50vw] max-md:min-h-[37vw] rounded-[1vw] max-md:mx-[1.5vw] bg-slate-500 mx-[1vw]"></div>
            <div className="min-w-[30vw] min-h-[20vw] max-md:min-w-[50vw] max-md:min-h-[37vw] rounded-[1vw] max-md:mx-[1.5vw] bg-slate-500 mx-[1vw]"></div>
            <div className="min-w-[30vw] min-h-[20vw] max-md:min-w-[50vw] max-md:min-h-[37vw] rounded-[1vw] max-md:mx-[1.5vw] bg-slate-500 mx-[1vw]"></div>
        </div>
    )
}