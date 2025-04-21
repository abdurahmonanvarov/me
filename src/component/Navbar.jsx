"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleMenu}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-2xl flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <div
        className={`fixed bottom-24 right-6 z-40 bg-white text-black rounded-xl shadow-xl transition-all duration-300 p-4 space-y-4 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className="block hover:text-indigo-500 transition"
          onClick={toggleMenu}
        >
          Kirish
        </Link>
        <Link
          href="/products"
          className="block hover:text-indigo-500 transition"
          onClick={toggleMenu}
        >
          About me
        </Link>
        <Link
          href="/card"
          className="block hover:text-indigo-500 transition"
          onClick={toggleMenu}
        >
          Skils
        </Link>
        <Link
          href="/contaxt"
          className="block hover:text-indigo-500 transition"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
