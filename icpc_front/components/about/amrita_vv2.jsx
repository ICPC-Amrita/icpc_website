import Link from "next/link"
import Image from "next/image"

export default function AboutAmrita() {
  return (
    <div id="about_amrita" className="min-h-screen flex flex-col">
      {/* About Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            {/* Copy (LEFT SIDE) */}
            <div custom={1} className="flex flex-col gap-4">
              <h2 className="text-balance text-3xl font-semibold text-blue-900 md:text-5xl">
                About Amrita Vishwa Vidyapeetham
              </h2>

              <p className="text-pretty text-base leading-relaxed text-gray-700 md:text-lg">
                Amrita Vishwa Vidyapeetham is a multi-disciplinary, research-intensive, private
                university, educating a vibrant student population of over 24,000 by 1700+ strong
                faculty. Accredited with the highest possible &#39;A++&#39; grade by NAAC, Amrita
                offers more than 250 UG, PG, and Ph.D. programs in Engineering, Management, Medical
                Sciences including Ayurveda, Life Sciences, Physical Sciences, Agriculture Sciences,
                Arts &amp; Humanities, and Social &amp; Behavioral Sciences.
              </p>

              <p className="text-pretty text-base leading-relaxed text-gray-700 md:text-lg">
                With its extensive network of nine campuses spread across Amaravati, Amritapuri,
                Bengaluru, Chennai, Coimbatore, Kochi, Mysuru, Nagercoil(*) and NCR Delhi
                (Faridabad), Amrita University stands as one of India&#39;s preeminent private
                educational institutions.
              </p>
            </div>

            {/* Image (RIGHT SIDE) */}
            <figure className="group relative overflow-hidden rounded-xl shadow-md">
              <Image
                src="/amritacampus.jpg"
                alt="Amrita Vishwa Vidyapeetham campus courtyard and main building"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                priority
                className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
              />
              <figcaption className="sr-only">Campus view</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
     <footer className="mt-auto bg-blue-950 text-white" aria-labelledby="site-footer-heading">
        <h2 id="site-footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Contact Info */}
            <section aria-labelledby="contact-heading">
              <h3 id="contact-heading" className="text-lg font-semibold">
                Contact Us
              </h3>
              <address className="mt-4 not-italic text-gray-300 leading-relaxed">
                <p>Amrita School of Engineering</p>
                <p>Amritapuri, Kollam</p>
                <p>Kerala, India - 690525</p>
              </address>
            </section>

            {/* Quick Links */}
            <nav aria-labelledby="quick-links-heading">
              <h3 id="quick-links-heading" className="text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>
                  <Link
                    href="https://icpc.global/"
                    className="transition-colors hover:text-sky-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ICPC Global
                  </Link>
                </li>
                {/* <li>
                  <Link href="" className="transition-colors hover:text-sky-400">
                    Registration
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="/#important_dates" className="transition-colors hover:text-sky-400">
                    Important Dates
                  </Link>
                </li> */}
              </ul>
            </nav>

            {/* Get in Touch */}
            <section aria-labelledby="get-in-touch-heading">
              <h3 id="get-in-touch-heading" className="text-lg font-semibold">
                Get in Touch
              </h3>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>
                  <a href="mailto:icpc@am.amrita.edu" className="transition-colors hover:text-sky-400">
                    icpc@am.amrita.edu
                  </a>
                </li>
                {/* <li>
                  <a href="tel:+914762801111" className="transition-colors hover:text-sky-400">
                    +91 476 280 1111
                  </a>
                </li> */}
              </ul>
            </section>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-300">
            &copy; 2026 ICPC Asia Amritapuri Regional Contest. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}
