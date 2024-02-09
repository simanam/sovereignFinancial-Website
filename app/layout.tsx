import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sovereign Financial",
  description:
    "Sovereign Financial is a mortgage brokerage firm that provides expert advice, personalized mortgage solutions, and exceptional customer service. Our team of mortgage brokers is dedicated to helping you find the best mortgage rates and terms to suit your unique needs. Whether you are a first-time homebuyer, a seasoned investor, or looking to refinance, we are here to help you navigate the mortgage process and make your homeownership dreams a reality.",
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/Homepagejpeg.jpg`, // URL relative to the public folder
        width: 800, // Optional: specify image width
        height: 600, // Optional: specify image height
        alt: "Mortgage Experts", // Optional: provide an alt text for the image
        type: "image/jpeg", // Optional: specify the MIME type of the image
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
