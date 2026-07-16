"use client";

import { ShieldCheck, Navigation, MapPin } from "lucide-react";

export default function AppPromo() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Main Content Layout Card */}
        <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-14 flex flex-col items-center text-center overflow-hidden shadow-sm">
          
          {/* Top Headline Section */}
          <div className="relative z-10 max-w-2xl mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight lowercase">
              ship your cargo now
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Connect with verified independent carrier fleets across key regional trade routes instantly.
            </p>
          </div>

          {/* Interactive Display Split */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
            
            {/* Left Box: The Phone Frame Content Built Directly in HTML (No Iframe Required!) */}
            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-[290px] h-[590px] rounded-[44px] border-[12px] border-slate-950 bg-slate-50 shadow-2xl overflow-hidden flex flex-col pt-6 px-3">
                
                {/* Simulated Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-950 rounded-b-xl z-30" />
                
                {/* Header inside Mockup */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mt-2">
                  <span className="text-[11px] font-bold text-slate-900">Shipments</span>
                  <div className="flex gap-1">
                    <span className="px-2 py-0.5 bg-slate-900 text-white rounded-full text-[9px]">All</span>
                    <span className="px-2 py-0.5 text-slate-400 text-[9px]">Active</span>
                  </div>
                </div>

                {/* Inner App Content Scroll Area */}
                <div className="flex-1 overflow-y-auto space-y-3 pt-3 text-left">
                  
                  {/* Custom Order Box 1 */}
                  <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] text-slate-400 font-medium">Order #YC-8930</span>
                      <span className="text-[9px] bg-amber-50 text-amber-600 font-semibold px-2 py-0.5 rounded-full">In Transit</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-start">
                        <MapPin size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] font-semibold text-slate-800 truncate">Merkato Market, Addis Ababa</p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <MapPin size={12} className="text-rose-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] font-semibold text-slate-600 truncate">Sengatera, Addis Ababa</p>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-50 flex justify-between items-center">
                      <span className="text-[10px] text-slate-400">Cargo: Dry Bulk</span>
                      <span className="text-[11px] font-bold text-slate-900">10,754 ETB</span>
                    </div>
                  </div>

                  {/* Custom Order Box 2 */}
                  <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm opacity-85">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] text-slate-400 font-medium">Order #YC-8924</span>
                      <span className="text-[9px] bg-emerald-50 text-emerald-600 font-semibold px-2 py-0.5 rounded-full">Completed</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2 items-start">
                        <MapPin size={12} className="text-slate-400 shrink-0 mt-0.5" />
                        <p className="text-[11px] font-medium text-slate-500 truncate">Kality Customs Terminal</p>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-50 flex justify-between items-center">
                      <span className="text-[10px] text-slate-400">Cargo: Containers</span>
                      <span className="text-[11px] font-bold text-slate-400">14,200 ETB</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Box: Functional Features */}
            <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left gap-6">
              
              <div className="flex gap-4 items-start max-w-sm">
                <div className="p-3 bg-slate-900/5 rounded-xl text-slate-800 shrink-0">
                  <Navigation size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Intelligent Navigation</h4>
                  <p className="text-xs text-slate-500 mt-1">Real-time corridor routing updates for verified transport operators.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start max-w-sm">
                <div className="p-3 bg-slate-900/5 rounded-xl text-slate-800 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Regulatory Compliance</h4>
                  <p className="text-xs text-slate-500 mt-1">Every digital match conforms strictly to dispatch and freight movement standards.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}