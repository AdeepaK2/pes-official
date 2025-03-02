"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "IEEE PES Volunteer of the Year!", href: "/volunteer_of_the_year" },
    { name: "About", href: "/about" },
    { name: "Committees", href: "/committees" },
    { name: "News", href: "/news" },
    { name: "Projects", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-green-700 text-white py-6 mt-0">
      <div className="container mx-auto text-center px-4">
        {/* Organization Name */}
        <h2 className="text-lg font-semibold">IEEE PES Student Branch Chapter</h2>
        <p className="text-sm">University of Moratuwa</p>

        {/* Navigation Links - Stacks in Mobile */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 md:space-x-6 md:flex-nowrap">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={`text-white opacity-80 hover:opacity-100 transition duration-300 cursor-pointer text-sm md:text-base`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/50 my-4 w-full md:w-2/3 mx-auto"></div>

        {/* Copyright Section */}
        <p className="text-xs opacity-80">© Copyright 2025 IEEE - All rights reserved.</p>
      </div>
    </footer>
  );
}
