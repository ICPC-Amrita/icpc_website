export default function ContactUs2(){
    return(
        <>
        <div className="flex-[3] max-md:flex-[4] text-white max-md:pt-[5vw] flex justify-center items-center">
                <div className="h-full flex min-w-[90vw] md:min-w-[80vw]">
                    {/* Contact Content */}
                    <div className="flex-1 flex max-md:flex-col gap-[2vw]  py-[2vw] min-w-[85vw] max-md:min-w-[90vw]">
                        {/* Contact Info */}
                        <div className="flex-1">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Contact Us</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300">
                                <p>Amrita School of Engineering</p>
                                <p>Amritapuri, Kollam</p>
                                <p>Kerala, India - 690525</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex-1">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Quick Links</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300 space-y-[0.5vw]">
                                <p className="hover:text-blue-300 cursor-pointer">ICPC Global</p>
                                <p className="hover:text-blue-300 cursor-pointer">Registration</p>
                                <p className="hover:text-blue-300 cursor-pointer">Important Dates</p>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="flex-1">
                            <h2 className="text-[1.5vw] max-md:text-[4vw] font-semibold mb-[1vw]">Get in Touch</h2>
                            <div className="text-[1vw] max-md:text-[3vw] text-gray-300">
                                <p>Email: icpc@am.amrita.edu</p>
                                <p>Phone: +91 476 280 1111</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center py-[1vw] text-[0.9vw] max-md:text-[2.5vw] text-gray-300">
                &copy; 2024 ICPC Asia Amritapuri Regional Contest. All rights reserved.
            </div>
        </>
    )
}