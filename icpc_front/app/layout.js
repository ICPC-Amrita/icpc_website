// // import localFont from "next/font/local";
// import { Montserrat } from "next/font/google"
// import "./globals.css";

// const montserrat = Montserrat({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'] // Adding common weights we'll need
// })

// export const metadata = {
//   title: "ICPC Amritapuri Regional 2024",
//   description: "Website for ICPC Amritapuri Regionals 2024",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//         <title>ICPC Asia Amritapuri Regional Contest</title>
//         <link rel="icon" href="/icon.png" sizes="any" />
//         <script dangerouslySetInnerHTML={{
//           __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MGVBWT6D');`
//         }} />
//       </head>
//       <body className={montserrat.className}>
//         <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGVBWT6D"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
//         {children}
//       </body>
//     </html>
//   );
// }
// import localFont from "next/font/local";
import { Montserrat, Space_Grotesk } from "next/font/google"
import "./globals.css";
import { contestInfo } from "./_constants/contestInfo";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] // Adding common weights we'll need
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
})

const siteUrl = "https://amritaicpc.in";
const title = `ICPC Amritapuri Regional ${contestInfo.year} | ICPC India`;
const description = `Register for the ${contestInfo.regionalName} — ICPC's premier university programming contest in India. ${contestInfo.onsiteSlots} onsite slots across ${contestInfo.hostCities.join(", ")}. Open to student teams from across India.`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | ICPC Amritapuri",
  },
  description,
  keywords: [
    "ICPC",
    "ICPC India",
    "ICPC Amritapuri",
    "ICPC Regional India",
    "ICPC Asia West",
    "competitive programming India",
    "ACM ICPC",
    "programming contest India",
    "Amrita ICPC",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "ICPC Amritapuri Regional",
    title,
    description,
    images: [
      {
        url: "/assets/hero/icpc.jpg",
        width: 1200,
        height: 630,
        alt: "ICPC Amritapuri Regional contest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/hero/icpc.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - GTM-MGVBWT6D */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGVBWT6D');`
        }} />
        {/* End Google Tag Manager - GTM-MGVBWT6D */}

        {/* Google Tag Manager - GTM-NSVTMHRB */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSVTMHRB');`
        }} />
        {/* End Google Tag Manager - GTM-NSVTMHRB */}
      </head>
      <body className={`${montserrat.className} ${spaceGrotesk.variable} overflow-x-hidden`}>
        {/* Google Tag Manager (noscript) - GTM-MGVBWT6D */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGVBWT6D"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) - GTM-MGVBWT6D */}

        {/* Google Tag Manager (noscript) - GTM-NSVTMHRB */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSVTMHRB"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) - GTM-NSVTMHRB */}
        {children}
      </body>
    </html>
  );
}