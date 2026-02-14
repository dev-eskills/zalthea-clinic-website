import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FacultySection = ({ doctors }) => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-100 pb-10 gap-6">
          <div className="max-w-xl">
            <h2 className="text-teal-600 font-bold uppercase tracking-[0.25em] text-xs mb-4">
              Medical Faculty
            </h2>
            <p className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
              Meet our{" "}
              <span className="font-bold border-b-4 border-teal-500/20">
                Compassionate Care Specialists
              </span>
            </p>
          </div>
          <p className="text-slate-400 text-sm max-w-[240px] italic">
            World-class expertise committed to clinical excellence and
            patient-first care.
          </p>
        </div>

        {/* Updated Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctors.slice(0, 2).map((doctor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-xl rounded-2xl flex flex-col sm:flex-row h-full cursor-pointer"
              onClick={() =>
                navigate(doctor.value === "ctvs" ? "/cardiology" : "/ent")
              }
            >
              {/* Column 1: Image (Takes up ~40%) */}
              <div className="w-full sm:w-[40%] relative aspect-[4/5] sm:aspect-auto overflow-hidden bg-slate-50">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white text-[11px] uppercase px-2 py-1 tracking-wide shadow-sm rounded">
                    {doctor.value}
                  </span>
                </div>
              </div>

              {/* Column 2: Content (Takes up ~60%) */}
              <div className="w-full sm:w-[60%] p-6 md:p-8 flex flex-col justify-between">
                <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-teal-500 transition-colors duration-500">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                    {doctor.name}
                  </h3>
                  {/* <p className="text-teal-600 font-bold text-[12px] uppercase tracking-widest mb-3 leading-tight">
                    {doctor.specialty}
                  </p> */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-4">
                    {doctor.desc || doctor.description}
                  </p>
                  {/* Medical Registration & Affiliation */}
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-400 font-mono uppercase">
                      {doctor.regNo}
                    </p>
                    <p className="text-[10px] text-teal-700/70 font-bold uppercase">
                      {doctor.hospital}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-50">
                  <button
                    onClick={() =>
                      navigate(doctor.value === "ctvs" ? "/cardiology" : "/ent")
                    }
                    className="text-xs  uppercase tracking-wide text-slate-400 hover:text-teal-600 transition-colors cursor-pointer flex items-center gap-2 group/link"
                  >
                    Profile
                    <div className="w-4 h-[1px] bg-slate-300 group-hover/link:w-8 group-hover/link:bg-teal-500 transition-all" />
                  </button>

                  <button
                    onClick={() => navigate("/book-appointment")}
                    className="bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white px-4 py-2 text-xs font-bold transition-all duration-300 rounded-lg flex items-center gap-2"
                  >
                    Book
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const FacultySection = ({ doctors }) => {
//     const navigate = useNavigate();

//     return (
//         <section className="py-20 md:py-24 bg-white overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* Header - Responsive Flex */}
//                 <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 border-b border-slate-100 pb-10 gap-6">
//                     <div className="max-w-xl">
//                         <h2 className="text-teal-600 font-bold uppercase tracking-[0.25em] text-xs mb-4">
//                             Medical Faculty
//                         </h2>
//                         <p className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
//                             Consult with our <span className="font-bold border-b-4 border-teal-500/20">Distinguished Specialists</span>
//                         </p>
//                     </div>
//                     <p className="text-slate-400 text-sm max-w-[240px] italic">
//                         World-class expertise committed to clinical excellence and patient-first care.
//                     </p>
//                 </div>

//                 {/* Responsive Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
//                     {/* Mapping the first 2 doctors into cards */}
//                     {doctors.slice(0, 2).map((doctor, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6, delay: i * 0.1 }}
//                             className="group relative bg-white border border-slate-100 p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(13,148,136,0.08)] rounded-2xl flex flex-col h-full"
//                         >
//                             {/* Professional Headshot */}
//                             <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 mb-6 rounded-xl">
//                                 <img
//                                     src={doctor.image}
//                                     alt={doctor.name}
//                                     className="w-full h-full object-cover object-top grayscale-75 group-hover:grayscale-0 transition-all duration-700"
//                                 />
//                                 <div className="absolute top-4 left-4">
//                                     <span className="bg-white/90 backdrop-blur-sm text-teal-900 text-[10px] font-black uppercase px-3 py-1 tracking-tighter shadow-sm rounded">
//                                         Senior Consultant
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Content Area */}
//                             <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-teal-500 transition-colors duration-500 flex-grow">
//                                 <div className="mb-6">
//                                     <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
//                                         {doctor.name}
//                                     </h3>
//                                     <p className="text-teal-600 font-bold text-[10px] uppercase tracking-widest mb-3 leading-tight">
//                                         {doctor.credentials}
//                                     </p>
//                                     <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
//                                         {doctor.desc || doctor.description}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Bottom Actions */}
//                             <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-50">
//                                 <p
//                                     onClick={() => navigate(doctor.specialty === "Senior Cardiac Surgeon" ? '/cardiology' : '/ent')}
//                                     className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-teal-600 transition-colors cursor-pointer flex items-center gap-2 group/link"
//                                 >
//                                     Profile Details
//                                     <div className="w-6 h-[1px] bg-slate-300 group-hover/link:w-10 group-hover/link:bg-teal-500 transition-all" />
//                                 </p>

//                                 <p
//                                     onClick={() => navigate(doctor.specialty === "Senior Cardiac Surgeon" ? '/cardiology' : '/ent')}
//                                     className="bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white p-3 transition-all duration-300 rounded-lg cursor-pointer"
//                                 >
//                                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                     </svg>
//                                 </p>
//                             </div>
//                         </motion.div>
//                     ))}

//                     {/* Column 3: Professional Summary Section */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         className="lg:pt-6 lg:pl-10 flex flex-col justify-center lg:justify-start mt-10 lg:mt-0"
//                     >
//                         <div className="group">
//                             <h4 className="text-teal-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
//                                 Expertise & Distinction
//                             </h4>
//                             <p className="text-slate-500 text-base leading-relaxed mb-8">
//                                 Specializing in complex <strong className="text-slate-900 font-bold">CTVS</strong> and <strong className="text-slate-900 font-bold">ENT</strong> cases, we utilize gold-standard minimally invasive techniques to ensure faster recovery and precision care for our patients.
//                             </p>

//                             {/* Signature Style */}
//                             <div className="flex flex-col items-end">
//                                 <div className="flex items-center gap-3">
//                                     <div className="h-px w-8 bg-teal-500 transition-all duration-700 group-hover:w-16" />
//                                     <p className="text-sm font-bold tracking-widest text-teal-600 uppercase">
//                                         Zalthea Clinic
//                                     </p>
//                                 </div>
//                                 <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">
//                                     Excellence in Care
//                                 </p>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FacultySection;
