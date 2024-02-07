"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter(); // Using the useRouter hook

  const navigateToContact = () => {
    router.push("/contact"); // Navigating to the contact page
  };
  return (
    <nav className="sticky top-0 z-30 flexBetween max-container padding-container py-5 bg-opacity-90 backdrop-filter backdrop-blur-lg">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image src="/Logo-Icon.svg" alt="logo" width={40} height={40} />
        <p className="font-poppins text-lg font-semibold text-gray-100">
          Sovereign Financial
        </p>
      </Link>

      <div className="flexCenter">
        <Button
          type="button"
          title="Contact Us"
          variant="btn_yellow"
          onClick={navigateToContact}
        />
      </div>
    </nav>
  );
};

export default Navbar;
