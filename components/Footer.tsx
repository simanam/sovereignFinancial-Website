import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-90 text-white pt-10 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">
              Sovereign Financial.
            </h2>
            <p className="text-lg">More than mortgage.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Menu</h3>
              <ul>
                <li className="mb-1">
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/contact"
                  >
                    FAQs
                  </Link>
                </li>
                {/* <li className="mb-1">
                  <Link
                    href="/terms"
                    className="hover:text-blue-80 transition-colors"
                  >
                    Terms & Privacy
                  </Link>
                </li> */}
                {/* <li className="mb-1">
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/cookie-policy"
                  >
                    Cookie Policy
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Services</h3>
              <ul>
                <li className="mb-1">Mortgage </li>
                <li className="mb-1">Refinance </li>
                <li className="mb-1">Commercial / Investor Financing </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <ul>
                <li className="mb-1 flex items-center">
                  <Image
                    src="/insta.svg"
                    alt="Instagram"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="https://www.instagram.com/sovereign.financial"
                  >
                    Instagram
                  </Link>
                </li>

                <li className="mb-1 flex items-center">
                  <Image
                    src="/tik.svg"
                    alt="TikTok"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="https://www.tiktok.com/@sovereign.financial"
                  >
                    TikTok
                  </Link>
                </li>
                <li className="mb-1 flex items-center">
                  <Image
                    src="/face.svg"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="https://www.facebook.com/profile.php?id=61564664627152&mibextid=LQQJ4d"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>

            {/* New Column 4 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <ul>
                <li className="mb-1">
                  <a
                    href="https://maps.app.goo.gl/fwYb9C6DgguewdSj8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-80 transition-colors"
                  >
                    336 W Bedford Ave Suite 103, Fresno, CA 93711
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="mailto:info@sovereignfinances.com"
                    className="hover:text-blue-80 transition-colors break-all text-sm"
                  >
                    info@sovereignfinances.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Subscription and Feefo section */}

        {/* Legal section */}
        <div className="text-center text-gray-400 mt-8 text-sm">
          © 2024 Sovereign Financial. All Rights Reserved. Licensed by the
          Department of Financial Protection and Innovation under the California
          Residential Mortgage Lending Act. CA License Number # 60DBO-184734,
          NMLS # 2511898
        </div>
      </div>
    </footer>
  );
};

export default Footer;
