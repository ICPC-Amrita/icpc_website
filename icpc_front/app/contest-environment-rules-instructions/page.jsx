export const metadata = {
    title: "Contest Environment, Rules & Instructions",
};

const pdfPath = "/data/Contest_Environment_Rules_Instructions.pdf";

export default function ContestEnvironment() {
    return (
        <div className="bg-white text-black flex justify-center pb-[10vw] min-h-screen flex-col items-center">
            <div className="w-[90vw] md:w-[80vw] mt-[8vw] max-md:mt-[22vw]">
                <p className="font-semibold text-[3vw] max-md:text-[6vw]">Contest Environment, Rules &amp; Instructions</p>
                <p className="text-[1.2vw] max-md:text-[4vw]">Read the PDF below or download it for reference.</p>
                <a
                    href={pdfPath}
                    download
                    className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
                >
                    Download PDF
                </a>
                <iframe
                    src={pdfPath}
                    title="Contest Environment, Rules & Instructions"
                    className="w-full h-[80vh] mt-6 border border-gray-300 rounded-lg"
                />
            </div>
        </div>
    );
}
