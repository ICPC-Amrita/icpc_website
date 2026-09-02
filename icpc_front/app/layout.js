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
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] // Adding common weights we'll need
})

export const metadata = {
  title: "ICPC Asia Amritapuri Regional Contest",
  description: "Website for ICPC Amritapuri Regionals 2025",
  icons: {
    icon: '/icon.png',
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
      <body className={montserrat.className}>
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