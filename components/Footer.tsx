import Link from "next/link";
import Image from "next/image";
import { Users, Send, Music2 } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-deep relative overflow-hidden">
      <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full glow-red blur-3xl opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Image
            src="/images/logo.png"
            alt="Yene Chinet"
            width={140}
            height={48}
            className="h-9 w-auto object-contain mb-4 brightness-0 invert opacity-90"
          />
          <p className="text-white/60 text-sm leading-relaxed">
            &ldquo;Connecting Shippers and Carriers Smoothly&rdquo;
            <br />
            Addis Ababa, Ethiopia
          </p>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-white/60 hover:text-gold text-sm transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4 text-sm tracking-wide uppercase">
            Download
          </h4>
          <ul className="space-y-2.5 text-white/60 text-sm">
            <li>Customer App → Google Play</li>
            <li>Driver App → Google Play</li>
            <li>iOS: Coming Soon</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4 text-sm tracking-wide uppercase">
            Contact
          </h4>
          <ul className="space-y-2.5 text-white/60 text-sm mb-5">
            <li>Call Centre: 8499</li>
            <li>info@yenechinet.com</li>
          </ul>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full glass flex items-center justify-center text-white/80 hover:text-gold transition-colors">
              <Users size={16} />
            </a>
            <a href="#" aria-label="Telegram" className="h-9 w-9 rounded-full glass flex items-center justify-center text-white/80 hover:text-gold transition-colors">
              <Send size={16} />
            </a>
            <a href="#" aria-label="TikTok" className="h-9 w-9 rounded-full glass flex items-center justify-center text-white/80 hover:text-gold transition-colors">
              <Music2 size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <p className="text-center text-white/40 text-xs">
          © 2026 Yene Chinet Logistics Platform. All Rights Reserved. · Privacy Policy · Terms of Use
        </p>
      </div>
    </footer>
  );
}
