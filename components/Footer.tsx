import React from "react";
import Link from "next/link"; // Import Link from Next.js

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
                <li className="mb-1">Buy a Home</li>
                <li className="mb-1">Remortgage</li>
                <li className="mb-1">Buy to Let</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <ul>
                <li className="mb-1">
                  {" "}
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="https://www.instagram.com/sovereign.financial"
                  >
                    Instagram
                  </Link>
                </li>
                {/*
                <li className="mb-1">
                  {" "}
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/faqs"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-1">
                  {" "}
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/faqs"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-1">
                  {" "}
                  <Link
                    className="hover:text-blue-80 transition-colors"
                    href="/faqs"
                  >
                    LinkedIn
                  </Link>
                </li>*/}
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
                    336 W Bedford Ave Suite 103, Fresno, CA 93728
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="mailto:manraj@sovereignfinances.com"
                    className="hover:text-blue-80 transition-colors"
                  >
                    manraj@sovereignfinances.com
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
          Residential Mortgage Lending Act. NMLS # 2511898
        </div>
      </div>
    </footer>
  );
};

export default Footer;
