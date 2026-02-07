import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalSummary = () => {
    return (
        /* Using py-12 for a tight, professional spacing between sections */
        <section className="w-full flex items-center justify-center bg-white px-6 py-12 md:py-16">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full text-center"
            >
                <div className="group inline-block">
                    {/* Header Label - Minimal bottom margin */}
                    <h4 className="text-teal-600 font-bold uppercase tracking-[0.25em] text-2xl mb-4">
                        Expertise & Distinction
                    </h4>

                    {/* Main Description - Slimmer text size and line height */}
                    <p className="text-slate-500 text-xl md:text-xxl font-light leading-relaxed mb-6">
                        Specializing in complex
                        <strong className="text-slate-900 font-bold mx-1">CTVS</strong>
                        and
                        <strong className="text-slate-900 font-bold mx-1">ENT</strong>
                        cases, we utilize gold-standard minimally invasive techniques to ensure faster recovery and precision care for our patients.
                    </p>

                    {/* Compact Signature Style */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-slate-100 transition-all duration-700 group-hover:w-12 group-hover:bg-teal-500" />
                            <p className="text-sm font-bold tracking-[0.15em] text-teal-600 uppercase">
                                Zalthea Clinic
                            </p>
                            <div className="h-[1px] w-8 bg-slate-100 transition-all duration-700 group-hover:w-12 group-hover:bg-teal-500" />
                        </div>
                        <p className="text-[8px] text-slate-400 mt-1 uppercase tracking-[0.3em] font-medium">
                            Excellence in Care
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProfessionalSummary;