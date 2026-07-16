"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight, MapPin, RefreshCw, Wallet,
  BarChart2, Star, FileCheck, CheckCircle2, Download
} from "lucide-react";
import { FadeUp, SlideIn } from "@/components/Motion";
import { driverEarnings } from "@/lib/data";

const benefits = [
  { icon: MapPin,      title: "Jobs Near You",       desc: "See available jobs on a map near your current location. No dispatcher needed." },
  { icon: RefreshCw,   title: "No Empty Returns",    desc: "When you complete a delivery, the app suggests return loads from that area." },
  { icon: Wallet,      title: "Fast Payments",       desc: "Earnings deposited to your mobile wallet or bank account within 24 hours of delivery." },
  { icon: BarChart2,   title: "Earnings Dashboard",  desc: "See your daily, weekly, and monthly earnings, trips completed, and ratings." },
  { icon: Star,        title: "Build Reputation",    desc: "High-rated drivers appear first in matching. Good service = more jobs." },
  { icon: FileCheck,   title: "Digital Records",     desc: "Auto-generated dispatch notes and delivery receipts protect you legally." },
];

const joinSteps = [
  "Download the Yene Chinet Driver App from Google Play",
  "Register with your phone number and create a password",
  "Upload required documents — National ID, Driver's License, Vehicle registration, Insurance",
  "Admin verifies your documents (24–48 hours). You go ONLINE and start receiving jobs.",
];

const requirements = [
  "Valid Ethiopian National ID",
  "Valid Driver's License",
  "Vehicle registration document",
  "Vehicle insurance (current)",
  "Vehicle photos (3 angles)",
  "Mobile money or bank account for payouts",
];

function EarningsCard({ item, i }: { item: typeof driverEarnings[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.12 }}
      className="glass rounded-2xl p-8 text-center"
    >
      <p className="font-display text-4xl font-semibold text-white">
        {inView ? <CountUp end={item.value} duration={2} /> : 0}
        <span className="text-gold">{item.suffix}</span>
      </p>
      <p className="mt-2 text-white font-semibold">{item.label}</p>
      <p className="mt-1 text-white/50 text-xs">{item.note}</p>
    </motion.div>
  );
}

export default function ForDriversPage() {
  // Motion values for the interactive mouse angle twist effect
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [10, -10]);
  const rotateY = useTransform(x, [0, 400], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(200);
    y.set(200);
  }

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-dark via-navy to-navy-deep min-h-[75vh] flex items-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full glow-gold blur-3xl opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Text Content Description Side */}
          <SlideIn from="left" className="max-w-2xl">
            <p className="text-gold font-medium text-sm tracking-wide mb-4">For Drivers</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Maximize Your Earnings.<br />
              Drive With <span className="text-gold">Yene Chinet.</span>
            </h1>
            <p className="mt-3 text-white/70 font-display text-lg">
              &ldquo;ከ የኔ ጭነት ጋር በመስራት ገቢዎን ያሳድጉ &rdquo;
            </p>
            <p className="mt-4 text-white/60 max-w-md leading-relaxed">
              Find cargo jobs near you. Eliminate empty return trips. Get paid fast. Join Ethiopia&apos;s growing driver community.
            </p>
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="#join"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 text-white font-semibold shadow-lg shadow-red/30"
            >
              Register as a Driver <ArrowRight size={18} />
            </motion.a>
          </SlideIn>

          {/* Right Side: Interactive Animated Image Card Showcase */}
          <SlideIn from="right" className="flex justify-center items-center">
            <div 
              className="perspective-1000 relative padding-6 select-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Outer Glowing Outline Glance Animation */}
              <motion.div 
                className="absolute inset-0 rounded-[2.5rem] border-2 border-gold/40 pointer-events-none"
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(212, 163, 89, 0.2)", 
                    "0 0 25px rgba(212, 163, 89, 0.6)", 
                    "0 0 0px rgba(212, 163, 89, 0.2)"
                  ],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Angle Twist Floating Perspective Container wrapper */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative max-w-sm bg-gradient-to-b from-navy-light/40 to-navy-deep/90 border border-white/10 rounded-[2.5rem] p-4 shadow-2xl backdrop-blur-md flex flex-col items-center"
              >
                {/* Image Wrap Frame Context */}
                <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden bg-navy-deep/50 border border-white/5">
                  <img 
                    src="/images/driver1.png" 
                    alt="Yene Chinet Driver Premium Performance Dashboard"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  
                  {/* Floating Top Banner Label */}
                  <div className="absolute top-4 left-4 right-4 bg-navy-deep/75 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-md">
                    <span className="text-white text-xs font-medium tracking-wide">Drive. Earn. Deliver.</span>
                    <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                  </div>
                </div>

                {/* Lower Action CTA Element Button link */}
                <motion.a
                  href="#join"
                  whileHover={{ y: -3 }}
                  className="absolute -bottom-6 bg-white text-navy font-semibold text-sm px-6 py-3 rounded-full shadow-xl flex items-center gap-2 border border-gold/20 group hover:bg-red hover:text-white transition-colors duration-300"
                >
                  <Download size={16} className="text-gold group-hover:text-white transition-colors" />
                  <span>Download Driver App</span>
                </motion.a>
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Earnings Stats */}
      <section className="py-20 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red/5 via-transparent to-gold/5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-white">Your Earning Potential</h2>
            <p className="mt-2 text-white/50">Real numbers from our platform data</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {driverEarnings.map((item, i) => (
              <EarningsCard key={item.label} item={item} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy">Why Drivers Choose Yene Chinet</h2>
            <p className="mt-3 text-ink/60">Built around your schedule, your route, your income.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-7 border border-navy/5 hover:border-l-4 hover:border-l-red hover:shadow-glass-light transition-all"
              >
                <b.icon className="text-red" size={22} />
                <h3 className="font-display text-lg font-semibold text-navy mt-4">{b.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Join Section */}
      <section id="join" className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps list container breakdown */}
          <div>
            <FadeUp className="mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">How to Join in 4 Steps</h2>
              <p className="mt-3 text-white/50">Start earning within 48 hours.</p>
            </FadeUp>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
              <div className="space-y-8">
                {joinSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex items-start gap-6"
                  >
                    <div className="shrink-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center font-display font-semibold text-navy text-sm z-10 shadow-lg shadow-gold/30">
                      {i + 1}
                    </div>
                    <div className="glass rounded-xl px-5 py-4 flex-1">
                      <p className="text-white/80 text-sm leading-relaxed">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements list checker panel */}
          <SlideIn from="right">
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold text-white mb-6">Requirements Checklist</h3>
              <ul className="space-y-4">
                {requirements.map((r, i) => (
                  <motion.li
                    key={r}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-white/75 text-sm"
                  >
                    <CheckCircle2 className="text-gold shrink-0" size={18} />
                    {r}
                  </motion.li>
                ))}
              </ul>
              <motion.a
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href="#"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3.5 text-white font-semibold w-full animate-none"
              >
                Start Earning Today <ArrowRight size={18} />
              </motion.a>
            </div>
          </SlideIn>
        </div>
      </section>
    </main>
  );
}