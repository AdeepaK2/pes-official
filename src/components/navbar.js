"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "IEEE PES Volunteer of the Year!", href: "/volunteer_of_the_year" },
    { name: "About", href: "/about" },
    { name: "Committees", href: "/committees" },
    { name: "News", href: "/news" },
    { name: "Projects", href: "/events" },
    {name:"Contact Us",href:"/contact"}
  ];

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">
            IEEE PES
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`${
                  pathname === item.href
                    ? "text-[#71F45D] italic"
                    : "text-gray-300"
                } hover:text-[#71F45D] transition duration-300 cursor-pointer`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 shadow-md">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`block px-6 py-3 ${
                  pathname === item.href
                    ? "text-[#71F45D] italic"
                    : "text-gray-300"
                } hover:text-[#71F45D] transition duration-300 cursor-pointer`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
