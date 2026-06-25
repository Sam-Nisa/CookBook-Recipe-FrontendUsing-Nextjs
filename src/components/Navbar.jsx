"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: "Categories", href: "/categories" },
  ];

  const handleSearchSubmit = (e) => {  
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-[#FAF8F5] sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-12 border-b border-[#F0EAE1]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="font-sans font-bold text-2xl text-[#9A621C] tracking-wide hover:opacity-90 transition-opacity">
            Modern Hearth
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {mainLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-semibold tracking-wide transition-colors duration-200 relative py-1.5 ${
                  active
                    ? "text-[#9A621C] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-[#9A621C] after:rounded-full"
                    : "text-[#6B5C4E] hover:text-[#9A621C]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions (Search & Login) */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="relative flex-grow max-w-[280px]">
            <div className="relative flex items-center bg-[#F3EDE0] rounded-xl pl-4 pr-24 py-2.5 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#E07E1B]/20">
              <svg
                className="h-5 w-5 text-[#8E7E65] mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-[#4E4435] placeholder-[#9B8C78] text-sm outline-none border-none p-0 focus:ring-0 focus:outline-none"
              />
            </div>
          </form>

          {/* Login Button */}
          <Link
            href="/login"
            className="bg-[#E07E1B] hover:bg-[#C97116] active:scale-98 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg text-[#6B5C4E] hover:text-[#9A621C] hover:bg-[#F2ECE0] focus:outline-none transition-all duration-200"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#3C3224]/30 backdrop-blur-sm transition-opacity duration-300"
          ></div>

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF8F5] shadow-2xl flex flex-col p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out border-l border-[#F0EAE1]">
            <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-4 mb-6">
              <span className="font-sans font-bold text-xl text-[#9A621C]">Modern Hearth</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#6B5C4E] hover:text-[#9A621C] hover:bg-[#F2ECE0] transition-colors"
                aria-label="Close Menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="mb-6">
              <div className="relative flex items-center bg-[#F2ECE0] rounded-xl px-4 py-2.5">
                <svg
                  className="h-5 w-5 text-[#8E7E65] mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-[#4E4435] placeholder-[#9B8C78] text-sm outline-none border-none p-0 focus:ring-0 focus:outline-none"
                />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-4 border-b border-[#F0EAE1] pb-6 mb-6">
              {mainLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold transition-colors py-1 ${
                      active ? "text-[#9A621C]" : "text-[#6B5C4E] hover:text-[#9A621C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Login Button */}
            <div className="flex flex-col gap-4">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#E07E1B] hover:bg-[#C97116] text-white font-semibold text-center py-3 rounded-xl shadow transition-all duration-200 text-sm"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
