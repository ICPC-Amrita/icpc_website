
"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";

export default function NotFound() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar open={open} hero={false} darkSection={false} />

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center bg-white px-4 py-16 md:py-24">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <h1 className="text-[15vw] md:text-[10vw] font-bold text-blue-900 leading-none mb-4">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="bg-[#b02a1c] hover:bg-[#6d2121] text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200 ease-in-out"
            >
              Go to Homepage
            </Link>
            <Link
              href="/reach-us/amritapuri"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="bg-blue-950 text-white"
        aria-labelledby="site-footer-heading"
      >
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
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-sky-400"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#important_dates"
                    className="transition-colors hover:text-sky-400"
                  >
                    Important Dates
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Get in Touch */}
            <section aria-labelledby="get-in-touch-heading">
              <h3 id="get-in-touch-heading" className="text-lg font-semibold">
                Get in Touch
              </h3>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>
                  <a
                    href="mailto:icpc@am.amrita.edu"
                    className="transition-colors hover:text-sky-400"
                  >
                    icpc@am.amrita.edu
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-300">
            &copy; 2025 ICPC Asia Amritapuri Regional Contest. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
