import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const ReviewSection = ({ reviews }) => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Patient Success</h2>
                        <p className="text-4xl font-light text-slate-900 leading-tight">
                            Clinical Outcomes & <span className="font-bold">Patient Trust</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm italic border-l-2 border-teal-500 pl-4">
                        98% Patient Satisfaction Rate based on 2,500+ procedures.
                    </div>
                </div>

                {/* The Review Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative group"
                        >
                            {/* Decorative Quote Icon */}
                            <Quote className="absolute top-8 right-8 text-teal-50 group-hover:text-teal-100 transition-colors w-12 h-12" />

                            <div className="relative z-10">
                                {/* Rating & Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex gap-1">
                                        {[...Array(rev.rating)].map((_, star) => (
                                            <Star key={star} size={14} className="fill-teal-500 text-teal-500" />
                                        ))}
                                    </div>
                                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">
                                        <CheckCircle2 size={12} />
                                        Verified Case
                                    </span>
                                </div>

                                {/* Review Content */}
                                <p className="text-slate-600 text-sm leading-relaxed mb-8 italic">
                                    "{rev.comment}"
                                </p>

                                {/* Patient Profile */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-teal-700">
                                        {rev.patient.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm">{rev.patient}</h4>
                                        <p className="text-teal-500 text-[10px] font-black uppercase tracking-tighter">
                                            {rev.treatment} • {rev.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;