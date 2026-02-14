import React from "react";
import { motion } from "framer-motion";

const ImpactMilestones = ({ stats }) => {
  // Defensive check to ensure data exists
  if (!stats || stats.length < 3) return null;

  return (
    <section className="py-14 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Logic */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-teal-600 tracking-wide uppercase text-xs mb-3">
              Impact & Reach
            </h2>
            <p className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
              Patient Success <span className="font-bold">Milestones</span>
            </p>
          </div>
          <div className="h-px flex-grow bg-slate-200 mx-8 hidden md:block mb-4" />
          <p className="text-slate-400 text-sm italic mb-4">
            Established Excellence. Proven Outcomes.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[240px]">
          {/* CARD 1: Large Vertical Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-3xl bg-teal-900 shadow-2xl min-h-[400px] md:min-h-full"
          >
            <img
              src={stats[0].img}
              alt={stats[0].label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
            <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
              <div className="text-5xl md:text-6xl font-black text-white mb-2">
                {stats[0].value}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-teal-300 mb-4">
                {stats[0].label}
              </h3>
              <p className="text-teal-50/70 leading-relaxed text-sm border-l-2 border-teal-500 pl-4">
                {stats[0].desc}
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Wide Horizontal Feature */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 md:row-span-1 group relative overflow-hidden rounded-3xl bg-white border border-slate-100 flex flex-col sm:flex-row shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-full sm:w-1/3 overflow-hidden border-b-4 sm:border-b-0 sm:border-r-4 border-teal-500 h-48 sm:h-auto">
              <img
                src={stats[1].img}
                alt={stats[1].label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="w-full sm:w-2/3 p-6 md:p-8 flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-black text-teal-600 mb-1">
                {stats[1].value}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {stats[1].label}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {stats[1].desc}
              </p>
            </div>
          </motion.div>

          {/* CARD 3: Modern Square/Responsive Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundImage: `url("/slider3.jpeg")` }}
            className="relative md:col-span-7 bg-contain bg-[position:170%_center] bg-no-repeat 
             group border bg-black border-slate-100 rounded-3xl 
             p-6 md:p-10 flex flex-col sm:flex-row 
             items-center gap-6 md:gap-8 
             shadow-sm hover:shadow-xl transition-all h-auto overflow-hidden"
          >
            {/* ✅ Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r 
                from-black 
via-black/90 
via-black/10 
to-transparent

                  z-0"
            ></div>

            {/* ✅ Content */}
            <div className="relative z-10 flex-1 text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                {stats[2].value}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-teal-200 mb-2">
                {stats[2].label}
              </h3>
              <p className="text-slate-100 text-xs md:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
                {stats[2].desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMilestones;
