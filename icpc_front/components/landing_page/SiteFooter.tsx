import Image from "next/image";
import Link from "next/link";

const cities = [
  {label:"Kollam",href:"/reach-us/amritapuri"},
  {label:"Bengaluru",href: "/reach-us/bengaluru"},
  {label: "Coimbatore",href: "/reach-us/coimbatore"},
  {label: "Mysuru",href: "/reach-us/mysuru"}
  ];

const quickLinks = [
  { label: "Hall of Fame", href: "/halloffame" },
  { label: "Past Results", href: "/onsite-ranklist" },
  { label: "ICPC Global", href: "https://icpc.global" },
  { label: "Your First ICPC Guide", href: "/beginners-guide" },
];

const socials = [
  {
    label: "Instagram",
    handle: "@icpc_amrita_",
    href: "https://www.instagram.com/icpc_amrita_/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.675 1.092 4.92 4.92 0 011.092 1.675c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.092 1.675 4.92 4.92 0 01-1.675 1.092c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.675-1.092A4.92 4.92 0 012.566 19.28c-.163-.46-.35-1.26-.403-2.43C2.105 15.584 2.093 15.204 2.093 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.092-1.675A4.92 4.92 0 015.333 1.953c.46-.163 1.26-.35 2.43-.403C8.999 1.492 9.379 1.48 12.583 1.48H12zm0 1.802c-3.148 0-3.504.011-4.756.068-1.074.05-1.658.22-2.046.367a3.12 3.12 0 00-1.155.752 3.12 3.12 0 00-.752 1.155c-.147.388-.317.972-.367 2.046C3.875 8.496 3.864 8.852 3.864 12s.011 3.504.068 4.756c.05 1.074.22 1.658.367 2.046.183.484.44.9.752 1.155.255.312.671.569 1.155.752.388.147.972.317 2.046.367C8.496 21.125 8.852 21.136 12 21.136s3.504-.011 4.756-.068c1.074-.05 1.658-.22 2.046-.367a3.12 3.12 0 001.155-.752 3.12 3.12 0 00.752-1.155c.147-.388.317-.972.367-2.046.057-1.252.068-1.608.068-4.756s-.011-3.504-.068-4.756c-.05-1.074-.22-1.658-.367-2.046a3.12 3.12 0 00-.752-1.155 3.12 3.12 0 00-1.155-.752c-.388-.147-.972-.317-2.046-.367C15.504 3.875 15.148 3.864 12 3.864zm0 3.063a5.073 5.073 0 110 10.146 5.073 5.073 0 010-10.146zm0 1.802a3.271 3.271 0 100 6.542 3.271 3.271 0 000-6.542zm5.27-3.204a1.185 1.185 0 110 2.37 1.185 1.185 0 010-2.37z" />
      </svg>
    ),
    color: "text-pink-500",
  },
  {
    label: "X (Twitter)",
    handle: "@icpc_Amrita",
    href: "https://x.com/Icpc_Amrita",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "text-gray-800",
  },
  {
    label: "LinkedIn",
    handle: "LinkedIn",
    href: "https://www.linkedin.com/company/icpc-asiawest-amritapuri/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-blue-700",
  },
  {
    label: "Facebook",
    handle: "Facebook",
    href: "https://www.facebook.com/icpcamrita/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "text-blue-600",
  },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-10">

        {/* Brand — full width, centered on mobile */}
        <div className="flex flex-col items-center gap-2 mb-8 lg:hidden">
          <Image
            src="/assets/logos/icpc_foundation.png"
            alt="ICPC Amritapuri Regional"
            width={160}
            height={72}
            className="object-contain w-auto h-16"
          />
          <p className="text-[11px] text-gray-500 text-center leading-5">
            Amrita School of Engineering, Amritapuri, Kollam, Kerala 690525
          </p>
          <a href="mailto:icpc@am.amrita.edu" className="text-[11px] text-blue-500 hover:underline">
            icpc@am.amrita.edu
          </a>
        </div>

        {/* Desktop: 4-col grid; mobile: 2-col for links only */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">

          {/* Brand — desktop only */}
          <div className="hidden lg:flex flex-col items-start gap-3">
            <Image
              src="/assets/logos/icpc_foundation.png"
              alt="ICPC Amritapuri Regional"
              width={200}
              height={90}
              className="object-contain w-auto h-20"
            />
            <div className="text-xs text-gray-500 leading-relaxed">
              <p>Amrita School of Engineering</p>
              <p>Amritapuri, Kollam,</p>
              <p>Kerala 690525</p>
              <a href="mailto:icpc@am.amrita.edu" className="text-blue-500 hover:underline mt-1 block">
                icpc@am.amrita.edu
              </a>
            </div>
          </div>

          {/* Choose your city */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Choose your city
            </h4>
            <ul className="flex flex-col gap-2.5">
              {cities.map((city) => (
                <li key={city.label}>
                  <Link href={city.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <span className={`${s.color} flex-shrink-0`}>{s.icon}</span>
                  <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors whitespace-nowrap">
                    {s.handle}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} ICPC Amritapuri Regional. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
