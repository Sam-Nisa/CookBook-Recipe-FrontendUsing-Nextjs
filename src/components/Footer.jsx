import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-[#F0EAE1] py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-sans font-bold text-xl text-[#9A621C] tracking-wide hover:opacity-90 transition-opacity">
            Modern Hearth
          </Link>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <Link href="/about" className="text-sm font-semibold text-[#6B5C4E] hover:text-[#9A621C] transition-colors duration-200">
            About Us
          </Link>
          <Link href="/privacy" className="text-sm font-semibold text-[#6B5C4E] hover:text-[#9A621C] transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm font-semibold text-[#6B5C4E] hover:text-[#9A621C] transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-[#6B5C4E] hover:text-[#9A621C] transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-sm text-[#8E7E65] font-light text-center md:text-right">
          © 2024 Modern Hearth. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
