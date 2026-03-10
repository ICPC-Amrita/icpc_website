export default function ImpDates(){
    return(
        <div id="important dates" className="text-black w-full flex flex-col items-center mb-[15vw]">
            <div className="min-w-[70vw] max-md:min-w-[90vw] text-[3vw] font-semibold max-md:text-[6vw]">Agenda</div>
            <div className="min-w-[70vw] max-md:min-w-[90vw] text-[1.5vw] max-md:text-[4vw]">Some important dates to look out for...</div>
            <div className="min-w-screen flex justify-center items-center flex-col min-h-[14.3vw] mt-[3vw]">
                <div className="md:bg-black flex flex-col min-w-[100vw] min-h-[1vw]">
                    <div className="flex md:hidden">
                        <div className="min-w-[20vw] bg-black min-h-[1vw]"></div>
                        <div className="flex-1 min-h-[1vw]"></div>
                    </div>
                    <div className="min-h-[130vw] md:hidden bg-black ml-[19vw] w-[1vw]"></div>
                    <div className="flex md:hidden">
                        <div className="flex-1 min-h-[1vw]"></div>
                        <div className="min-w-[81vw] bg-black min-h-[1vw]"></div>
                    </div>
                </div>
                <div className="min-w-[80vw] max-md:min-w-[90vw] max-md:gap-y-[2vw] flex absolute z-10 md:mt-[2vw] max-md:flex-col">
                    <div className="flex-1 flex md:flex-col md:justify-center max-md:justify-start items-center">
                        <div className="bg-blue-500 rounded-full min-h-[12vw] min-w-[12vw] max-md:min-w-[28vw] max-md:min-h-[28vw] flex justify-center items-center">
                            <div className="text-white m-[1vw]">
                                <div className=" flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw] max-md:text-[12vw]">10</span></div>
                                <div className="text-[1.2vw] max-md:text-[3vw]">TBA</div>
                            </div>
                        </div>
                        <p className="text-black text-[1.5vw] max-md:text-[4vw] max-md:ml-[4vw]">Registration opens</p>
                    </div>
                    <div className="flex-1 flex md:justify-center md:flex-col max-md:justify-start items-center">
                        <div className="bg-yellow-500 rounded-full min-h-[12vw] min-w-[12vw] max-md:min-w-[28vw] max-md:min-h-[28vw] flex justify-center items-center">
                            <div className="text-white">
                                <div className="flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw] max-md:text-[12vw]">31</span></div>
                                <div className="text-[1.2vw] max-md:text-[3vw]">TBA</div>
                            </div>
                        </div>
                        <p className="text-black text-[1.5vw] max-md:text-[4vw] max-md:ml-[4vw]">Registration closes</p>
                    </div>
                    <div className="flex-1 flex md:justify-center md:flex-col max-md:justify-start items-center">
                        <div className="bg-red-700 rounded-full min-h-[12vw] min-w-[12vw] max-md:min-w-[28vw] max-md:min-h-[28vw] flex justify-center items-center">
                            <div className="text-white">
                                <div className="flex justify-center items-end"><span className="text-[5.5vw] -mb-[1.7vw] -m-[1vw] max-md:text-[12vw]">16</span></div>
                                <div className="text-[1.2vw] max-md:text-[3vw]">TBA</div>
                            </div>
                        </div>
                        <p className="text-black text-[1.5vw] max-md:text-[4vw] max-md:ml-[4vw]">Contest Date</p>
                    </div>
                    <div className="flex-1 flex md:justify-center md:flex-col max-md:justify-start items-center">
                        <div className="text-white bg-blue-900 rounded-full min-h-[12vw] max-md:min-w-[28vw] max-md:min-h-[28vw] min-w-[12vw] flex justify-center items-center text-[3vw] max-md:text-[8vw]">TBD</div>
                        <p className="text-black text-[1.5vw] max-md:text-[4vw] max-md:ml-[4vw]">Onsite Date</p>
                    </div>
                </div>
            </div>
        </div>
    )
}