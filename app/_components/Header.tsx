"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sign } from "crypto";
import { SignUpButton } from "@clerk/nextjs";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 max-w-7xl mx-auto relative">
      {/* Logo Section */}
      <div className="flex items-center gap-1">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">Seelon</h2>
      </div>

      {/* Hamburger button for small screens */}
      <button
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            // Close icon
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            // Hamburger icon
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Menu & Button for md and above */}
      <nav className="hidden md:flex items-center gap-8">
        {menuOptions.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className="text-lg text-gray-800 hover:scale-105 transition-all hover:text-primary cursor-pointer"
          >
            {menu.name}
          </Link>
        ))}
        <SignUpButton mode="modal">
          <Button >
            Get Started
          </Button>
        </SignUpButton>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10 rounded-b-md border border-gray-200">
          <ul className="flex flex-col p-4 space-y-4">
            {menuOptions.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.path}
                  className="block text-gray-800 cursor-pointer hover:scale-105 hover:text-primary transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            <li>
              <SignUpButton mode="modal">
                <Button className="w-full" onClick={() => setMenuOpen(false)}>
                  Get Started
                </Button>
              </SignUpButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
