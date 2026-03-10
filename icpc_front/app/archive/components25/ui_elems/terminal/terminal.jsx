'use client'

import { useState, useRef, useEffect } from "react"

export default function Terminal(){
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState([0, 0]);
    const [position, setPosition] = useState({ left: null, top: null });

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setPosition({left: rect.x, top: rect.y})
        }
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset([position.left - e.clientX, position.top - e.clientY]);
    };
    
    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
            left: e.clientX + offset[0],
            top: e.clientY + offset[1],
            });
        }
    };
    
    const handleMouseUp = () => {
        setIsDragging(false);
    };
    
    return(
        <>
            <div className="min-w-[35vw] min-h-[20vw] rounded-[1vw] overflow-scroll flex flex-col"></div>
            <div className="absolute z-20 bg-black min-w-[35vw] min-h-[20vw] rounded-[1vw] overflow-scroll flex flex-col"
                style={{ left: position.left + "px", top: position.top + "px" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                >
                <div ref={ref} className="min-h-[2vw] bg-gray-700 w-full flex justify-start items-center">
                    <div className="rounded-full ml-[0.5vw] bg-red-500 min-h-[1vw] min-w-[1vw]"></div>
                    <div className="rounded-full ml-[0.2vw] bg-yellow-500 min-h-[1vw] min-w-[1vw]"></div>
                    <div className="rounded-full ml-[0.2vw] bg-green-500 min-h-[1vw] min-w-[1vw]"></div>
                </div>
                <div className="flex px-[0.5vw]">
                    test@test$<input type="text" placeholder="--help" className="pl-[0.5vw] flex-1 bg-transparent"></input>
                </div>
            </div>
        </>
    )
}