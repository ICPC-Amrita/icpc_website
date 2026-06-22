import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* Load Caveat font for handwriting style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-caveat { font-family: 'Caveat', cursive; }
        .think-again-underline {
          position: relative;
          display: inline-block;
        }
        .think-again-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 6px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 12'%3E%3Cpath d='M2 8 Q50 2 100 8 Q150 14 198 6' stroke='%23F59E0B' stroke-width='3.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center/100% 100%;
        }
      ` }} />

      <section className="bg-white w-screen px-8 sm:px-14 md:px-20 lg:px-28 xl:px-32 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-8 lg:gap-12">

          {/* ── Left column ── */}
          <div className="flex-1 max-w-xl">

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.15] text-gray-900 mb-3">
              Think ICPC is<br />
              only for coding<br />
              <span className="text-blue-600">geniuses?</span>
            </h1>

            {/* "Think again." handwriting line */}
            <p className="font-caveat text-3xl sm:text-4xl font-bold text-gray-900 mb-5 think-again-underline">
              Think again.
            </p>

            {/* Body copy */}
            <p className="text-gray-600 text-base sm:text-[1.05rem] leading-relaxed mb-8 max-w-md">
              Every year, thousands of students like you take part in ICPC. You
              don&apo s;t need to be the best. You just need to start with the
              courage to try.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-row flex-wrap items-center gap-4 mb-10">
              <Link
                id="register-button"
                href="https://icpc.global/login?redirect_uri=/private/teamRegistration/site/40197"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 sm:px-6 rounded-md transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Register Your Team
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg> */}
              </Link>
              {/* <a
                href="#how-to-start"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-4 py-3 sm:px-6 rounded-md transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                How to Get Started
              </a> */}
            </div>

            {/* Three mini stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {/* Team of 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.874M9 20H4v-2a4 4 0 015-3.874m6 5.874a4 4 0 10-8 0m8 0v-2m-8 2v-2m4-10a4 4 0 100-8 4 4 0 000 8zm6 2a3 3 0 100-6 3 3 0 000 6zm-12 0a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">Team of 3</p>
                  <p className="text-gray-500 text-xs leading-tight">Find friends.<br />Build together.</p>
                </div>
              </div>

              {/* Solve Problems */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">Solve Problems</p>
                  <p className="text-gray-500 text-xs leading-tight">Think hard.<br />Have fun.</p>
                </div>
              </div>

              {/* Win Experiences */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M5 3h14l-1.5 8A5 5 0 017.5 11 5 5 0 015 3zm0 0l-1 5m15-5l1 5" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">Win Experiences</p>
                  <p className="text-gray-500 text-xs leading-tight">Certificates, rewards<br />&amp; so much more.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column — illustration ── */}
          <div className="flex-[1.4] flex justify-center items-center">
            <div className="relative w-full max-w-[720px]">

              {/* Decorative icons top-right */}
              <div className="absolute top-2 right-2 text-yellow-400 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 015.657 11.243A5 5 0 0117 18H7a5 5 0 01-.657-5.757A7 7 0 0112 2zm0 16v2m-2 2h4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
                </svg>
              </div>
              <div className="absolute top-14 right-0 text-blue-300 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M5 3h14l-1.5 8A5 5 0 017.5 11 5 5 0 015 3z" />
                </svg>
              </div>

              {/* Main illustration image */}
              <Image
                src="/assets/beginner/image1.png"
                alt="Three students collaborating on competitive programming"
                width={760}
                height={620}
                className="relative z-10 w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
