"use client";

import { MapPin, Truck, Shield, Navigation, ArrowRight } from "lucide-react";

export default function TruckPromo() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Grid Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <span className="bg-red/10 text-red text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                For Shippers & Cargo Owners
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-navy tracking-tight leading-tight lowercase">
              request heavy transport in seconds
            </h2>
            
            <p className="mt-4 text-slate-500 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Set your pickup, match with available Sino trucks nearby, and coordinate heavy-duty freight across regional transport corridors seamlessly.
            </p>

            {/* Quick Micro Features */}
            <div className="mt-8 space-y-3 max-w-sm mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-50 text-emerald-600 p-1.5 rounded-lg">
                  <Shield size={16} />
                </div>
                <span className="text-xs font-semibold text-slate-700">Verified  Truck and Vehicle Operators Only</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg">
                  <Navigation size={16} />
                </div>
                <span className="text-xs font-semibold text-slate-700">Live Route Dispatch Mapping</span>
              </div>
            </div>

            {/* CTA Button Action */}
            <div className="mt-10">
              <a 
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red/20 hover:bg-red/90 transition-all duration-200"
              >
                <span>Book a Truck Now</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Map/Device Grid Column (Inspired by download (95).jfif) */}
          <div className="lg:col-span-7 flex justify-center relative w-full h-[600px]">
            
            {/* Background 3D Track Loop Simulation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[260px] border-[24px] border-slate-100 rounded-[140px] rotate-[-15deg] absolute scale-110 opacity-70" />
              <div className="w-[500px] h-[260px] border-[24px] border-slate-100 rounded-[140px] rotate-[25deg] absolute scale-100" />
            </div>

            {/* Moving Sino Truck Card 1 (Top Left) */}
            <div className="absolute top-16 left-4 md:left-12 bg-white border border-slate-100 rounded-xl p-3 shadow-xl flex items-center gap-3 z-20 animate-bounce [animation-duration:4s]">
              <div className="p-2 bg-navy text-white rounded-lg">
                <Truck size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Sino Truck (30T)</p>
                <p className="text-[9px] text-emerald-600 font-medium">5 mins away</p>
              </div>
            </div>

            {/* Moving Sino Truck Card 2 (Bottom Right) */}
            <div className="absolute bottom-20 right-4 md:right-12 bg-white border border-slate-100 rounded-xl p-3 shadow-xl flex items-center gap-3 z-20 animate-bounce [animation-duration:5s]">
              <div className="p-2 bg-navy text-white rounded-lg">
                <Truck size={20} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Heavy Tipper</p>
                <p className="text-[9px] text-slate-400 font-medium">Heading to Hawasa</p>
              </div>
            </div>

            {/* Centered Map Smartphone Shell */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[570px] rounded-[42px] border-[10px] border-slate-950 bg-slate-50 shadow-2xl overflow-hidden flex flex-col z-10">
              
              {/* Device Hardware Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-950 rounded-b-xl z-30" />
              
              {/* Map Route Graphics Layer */}
              <div className="relative flex-1 bg-slate-100 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] p-4 flex flex-col justify-between pt-8">
                
                {/* Search Bar Input Route Box */}
                <div className="bg-white p-2.5 rounded-xl shadow-md border border-slate-200/60 space-y-1.5 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-700 font-semibold truncate">Pickup: Kaliti, Addis Ababa</span>
                  </div>
                  <div className="h-2 border-l border-dashed border-slate-300 ml-1" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-[10px] text-slate-500 truncate">Destination: Adama Corridor</span>
                  </div>
                </div>

                {/* Simulated SVG Route Vector Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 140 130 Q 60 260 140 380" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="5 4" />
                  <circle cx="140" cy="380" r="5" fill="#f43f5e" />
                </svg>

                {/* Live Floating Route Pin */}
                <div className="absolute top-[45%] left-[25%] bg-red text-white p-1 rounded-full shadow-md z-10">
                  <Truck size={14} />
                </div>

                {/* Bottom Order Selector Sheets Panel */}
                <div className="bg-white rounded-xl p-3 shadow-lg border border-slate-100 space-y-2 z-10">
                  <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Select Coordinator Fleet</span>
                  
                  {/* Option 1: Sino Heavy Option */}
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-900/10">
                    <div className="flex items-center gap-2">
                      <Truck size={14} className="text-navy" />
                      <div>
                        <p className="text-[11px] font-bold text-slate-900">Sino Truck</p>
                        <p className="text-[8px] text-slate-400">Capacity: 30 Tons</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900">18,400 ETB</span>
                  </div>

                  {/* Option 2: Medium Flatbed Option */}
                  <div className="flex items-center justify-between p-1.5 rounded-lg opacity-60">
                    <div className="flex items-center gap-2">
                      <Truck size={14} className="text-slate-400" />
                      <div>
                        <p className="text-[11px] font-medium text-slate-700">Flatbed Rigid</p>
                        <p className="text-[8px] text-slate-400">Capacity: 15 Tons</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-600">12,100 ETB</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}