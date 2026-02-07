import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ stat, index, type }) => {
    // Logic for Vertical Hero Card (Card 1)
    if (type === 'hero') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-3xl bg-teal-900 shadow-2xl h-[500px] md:h-auto"
            >
                <img
                    src={stat.img}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60"
                    alt={stat.label}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                    <div className="text-5xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-teal-300 mb-4">{stat.label}</h3>
                    <p className="text-teal-50/70 leading-relaxed text-sm border-l-2 border-teal-500 pl-4 max-w-xs">
                        {stat.desc}
                    </p>
                </div>
            </motion.div>
        );
    }

    // Logic for Horizontal Wide Card (Card 2)
    if (type === 'wide') {
        return (
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-7 md:row-span-1 group relative overflow-hidden rounded-3xl bg-white border border-slate-100 flex flex-col sm:flex-row shadow-sm hover:shadow-xl transition-all"
            >
                <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden border-b-4 sm:border-b-0 sm:border-r-4 border-teal-500">
                    <img src={stat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={stat.label} />
                </div>
                <div className="w-full sm:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <div className="text-3xl md:text-4xl font-black text-teal-600 mb-1">{stat.value}</div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{stat.label}</h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{stat.desc}</p>
                </div>
            </motion.div>
        );
    }

    // Logic for Square/Responsive Card (Card 3)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 group bg-white border border-slate-100 rounded-3xl p-6 md:p-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8 shadow-sm hover:shadow-xl transition-all h-auto"
        >
            <div className="flex-1 text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-black text-teal-600 mb-1">{stat.value}</div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{stat.label}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">{stat.desc}</p>
            </div>
            <div className="w-full sm:w-40 md:w-48 h-40 sm:h-32 rounded-2xl overflow-hidden shadow-inner shrink-0">
                <img src={stat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={stat.label} />
            </div>
        </motion.div>
    );
};

const ImpactStats = ({ stats }) => {
    if (!stats || stats.length < 3) return null;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Subtle Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-teal-600 font-bold tracking-[0.3em] uppercase text-xs mb-3">Impact & Reach</h2>
                        <p className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                            Patient Success <span className="font-bold">Milestones</span>
                        </p>
                    </div>
                    <div className="h-px flex-grow bg-slate-200 mx-8 hidden md:block mb-4" />
                    <p className="text-slate-400 text-sm italic mb-4">Established Excellence. Proven Outcomes.</p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[240px]">
                    <StatCard stat={stats[0]} type="hero" />
                    <StatCard stat={stats[1]} type="wide" />
                    <StatCard stat={stats[2]} type="square" />
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;