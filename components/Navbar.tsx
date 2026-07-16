"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // Import routing hooks
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Check, ChevronDown } from "lucide-react";
import { navLinks } from "@/lib/data";
import { useTranslation } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pathname = usePathname(); // Track current route
  const router = useRouter();     // Programmatic routing

  const { currentLang, setLanguage } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "am", label: "አማርኛ" },
    { code: "ti", label: "ትግርኛ" },
    { code: "om", label: "Afaan Oromoo" },
    { code: "so", label: "Soomaali" },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Shared click handler for desktop and mobile download actions
  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      e.preventDefault(); // Stop native scrolling on sub-pages
      setOpen(false);      // Close mobile drawer if open
      router.push("/#download"); // Change pages clean and jump straight to ID anchor
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
            scrolled
              ? "glass shadow-glass py-2"
              : "bg-transparent py-2 border border-transparent"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Yene Chinet"
              width={140}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  scrolled ? "text-white/90 hover:text-white" : "text-navy hover:text-red"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-red transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* DESKTOP ACTIONS LAYER */}
          <div className="hidden md:flex items-center gap-5">
            
            {/* DESKTOP DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  scrolled 
                    ? "bg-white/10 hover:bg-white/20 border-white/10 text-white" 
                    : "bg-navy/5 hover:bg-navy/10 border-navy/10 text-navy"
                }`}
              >
                <Globe size={14} className={scrolled ? "text-white/80" : "text-navy/70"} />
                <span>{currentLang}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-44 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl z-20 py-1.5 overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                            currentLang === lang.code
                              ? "bg-red text-white font-semibold"
                              : "text-gray-300 hover:bg-slate-800 hover:text-white"
                          }`}
                        >
                          <span>{lang.label}</span>
                          {currentLang === lang.code && <Check size={12} strokeWidth={3} />}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* DESKTOP DOWNLOAD BUTTON */}
            <motion.a
              href="#download"
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red/20"
            >
              Download App
            </motion.a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden ${scrolled ? "text-white" : "text-navy"}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-screen w-72 glass-navy shadow-glass px-6 py-8 flex flex-col gap-5"
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end text-white mb-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}

            <hr className="border-white/10 my-1" />

            {/* MOBILE LANGUAGE SELECTION DRAWER */}
            <div className="flex flex-col gap-2">
              <span className="text-white/40 text-xs font-bold uppercase tracking-wider px-1">Language</span>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setOpen(false);
                    }}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      currentLang === lang.code
                        ? "bg-red text-white font-bold"
                        : "bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* MOBILE DOWNLOAD BUTTON */}
            <a
              href="#download"
              onClick={handleDownloadClick}
              className="mt-auto rounded-full bg-red px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red/20"
            >
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}