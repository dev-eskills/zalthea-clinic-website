import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, PhoneCall, ArrowRight } from 'lucide-react';

const ActionCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-teal-900 rounded-lg md:rounded-xl p-10 md:p-24 overflow-hidden shadow-[0_40px_100px_-20px_rgba(13,148,136,0.3)]"
                >
                    {/* Architectural Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-800/40 rounded-full blur-[120px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[80px] -ml-20 -mb-20" />

                    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                        {/* Minimalist Badge */}
                        <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-teal-500/30">
                            Immediate Assistance
                        </span>

                        <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
                            Ready to consult with Indore's <br />
                            <span className="font-bold">Leading Specialists?</span>
                        </h2>

                        <p className="text-teal-100/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                            Experience gold-standard medical care with our distinguished faculty. Your journey to better health starts with a single consultation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                            {/* Primary CTA */}
                            <Link
                                to="/book-appointment"
                                className="group w-full sm:w-auto bg-white text-teal-900 px-8 py-5 rounded-md font-bold flex items-center justify-center gap-3 hover:bg-teal-50 transition-all shadow-xl active:scale-95"
                            >
                                <Calendar size={20} className="text-teal-600" />
                                Schedule Your Visit
                                <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto bg-teal-800/50 backdrop-blur-md text-white border border-teal-500/30 px-8 py-5 rounded-md font-bold flex items-center justify-center gap-3 hover:bg-teal-800 transition-all active:scale-95"
                            >
                                <PhoneCall size={20} className="text-teal-400" />
                                Contact Clinic
                            </Link>
                        </div>

                        {/* Availability Note */}
                        <div className="mt-12 flex items-center gap-2 text-teal-400/60 text-xs font-medium uppercase tracking-widest">
                            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                            Next available slots: Today & Tomorrow
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ActionCTA;