// import type { Metadata } from "next";

// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "Sovereign Financial | Expert Mortgage Solutions",
//   description:
//     "Sovereign Financial provides expert advice, personalized mortgage solutions, and exceptional customer service. Find the best mortgage rates and terms for your unique needs.",
//   openGraph: {
//     type: "website",
//     url: process.env.NEXT_PUBLIC_BASE_URL,
//     title: "Sovereign Financial | Expert Mortgage Solutions",
//     description:
//       "Find personalized mortgage solutions with Sovereign Financial. Expert advice and exceptional service for homebuyers and investors.",
//     siteName: "Sovereign Financial",
//     images: [
//       {
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`,
//         width: 1200,
//         height: 630,
//         alt: "Sovereign Financial - Expert Mortgage Solutions",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sovereign Financial | Expert Mortgage Solutions",
//     description:
//       "Find personalized mortgage solutions with Sovereign Financial. Expert advice and exceptional service for homebuyers and investors.",
//     images: [`${process.env.NEXT_PUBLIC_BASE_URL}/og-image.jpg`],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main className="relative overflow-hidden">{children}</main>

//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sovereign Financial | Expert Mortgage Broker Located in Fresno, CA",
  description:
    "Sovereign Financial provides expert advice, personalized mortgage solutions, and exceptional customer service. Find the best mortgage rates and terms for your unique needs.",
  openGraph: {
    type: "website",
    url:
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.sovereignfinances.com", // Default in case env is missing
    title: "Sovereign Financial | Expert Mortgage Broker Located in Fresno, CA",
    description:
      "Find personalized mortgage solutions with Sovereign Financial. Expert advice and exceptional service for homebuyers and investors.",
    siteName: "Sovereign Financial",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL ||
          "https://www.sovereignfinances.com"
        }/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "Sovereign Financial - Expert Mortgage Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Financial | Expert Mortgage Broker Located in Fresno, CA",
    description:
      "Find personalized mortgage solutions with Sovereign Financial. Expert advice and exceptional service for homebuyers and investors.",
    images: [
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://www.sovereignfinances.com"
      }/og-image.jpeg`,
    ],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.sovereignfinances.com"
  ), // Ensures absolute URLs
  robots: {
    index: true, // Allow indexing by search engines
    follow: true, // Follow links on the page
  },
  alternates: {
    canonical: `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.sovereignfinances.com"
    }/`, // Canonical URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {" "}
      {/* Correct language attribute */}
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <link
          rel="canonical"
          href={`${
            process.env.NEXT_PUBLIC_BASE_URL ||
            "https://www.sovereignfinances.com"
          }/`}
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        {/* Load essential scripts or analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
