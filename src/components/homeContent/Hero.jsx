import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShieldCheck, HeartPulse, Stethoscope } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center bg-white overflow-hidden mt-5">   
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content: Branding & Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-5"
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-px w-12 bg-teal-500" />
                            <span className="text-teal-600 font-bold text-xs uppercase tracking-[0.3em]">
                                Zalthea Clinic Indore
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900  tracking-tight">
                            Compassion. Strength. <br />
                            <span className="text-teal-600">Excellence.</span>
                        </h1>

                        <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-light">
                            Consult with our gold-medalist specialists for world-class
                            <span className="font-semibold text-slate-800"> Heart, Vascular</span>, and
                            <span className="font-semibold text-slate-800"> ENT</span> surgical care.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                to="/book-appointment"
                                className="flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
                            >
                                <Calendar size={18} />
                                Book Appointment
                            </Link>
                            <div className="flex items-center gap-3 px-2">
                                <div className="flex -space-x-2">
                                    {/* Doctor 1: Dr. Sami Anwar Khan */}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FBQLR2bgffyuceXXqdOtWHIANdQbFt4mA&s"
                                            alt="Dr. Sami Anwar Khan"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Doctor 2: Dr. Sabiya Khan Suri */}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRLPye6I1-EGb8brLSYtDZjGiYq9WXGwgDw&s"
                                            alt="Dr. Sabiya Khan Suri"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Metric Circle */}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-teal-500 flex items-center justify-center text-[8px] font-bold text-white shadow-sm">
                                        98%
                                    </div>
                                </div>

                                <p className="text-[11px] text-slate-400 font-medium leading-tight">
                                    Trusted by <br />
                                    <span className="text-slate-900 font-bold">10,000+ Patients</span>
                                </p>
                            </div>
                        </div>

                        {/* Direct Specialist Links */}
                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><HeartPulse size={20} /></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900">Dr. Sami Anwar Khan</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">CTVS Surgeon</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><Stethoscope size={20} /></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-900">Dr. Sabiya Khan Suri</p>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">ENT Surgeon</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual: The Specialists */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative "
                    >
                        {/* The Duo Image */}
                        <div className="relative rounded-[3rem] overflow-hiddenshadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group bg-teal-700">
                            <img
                                src="/combo.png" 
                                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                alt="Zalthea Specialists"
                            />

                            {/* Floating Accreditation Badge */}
                            <div className="absolute bottom-10 left-10 right-10 backdrop-blur-md bg-white/80 p-5 rounded-2xl border border-white shadow-2xl flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold text-xs uppercase tracking-widest">Medical Excellence</p>
                                    <p className="text-slate-500 text-[10px] font-medium leading-none mt-1">Both Specialists are Gold Medalists</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Shapes */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-50 rounded-full blur-3xl -z-10 opacity-60" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

