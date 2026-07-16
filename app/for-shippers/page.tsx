"use client";
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowRight, Zap, MapPin, DollarSign,
  ShieldCheck, FileText, HeadphonesIcon, Download
} from "lucide-react";
import { FadeUp, SlideIn } from "@/components/Motion";

const benefits = [
  { icon: Zap,          title: "Smart Matching",      desc: "Our engine finds the best available driver for your cargo in real time — no phone calls, no waiting." },
  { icon: MapPin,        title: "Live Tracking",    desc: "Track your shipment on a live map from the moment the driver picks it up to final delivery." },
  { icon: DollarSign,    title: "Fair Pricing",     desc: "Price is calculated transparently by distance and cargo type. See it before you confirm." },
  { icon: ShieldCheck,   title: "Escrow Security",  desc: "Payment held safely until your cargo is delivered and you confirm receipt. No risk." },
  { icon: FileText,      title: "Digital Receipts", desc: "Every trip auto-generates a full digital receipt and cargo record — for your accounts." },
  { icon: HeadphonesIcon,title: "24/7 Support",      desc: "Our call centre is always open for bookings, complaints, or questions. Call 8499." },
];

const steps = [
  "Open Yene Chinet app or call 8499",
  "Enter pickup location and destination",
  "Select cargo type and enter weight",
  "Review price estimate and confirm",
  "Driver is matched and notified — you see ETA on map",
  "Track live. Driver arrives, photos cargo, confirms pickup",
  "Cargo delivered — confirm receipt, payment released, rate your driver",
];

export default function ForShippersPage() {
  // Motion values for the interactive mouse angle twist effect
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [10, -10]);
  const rotateY = useTransform(x, [0, 400], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    // const width = rect.width;
    // const height = rect.height;
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
      <section className="relative bg-navy-deep min-h-[75vh] flex items-center py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light" />
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full glow-red blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full glow-gold blur-3xl opacity-25" />

        <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Description Side */}
          <SlideIn from="left">
            <p className="text-gold font-medium text-sm tracking-wide mb-4">For Shippers</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Move Any Cargo.<br />
              <span className="text-red">Anywhere</span> in Ethiopia.
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-md leading-relaxed">
              Request a verified truck, pickup, or van in minutes. Real-time tracking. Secure payments. Zero broker fees.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 text-white font-semibold shadow-lg shadow-red/30"
              >
                Request a Truck Now <ArrowRight size={18} />
              </motion.a>
            </div>
          </SlideIn>

          {/* Right Side: Animated Hero Image Container with Outline Glance and Angle Twist */}
          <SlideIn from="right" className="flex justify-center items-center">
            <div 
              className="perspective-1000 relative padding-6 select-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Outer Glowing Outline Glance Animation */}
              <motion.div 
                className="absolute inset-0 rounded-[2.5rem] border-2 border-red/40 pointer-events-none"
                animate={{ 
                  boxShadow: [
                    "0 0 0px rgba(239, 68, 68, 0.2)", 
                    "0 0 25px rgba(239, 68, 68, 0.6)", 
                    "0 0 0px rgba(239, 68, 68, 0.2)"
                  ],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Angle Twist Floating Perspective Wrapper */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative max-w-sm bg-gradient-to-b from-navy-light/40 to-navy-deep/90 border border-white/10 rounded-[2.5rem] p-4 shadow-2xl backdrop-blur-md flex flex-col items-center"
              >
                {/* Foreground Hero Image Mockup Container */}
                <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden bg-navy-deep/50 border border-white/5">
                  <Image
                    src="/images/shipper2.png" 
                    alt="Yene Chinet Shipper Dashboard Tracking Showcase"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  
                  {/* Text Overlay Indicator: Ship Your Cargo */}
                  <div className="absolute top-4 left-4 right-4 bg-navy-deep/70 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex items-center justify-between shadow-lg">
                    <span className="text-white text-xs font-medium tracking-wide">Ship Your Cargo</span>
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>

                {/* Interactive Download Action Overlay Component */}
                <motion.a
                  href="#booking"
                  whileHover={{ y: -3 }}
                  className="absolute -bottom-6 bg-white text-navy font-semibold text-sm px-6 py-3 rounded-full shadow-xl flex items-center gap-2 border border-red/20 group hover:bg-red hover:text-white transition-colors duration-300"
                >
                  <Download size={16} className="text-red group-hover:text-white transition-colors" />
                  <span>Download Now</span>
                </motion.a>
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy">Everything You Need</h2>
            <p className="mt-3 text-ink/60">Built for businesses and individuals who want logistics done right.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-7 border border-navy/5 hover:border-t-4 hover:border-t-red hover:shadow-glass-light transition-all"
              >
                <b.icon className="text-red" size={22} />
                <h3 className="font-display text-lg font-semibold text-navy mt-4">{b.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section id="booking" className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full glow-red blur-3xl opacity-20" />
        <div className="relative mx-auto max-w-3xl px-6">
          <FadeUp className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">How to Book in 7 Steps</h2>
            <p className="mt-3 text-white/50">Simple, transparent, and fully digital.</p>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="shrink-0 h-10 w-10 rounded-full bg-red flex items-center justify-center font-display font-semibold text-white text-sm z-10 shadow-lg shadow-red/30">
                    {i + 1}
                  </div>
                  <div className="glass rounded-xl px-5 py-4 flex-1">
                    <p className="text-white/80 text-sm leading-relaxed">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <FadeUp delay={0.3} className="mt-14 text-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 text-white font-semibold shadow-lg shadow-red/30"
            >
              Download the Yene Chinet App <ArrowRight size={18} />
            </a>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}