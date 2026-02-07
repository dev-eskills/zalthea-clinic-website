import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    HeartPulse,
    Ear,
    Activity,
    Wind,
    Hospital,
    ShieldPlus,
    ArrowRight
} from 'lucide-react';
import { treatments } from '../../utils/homeData';

// Icon Map to link your data strings to Lucide Components
const iconMap = {
    HeartPulse: HeartPulse,
    Ear: Ear,
    Activity: Activity,
    Wind: Wind,
    Hospital: Hospital,
    ShieldPlus: ShieldPlus
};

export default function TreatmentSection() {
    const navigate = useNavigate();

    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Modern Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Procedure Directory</h2>
                        <p className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                            Specialized <span className="font-bold border-b-8 border-teal-500/10">Surgical Excellence</span>
                        </p>
                    </div>
                    <p className="text-slate-400 text-sm max-w-[280px] italic border-l-2 border-slate-200 pl-6 hidden md:block">
                        Integrating advanced surgical technology with gold-standard clinical protocols.
                    </p>
                </div>

                {/* The Seamless Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-md overflow-hidden shadow-2xl">
                    {treatments.map((t, i) => {
                        const IconComponent = iconMap[t.iconName] || Activity;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                onClick={() => navigate(t.link)}
                                className="group relative bg-white p-10 md:p-12 hover:bg-teal-900 transition-all duration-700 flex flex-col justify-between min-h-[420px] cursor-pointer"
                            >
                                {/* Background "Ghost" Numbering */}
                                <div className="absolute top-10 right-10 text-slate-50 group-hover:text-white/5 font-black text-8xl transition-colors duration-700 select-none pointer-events-none">
                                    0{i + 1}
                                </div>

                                <div className="relative z-10">
                                    {/* Clinical Icon */}
                                    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-teal-500/20 transition-all duration-500">
                                        <IconComponent
                                            className="w-8 h-8 text-teal-600 group-hover:text-teal-300 transition-colors"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Category Tag */}
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-500/60 group-hover:text-teal-400 mb-4 block">
                                        {t.cat}
                                    </span>

                                    {/* Title & Detailed Prose */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-5 group-hover:text-white transition-colors">
                                        {t.name}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-teal-100/70 transition-colors max-w-[300px]">
                                        {t.details}
                                    </p>
                                </div>

                                {/* Interactive Footer */}
                                <div className="relative z-10 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-white pt-8 border-t border-slate-100 group-hover:border-white/10 transition-all">
                                    <span>View Full Procedure</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-teal-500" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}