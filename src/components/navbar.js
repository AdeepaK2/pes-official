"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "IEEE PES Volunteer of the Year!", href: "/volunteer_of_the_year" },
    { name: "About", href: "/about" },
    { name: "Committees", href: "/committees" },
    { name: "Projects", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".mobile-menu") && !event.target.closest(".menu-btn")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav className="bg-green-700 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`${
                  pathname === item.href
                    ? "text-white italic"
                    : "text-white opacity-80"
                } hover:opacity-100 transition duration-300 cursor-pointer`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Fixed & No Scrolling */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-800 shadow-lg transition-transform duration-300 ease-in-out mobile-menu ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex flex-col mt-16 space-y-4 px-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span
                className={`block py-3 ${
                  pathname === item.href
                    ? "text-white italic"
                    : "text-white opacity-80"
                } hover:opacity-100 transition duration-300 cursor-pointer`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
