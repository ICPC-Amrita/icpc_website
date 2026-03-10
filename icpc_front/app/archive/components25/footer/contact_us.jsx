import Link from "next/link"

export default function ContactUs(){
    return(
        <>
        <div className="min-w-screen min-h-[30vw] max-md:min-h-[70vw] flex justify-center items-center">
            <div className="flex max-md:flex-col">
                <div className="min-w-[60vw] max-w-[50vw] pr-[5vw] max-md:min-w-[90vw] max-md:mb-[5vw]">
                    <p className="text-[2.5vw] font-semibold tracking-tighter max-md:text-[6vw]">ICPC Asia Amritapuri</p>
                    <p className="text-[1.5vw] max-md:text-[3vw]">The premiere programming competition for university students worldwide.</p>
                </div>
                <div className="w-full min-h-full flex min-w-[25vw] max-md:min-w-[90vw]">
                    <div className="flex-1">
                        <p className="text-[2vw] font-semibold tracking-tighter max-md:text-[5vw]">Quick Links</p>
                        <ul className="text-[1.5vw] max-md:text-[3vw]">
                            <li className="mb-[0.7vw]"><Link href='#'>Home</Link></li>
                            <li className="mb-[0.7vw]"><Link href='#'>About</Link></li>
                            <li className="mb-[0.7vw]"><Link href='#'>Registration</Link></li>
                            <li className="mb-[0.7vw]"><Link href='#'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-[2vw] font-semibold tracking-tighter max-md:text-[5vw]">Connect</p>
                        <ul className="text-[1.5vw] max-md:text-[3vw]">
                            <li className="mb-[0.7vw]"><Link href="#">Twitter</Link></li>
                            <li className="mb-[0.7vw]"><Link href="#">Linkedin</Link></li>
                            <li className="mb-[0.7vw]"><Link href="#">Facebook</Link></li>
                            <li className="mb-[0.7vw]"><Link href="#">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-white max-md:text-[3vw] text-[1vw] text-center bg-blue-950 pb-[1vw]">&copy;2024 ICPC Asia Amritapuri Regional Contest. All rights reserved.</div>
        </>
    )
}