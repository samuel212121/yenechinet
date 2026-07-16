"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isAmharic, setIsAmharic] = useState(true);
  const [triggerCount, setTriggerCount] = useState(0);

  const slogan = "Connecting Shippers and Carriers Smoothly";
  const sloganWords = slogan.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAmharic((prev) => !prev);
      setTriggerCount((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Truck/Logo high-speed pass animation variants
  const truckVariants = {
    initial: { x: "-150vw", skewX: 0, filter: "blur(0px)" },
    animate: {
      x: ["-100vw", "0vw", "100vw"],
      skewX: [-15, -25, -15], 
      filter: ["blur(4px)", "blur(8px)", "blur(4px)"], 
      transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] },
    },
  };

  // 3D Text flipping animation variants
  const textVariants = {
    enter: { rotateX: 90, opacity: 0, scale: 0.95 },
    center: {
      rotateX: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
    },
    exit: { rotateX: -90, opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
  };

  const sloganContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // The return statement is now safely inside the Hero component function block where it belongs!
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden px-4 py-20">
      
      {/* ⬇️ FITTED BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover select-none pointer-events-none"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* DARK SEMI-TRANSPARENT OVERLAY MATRIX */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
      </div>

      {/* FOREGROUND HERO CONTENT */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* 1. CINEMATIC TITLE LOOP BOX */}
        <div className="relative w-full h-32 md:h-44 flex items-center justify-center mb-2 select-none">
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1200px" }}>
            <AnimatePresence mode="wait">
              {isAmharic ? (
                <motion.h1
                  key="amharic-text"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute text-5xl md:text-7xl lg:text-8xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-sans"
                  style={{
                    filter: "drop-shadow(0px 10px 20px rgba(245, 158, 11, 0.3))",
                    textShadow: "0 1px 0 #b45309, 0 2px 0 #92400e, 0 3px 0 #78350f, 0 8px 10px rgba(0,0,0,0.5)"
                  }}
                >
                  የኔ ጭነት
                </motion.h1>
              ) : (
                <motion.h1
                  key="english-text"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white"
                  style={{
                    filter: "drop-shadow(0px 10px 20px rgba(255, 255, 255, 0.15))",
                    textShadow: "0 1px 0 #64748b, 0 2px 0 #475569, 0 3px 0 #334155, 0 8px 10px rgba(0,0,0,0.6)"
                  }}
                >
                  Yene Chinet
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* DYNAMIC MOVING LOGO */}
          <motion.div
            key={`truck-${triggerCount}`} 
            variants={truckVariants}
            initial="initial"
            animate="animate"
            className="absolute left-0 right-0 h-16 md:h-24 pointer-events-none flex items-center justify-center z-20"
          >
            <Image
              src="/images/logo.png" 
              alt="Yene Chinet Logo"
              className="h-full w-auto object-contain drop-shadow-[0_4px_12px_rgba(255,255,255,0.3)]" 
          />
            <div className="w-24 md:w-40 h-[2px] bg-gradient-to-l from-white to-transparent opacity-40 -ml-2" />
          </motion.div>
        </div>

        {/* 2. STAGGERED CONTENT FRAME */}
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* SLOGAN */}
          <div className="mb-4 w-full">
            <motion.h2 
              variants={sloganContainerVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300 bg-clip-text text-transparent flex flex-wrap justify-center gap-x-2 gap-y-1"
            >
              {sloganWords.map((word, idx) => (
                <motion.span key={idx} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* DESCRIPTION */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mx-auto px-2 font-medium"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
          >
            Connecting the demand side of transport with reliable truck operators seamlessly. We coordinate the logistics corridor efficiently, acting entirely as your digital matchmaker in real time.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}