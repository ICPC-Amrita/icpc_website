import Link from "next/link"
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6"

const socialLinks = [
  {
    href: "mailto:icpc@am.amrita.edu",
    icon: FaEnvelope,
    label: "Email",
    color: "hover:text-sky-400",
  },
  {
    href: "https://x.com/Icpc_Amrita",
    icon: FaXTwitter,
    label: "X (Twitter)",
    color: "hover:text-sky-400",
  },
  {
    href: "https://www.linkedin.com/company/icpc-asiawest-amritapuri/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    href: "https://www.facebook.com/icpcamrita/",
    icon: FaFacebookF,
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    href: "https://www.instagram.com/icpc_amrita_/",
    icon: FaInstagram,
    label: "Instagram",
    color: "hover:text-pink-400",
  },
]

export default function ContactUs2(props) {
  return (
    <footer
      className={`mt-auto text-white ${props.className || ""}`}
      aria-labelledby="site-footer-heading"
    >
      <h2 id="site-footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Contact Info */}
          <section aria-labelledby="contact-heading">
            <h3
              id="contact-heading"
              className="text-xl font-semibold"
            >
              Contact Us
            </h3>

            <address className="mt-4 not-italic leading-relaxed text-gray-300">
              <p>ICPC Asia Amritapuri Regional Contest</p>
              <p>Amritapuri, Kollam</p>
              <p>Kerala, India - 690525</p>
            </address>
          </section>

          {/* Quick Links */}
          <nav aria-labelledby="quick-links-heading">
            <h3
              id="quick-links-heading"
              className="text-xl font-semibold"
            >
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-gray-300">
              <li>
                <Link
                  href="https://icpc.global/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-sky-400"
                >
                  ICPC Global
                </Link>
              </li>
            </ul>
          </nav>

          {/* Get in Touch */}
          <section aria-labelledby="get-in-touch-heading">
            <h3
              id="get-in-touch-heading"
              className="text-xl font-semibold"
            >
              Get in Touch
            </h3>

            <div className="mt-4">
              <a
                href="mailto:icpc@am.amrita.edu"
                className="text-gray-300 transition-colors duration-200 hover:text-sky-400"
              >
                icpc@am.amrita.edu
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`text-xl text-gray-400 transition-colors duration-200 ${color}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-gray-300">
          &copy; 2026 ICPC Asia Amritapuri Regional Contest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}