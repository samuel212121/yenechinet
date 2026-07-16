"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Smartphone, Phone, ArrowRightLeft, Download, CheckCircle2,} from "lucide-react";

export default function AppDownload() {
  return (
    <section id="download" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* TOP CONTENT GRID: Main Typography & Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          
          {/* LEFT COLUMN: Main Typography & Action Panel */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-300 tracking-wide mb-6">
                <ArrowRightLeft size={14} className="text-red-500 animate-pulse" />
                Direct Freight Coordinator Network
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none lowercase">
                Download the Yene Chinet App
              </h2>
              
              <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed">
                Instantly bridge the gap between demand and heavy transport operators. Tap below to install your dedicated matching platform.
              </p>
              <p className="mt-2 text-amber-500/90 text-sm font-medium tracking-wide font-display">አፕሊኬሽናችንን ያውርዱ</p>

              {/* App Actions */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  <Smartphone size={16} /> Google Play
                </motion.a>
                <span className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-6 py-3.5 text-white/40 font-bold text-xs uppercase tracking-wider cursor-not-allowed select-none">
                  <Smartphone size={16} /> App Store · Soon
                </span>
              </div>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-2.5 text-white/50 text-xs tracking-wide">
                <Phone size={14} className="text-amber-500" />
                <span>Or call to book directly: <strong className="text-white">+251 9 01044871</strong></span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Marketing Phones with Injected Onboarding People Images */}
          <div className="lg:col-span-7 relative flex flex-col sm:flex-row items-center justify-center gap-8 min-h-[520px]">
            
            {/* SHIPPERS MARKETING SCREEN (with image from 5927131224868589061.jpg) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-[245px] h-[490px] rounded-[40px] border-8 border-slate-900 bg-slate-950 shadow-2xl relative overflow-hidden flex flex-col justify-between p-5"
            >
              {/* Person Image Asset Overlay Background */}
              <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none mix-blend-lighten z-0">
                <Image 
                  src="/images/img2.jpg" 
                  alt="Yene Chinet Shipper Network" 
                  fill
                  className="object-cover object-center scale-110"
                />
              </div>

              {/* Minimal Branding Header */}
              <div className="flex justify-between items-center w-full relative z-10">
                <span className="text-[10px] font-black tracking-widest text-white/50 uppercase">YENE CHINET</span>
                <CheckCircle2 size={14} className="text-emerald-400" />
              </div>

              {/* Middle Bold Call to Action Content */}
              <div className="space-y-3 text-left relative z-10 mt-auto mb-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-8">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <Download size={18} />
                </div>
                <h3 className="text-xl font-black text-white tracking-tight lowercase leading-tight">
                  download customer app
                </h3>
                <p className="text-[11px] text-gray-300 leading-normal">
                  Post your heavy cargo requirements, view transit map pipelines, and match instantly.
                </p>
              </div>

             {/* Bottom Status Tag */}
<motion.a
  href="https://play.google.com/store/apps/details?id=com.yenechinet.customer" // Replace with your actual package ID when ready
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
  whileTap={{ scale: 0.98 }}
  className="block w-full bg-white/10 border border-white/10 rounded-xl py-2.5 text-center text-[10px] font-bold tracking-wider text-white uppercase relative z-10 backdrop-blur-sm cursor-pointer transition-colors"
>
  Get Customer App
</motion.a>
            </motion.div>

            {/* CARRIERS / DRIVERS MARKETING SCREEN (with image from 5927131224868589059_2.jpg) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-[245px] h-[490px] rounded-[40px] border-8 border-slate-900 bg-slate-950 shadow-2xl relative overflow-hidden flex flex-col justify-between p-5"
            >
              {/* Person Image Asset Overlay Background */}
              <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none mix-blend-lighten z-0">
                <Image 
                  src="/images/img3.jpg" 
                  alt="Yene Chinet Carrier Wallet Portal" 
                  fill
                  className="object-cover object-center scale-110"
                />
              </div>

              {/* Minimal Branding Header */}
              <div className="flex justify-between items-center w-full relative z-10">
                <span className="text-[10px] font-black tracking-widest text-white/50 uppercase">YENE CHINET</span>
                <CheckCircle2 size={14} className="text-amber-400" />
              </div>

              {/* Middle Bold Call to Action Content */}
              <div className="space-y-3 text-left relative z-10 mt-auto mb-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-8">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <Download size={18} />
                </div>
                <h3 className="text-xl font-black text-white tracking-tight lowercase leading-tight">
                  download driver app
                </h3>
                <p className="text-[11px] text-gray-300 leading-normal">
                  Claim high-yield cargo loads, request fuel advances, and manage your settlement logs.
                </p>
              </div>

             {/* Bottom Status Tag */}
<motion.a
  href="https://play.google.com/store/apps/details?id=com.yenechinet.driver" 
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
  whileTap={{ scale: 0.98 }}
  className="block w-full bg-white/10 border border-white/10 rounded-xl py-2.5 text-center text-[10px] font-bold tracking-wider text-white uppercase relative z-10 backdrop-blur-sm cursor-pointer transition-colors"
>
  Get Driver App
</motion.a>
            </motion.div>

            {/* Absolute Rating Badge floating over layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -top-4 right-4 sm:right-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-1.5 text-xs font-semibold text-white shadow-xl z-20"
            >
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <span>4.8 Rating </span>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM CENTER PILL: Grounding Connect Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 p-6 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          {/* Aesthetic Background Colored Stroke Accent Line */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-amber-500 to-red-600 opacity-80" /> */}
          
          {/* <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 mx-auto md:mx-0">
              <ShieldCheck size={24} className="text-amber-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">shippers & carriers connected</h4>
              <p className="text-xs text-white/60 mt-0.5">Experience zero-friction matches with 100% verified heavy transport operators across regional corridors.</p>
            </div>
          </div>

          <motion.a
            whileHover={{ x: 4 }}
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl transition-all shadow-md shrink-0 w-full md:w-auto justify-center"
          >
            <span>install right now</span>
            <ArrowRight size={14} />
          </motion.a> */}
        </motion.div>

      </div>
    </section>
  );
}