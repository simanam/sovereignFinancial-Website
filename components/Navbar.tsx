"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToContact = () => {
    window.location.href = "tel:+15597700704";
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-30 flexBetween max-container padding-container py-5 bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image src="/Logo-Icon.svg" alt="logo" width={40} height={40} />
        <p className="font-poppins text-sm lg:text-lg font-semibold text-gray-100">
          Sovereign Financial
        </p>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          href="/about"
          className="text-gray-100 font-semibold  hover:text-blue-80 transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-100 font-semibold  hover:text-blue-80 transition-colors"
        >
          Contact
        </Link>
        <Button
          type="button"
          icon="/phone-solid.svg"
          title="(559) 770-0704"
          variant="btn_yellow"
          onClick={navigateToContact}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-90 py-2 mobile-menu">
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-10 hover:bg-gray-700"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-10 hover:bg-gray-700"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <button
            className="w-full text-left px-4 py-2 text-gray-10 hover:bg-gray-700"
            onClick={navigateToContact}
          >
            (559) 770-0704
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
