"use client";

import Link from "next/link";

import { KrugerLogo } from "./Icons";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-[1000px] m-auto p-6">
        <div className="flex flex-row items-center gap-4">
          <Link href="https://www.kruger.com/en/" target="_blank">
            <KrugerLogo />
          </Link>
          <div className="bg-gradient-to-br from-emerald-300 to-lime-400 bg-clip-text">
            <p className="text-xl font-semibold text-transparent">
              Kruger Virtual Assistant Demo
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <Link href="https://www.kruger.com/en/company/" target="_blank">
            Company
          </Link>
          <Link href="https://www.kruger.com/en/our-values/" target="_blank">
            Values
          </Link>
          <Link
            href="https://www.kruger.com/en/our-business-sectors/"
            target="_blank"
          >
            Divisions
          </Link>
          <Link
            href="https://www.kruger.com/en/sustainability/"
            target="_blank"
          >
            Sustainability
          </Link>
          <Link
            aria-label="Contact Kruger"
            className="text-foreground"
            href="https://www.kruger.com/en/contact-us/"
            target="_blank"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
