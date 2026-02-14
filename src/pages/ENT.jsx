import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  Ear,
  BellRing,
  Wind,
  Mic,
  Moon,
  ActivitySquare,
  Award,
  Cpu,
  UserCheck,
  HeartHandshake,
} from "lucide-react";
import slider1 from "../../public/slider1.jpeg";
import slider2 from "../../public/slider2.jpeg";
import slider3 from "../../public/slider3.jpeg";

export default function ENT() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ENT-Specific Treatment Slider Content
  const entHighlights = [
    {
      title: "Microscopic & Laser Ear Surgery",
      desc: "Advanced treatment for hearing loss and chronic ear disorders using modern ENT techniques.",
      stat: "98% Success Rate",
      features: [
        "Hearing Loss Evaluation & Treatment",
        "Tympanoplasty (Eardrum Repair)",
        "Mastoid Surgery",
        "Tinnitus (Ringing in Ear) Treatment",
        "Vertigo & Balance Disorder Management",
        "Microscopic & Laser Ear Procedures",
      ],
      image: `${slider1}`,
    },
    {
      title: "Endoscopic Sinus & Nasal Surgery",
      desc: "Minimally invasive solutions for chronic sinus and nasal conditions.",
      stat: "1,200+ Procedures",
      features: [
        "Sinusitis Treatment",
        "Endoscopic Sinus Surgery",
        "Deviated Nasal Septum (DNS) Surgery",
        "Nasal Allergy Treatment",
        "Nasal Polyps Surgery",
        "Epistaxis (Nosebleed) Management",
      ],
      image: `${slider2}`,
    },
    {
      title: "Head, Neck & Pediatric ENT Care",
      desc: "Comprehensive surgical care for head, neck, throat, and pediatric ENT conditions.",
      stat: "Gold Medalist Care",
      features: [
        "Thyroid Surgery",
        "Salivary Gland Surgery",
        "Head & Neck Tumor Surgery",
        "Tonsil & Adenoid Surgery",
        "Voice & Swallowing Disorder Treatment",
        "Pediatric Ear Infections & Airway Problems",
        "Snoring & Sleep Apnea Evaluation",
        "Airway Obstruction Surgery",
      ],
      image: `${slider3}`,
    },
  ];

  const conditions = [
    { name: "Hearing Loss & Infections", icon: Ear },
    { name: "Tinnitus (Buzzing/Ringing)", icon: BellRing },
    { name: "Sinusitis & Allergy", icon: Wind },
    { name: "Throat & Voice Disorders", icon: Mic },
    { name: "Snoring & Sleep Apnea", icon: Moon },
    { name: "Thyroid & Neck Surgery", icon: ActivitySquare },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % entHighlights.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-white pt-25 sm:pt-20 overflow-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-gradient-to-br from-teal-950 via-[#052f2f] to-black text-white min-h-[80vh] flex items-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1600"
            className="w-full h-full object-cover"
            alt="ENT Clinic"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-20 -left-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-teal-900/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-2 bg-teal-500/10 text-teal-200 rounded-md text-xs sm:text-sm tracking-widest uppercase mb-3"
          >
            ENT & Head-Neck Surgery
          </motion.span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Dr. Sabiya Khan Suri
          </h1>

          <p className="text-lg sm:text-xl text-teal-50 mb-2">
            MBBS, DLO (Gold Medalist)
          </p>

          <p className="max-w-xl text-sm sm:text-base text-teal-50 leading-relaxed mb-8">
            A dedicated ENT & Head–Neck Surgeon specializing in advanced medical
            and surgical management of ear, nose, throat, thyroid, and complex
            head–neck conditions, focused on precision care and optimal patient
            outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book-appointment?specialist=cardiology"
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-all text-center"
            >
              Book Appointment →
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-teal-400 text-teal-200 hover:bg-teal-500/20 rounded-md transition-all text-center"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SLIDER ---------------- */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-14 md:mb-20">
            <span className="text-teal-600 tracking-wide uppercase text-sm font-semibold">
              Excellence in ENT Care
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Clinical Outcomes &
              <br />
              <span className="text-teal-600"> Advanced Treatments</span>
            </h2>
          </div>

          {/* Card */}
          <div className="relative rounded-md overflow-hidden shadow-md bg-white flex flex-col lg:flex-row min-h-[450px]">
            {/* Image */}
            <div className="w-full lg:w-1/2 h-[280px] sm:h-[500px] ">
              <img
                src={entHighlights[currentSlide].image}
                className="w-full h-full object-cover"
                alt="ENT Treatment"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-14 flex flex-col justify-center relative">
              <div className="absolute top-6 right-6 bg-teal-50 text-teal-700 px-4 py-2 rounded-md text-sm sm:text-lg font-semibold border border-teal-100">
                {entHighlights[currentSlide].stat}
              </div>

              <span className="text-xs sm:text-sm uppercase tracking-wider text-teal-600 font-medium">
                Advanced ENT Procedure
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 mt-3 mb-5">
                {entHighlights[currentSlide].title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {entHighlights[currentSlide].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {entHighlights[currentSlide].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-slate-700 text-sm"
                  >
                    <span className="w-2 h-2 mt-2 bg-teal-600 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-all"
              >
                Request Procedure →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONDITIONS ---------------- */}
      <section className="py-16 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              When Should You Consult an ENT Specialist?
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Early diagnosis ensures better outcomes. Consult for any
              persistent ear, nose, or throat symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                    <Icon size={22} />
                  </div>
                  <p className="text-slate-700 font-medium text-sm sm:text-base">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE ---------------- */}
      <section className="py-20 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Why Choose Our ENT Care?
            </h2>
            <p className="text-slate-500 mt-3 text-sm sm:text-base">
              Trusted expertise combined with advanced technology for better
              outcomes.
            </p>
          </div>

          <div className="relative border-l border-teal-200 ml-4 space-y-12 lg:w-2/3">
            {[
              {
                title: "Expert Specialist",
                desc: "Gold medalist ENT & Head–Neck surgeon with advanced surgical expertise.",
                icon: Award,
              },
              {
                title: "Advanced Technology",
                desc: "Modern diagnostic tools and minimally invasive surgical equipment.",
                icon: Cpu,
              },
              {
                title: "Personalized Treatment",
                desc: "Customized care plans designed for each patient's condition.",
                icon: UserCheck,
              },
              {
                title: "Compassionate Care",
                desc: "Patient-first approach focused on comfort and clarity.",
                icon: HeartHandshake,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="relative pl-10">
                  <div className="absolute -left-6 top-1 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-md">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-16 bg-gradient-to-r from-teal-50 via-white to-teal-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
              Dr. Sabiya Khan Suri
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-3">
              Expert ENT Care in Indore
            </h2>

            <p className="text-slate-600 mt-4 text-sm sm:text-base">
              Early detection and management of tinnitus and hearing disorders
              can significantly improve quality of life and prevent
              complications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/take-advice?topic=ent"
              className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-all text-center"
            >
              Read Health Tips →
            </Link>

            <Link
              to="/book-appointment"
              className="border border-teal-600 text-teal-700 px-6 py-3 rounded-md font-medium hover:bg-teal-600 hover:text-white transition-all text-center"
            >
              Book Hearing Checkup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
  // return (
  //   <div className="bg-white pt-20">
  //     {/* Hero Section */}
  //     <section className="relative bg-gradient-to-br from-teal-950 via-[#052f2f] to-black text-white min-h-[80vh] flex items-center overflow-hidden">
  //       {/* Background Image */}
  //       <div className="absolute inset-0 opacity-20">
  //         <img
  //           src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1600"
  //           className="w-full h-full object-cover"
  //           alt="ENT Clinic"
  //         />
  //       </div>

  //       {/* Dark Overlay */}
  //       <div className="absolute inset-0 bg-black/20" />

  //       {/* Decorative Blur */}
  //       <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-900/30 rounded-full blur-3xl" />

  //       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
  //         <motion.span
  //           initial={{ opacity: 0, y: 10 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ delay: 0.3 }}
  //           className="inline-block px-5 py-2 bg-teal-500/10 text-teal-200 rounded-md text-sm tracking-widest uppercase mb-3"
  //         >
  //           ENT & Head-Neck Surgery
  //         </motion.span>

  //         <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
  //           Dr. Sabiya Khan Suri
  //         </h1>

  //         <p className="text-xl text-teal-50 mb-2">MBBS, DLO (Gold Medalist)</p>

  //         {/* Improved Professional Description */}
  //         <p className="max-w-xl text-teal-50 leading-relaxed mb-10">
  //           A dedicated ENT & Head–Neck Surgeon specializing in advanced medical
  //           and surgical management of ear, nose, throat, thyroid, and complex
  //           head–neck conditions, focused on precision care and optimal patient
  //           outcomes.
  //         </p>

  //         <div className="flex flex-wrap gap-5">
  //           <Link
  //             to="/book-appointment?specialist=cardiology"
  //             className="px-7 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-all duration-300"
  //           >
  //             Book Appointment →
  //           </Link>

  //           <Link
  //             to="/contact"
  //             className="px-8 py-3 border border-teal-400 text-teal-200 hover:bg-teal-500/20 rounded-md transition-all duration-300"
  //           >
  //             Contact Clinic
  //           </Link>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Treatment Slider (Apollo Style) */}
  //     <section className="py-18 bg-gradient-to-b from-slate-50 to-white">
  //       <div className="max-w-7xl mx-auto px-6">
  //         {/* Section Title */}
  //         <div className="text-center mb-20">
  //           <span className="text-teal-600 tracking-wide uppercase text-sm font-semibold">
  //             Excellence in ENT Care
  //           </span>

  //           <motion.h2
  //             initial={{ opacity: 0, y: 20 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             viewport={{ once: true }}
  //             transition={{ delay: 0.2, duration: 0.6 }}
  //             className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
  //           >
  //             Clinical Outcomes &
  //             <br />
  //             <span className="text-teal-600"> Advanced Treatments</span>
  //           </motion.h2>
  //           <div className="w-20 h-[3px] bg-teal-500 mx-auto mt-6 rounded-full" />
  //         </div>

  //         {/* Slider Card */}
  //         <div className="relative rounded-md overflow-hidden shadow-md bg-white flex flex-col lg:flex-row min-h-[520px]">
  //           {/* Image Side */}
  //           <AnimatePresence mode="wait">
  //             <motion.div
  //               key={currentSlide}
  //               initial={{ opacity: 0, scale: 1.05 }}
  //               animate={{ opacity: 1, scale: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 1 }}
  //               className="w-full lg:w-1/2 relative"
  //             >
  //               <img
  //                 src={entHighlights[currentSlide].image}
  //                 className="w-full h-full object-cover"
  //                 alt="ENT Treatment"
  //               />
  //               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
  //             </motion.div>
  //           </AnimatePresence>

  //           {/* Content Side */}
  //           <div className="w-full lg:w-1/2 relative p-12 md:p-16 flex flex-col justify-center bg-white border-l border-slate-100">
  //             {/* Stat Badge */}
  //             <div className="absolute top-10 right-10 bg-teal-50 text-teal-700 px-5 py-2 rounded-md text-xl font-semibold  border border-teal-100">
  //               {entHighlights[currentSlide].stat}
  //             </div>

  //             <AnimatePresence mode="wait">
  //               <motion.div
  //                 key={currentSlide}
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 exit={{ opacity: 0, y: -20 }}
  //                 transition={{ duration: 0.4 }}
  //                 className="max-w-xl"
  //               >
  //                 {/* Small Category Label */}
  //                 <span className="text-sm uppercase tracking-wider text-teal-600 font-medium">
  //                   Advanced ENT Procedure
  //                 </span>

  //                 <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mt-3 mb-5 leading-snug">
  //                   {entHighlights[currentSlide].title}
  //                 </h3>

  //                 <div className="w-12 h-[2px] bg-teal-500 mb-6 rounded-full" />

  //                 <p className="text-slate-600 text-base leading-relaxed mb-8">
  //                   {entHighlights[currentSlide].desc}
  //                 </p>

  //                 {/* Key Highlights */}
  //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
  //                   {entHighlights[currentSlide].features.map(
  //                     (feature, index) => (
  //                       <motion.div
  //                         key={index}
  //                         initial={{ opacity: 0, y: 10 }}
  //                         animate={{ opacity: 1, y: 0 }}
  //                         transition={{ delay: index * 0.05 }}
  //                         className="flex items-start gap-3 text-slate-700 text-sm"
  //                       >
  //                         <span className="w-2 h-2 mt-2 bg-teal-600 rounded-full flex-shrink-0" />
  //                         <span>{feature}</span>
  //                       </motion.div>
  //                     ),
  //                   )}
  //                 </div>

  //                 <Link
  //                   to="/book-appointment"
  //                   className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-all duration-300 shadow-sm hover:shadow-md"
  //                 >
  //                   Request Procedure →
  //                 </Link>
  //               </motion.div>
  //             </AnimatePresence>

  //             {/* Vertical Indicators */}
  //             <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
  //               {entHighlights.map((_, i) => (
  //                 <button
  //                   key={i}
  //                   onClick={() => setCurrentSlide(i)}
  //                   className={`transition-all duration-300 rounded-full ${
  //                     currentSlide === i
  //                       ? "h-8 w-[4px] bg-teal-600"
  //                       : "h-6 w-[3px] bg-slate-300"
  //                   }`}
  //                 />
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Conditions Grid - Bento Style */}
  //     <section className="py-10 bg-white">
  //       <div className="max-w-7xl mx-auto px-6">
  //         {/* Section Header */}
  //         <div className="text-center mb-14">
  //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
  //             When Should You Consult an ENT Specialist?
  //           </h2>
  //           <p className="text-slate-500 mt-3 max-w-xl mx-auto">
  //             Early diagnosis ensures better outcomes. Consult for any
  //             persistent ear, nose, or throat symptoms.
  //           </p>
  //         </div>

  //         {/* Grid */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {conditions.map((item, i) => {
  //             const Icon = item.icon;

  //             return (
  //               <motion.div
  //                 key={i}
  //                 whileHover={{ y: -4 }}
  //                 transition={{ duration: 0.2 }}
  //                 className="group bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4 hover:bg-white hover:shadow-sm transition-all"
  //               >
  //                 {/* Icon Container */}
  //                 <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
  //                   <Icon size={22} />
  //                 </div>

  //                 {/* Text */}
  //                 <p className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
  //                   {item.name}
  //                 </p>
  //               </motion.div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </section>

  //     {/* Why Choose */}
  //     <section className="py-24 bg-white">
  //       <div className="gap-20 flex  mx-auto px-6">
  //         {/* Heading */}
  //         <div className="max-w-xs text-center mb-16">
  //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
  //             Why Choose Our ENT Care?
  //           </h2>
  //           <p className="text-slate-500 mt-3">
  //             Trusted expertise combined with advanced technology for better
  //             outcomes.
  //           </p>
  //         </div>

  //         {/* Vertical Feature List */}
  //         <div className="relative border-l border-teal-200 ml-4 space-y-12">
  //           {[
  //             {
  //               title: "Expert Specialist",
  //               desc: "Gold medalist ENT & Head–Neck surgeon with advanced surgical expertise.",
  //               icon: Award,
  //             },
  //             {
  //               title: "Advanced Technology",
  //               desc: "Modern diagnostic tools and minimally invasive surgical equipment.",
  //               icon: Cpu,
  //             },
  //             {
  //               title: "Personalized Treatment",
  //               desc: "Customized care plans designed for each patient's condition.",
  //               icon: UserCheck,
  //             },
  //             {
  //               title: "Compassionate Care",
  //               desc: "Patient-first approach focused on comfort and clarity.",
  //               icon: HeartHandshake,
  //             },
  //           ].map((item, i) => {
  //             const Icon = item.icon;

  //             return (
  //               <motion.div
  //                 key={item.title}
  //                 initial={{ opacity: 0, x: -20 }}
  //                 whileInView={{ opacity: 1, x: 0 }}
  //                 viewport={{ once: true }}
  //                 transition={{ delay: i * 0.1 }}
  //                 className="relative pl-10"
  //               >
  //                 {/* Icon */}
  //                 <div className="absolute -left-6 top-1 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-md">
  //                   <Icon size={18} />
  //                 </div>

  //                 {/* Content */}
  //                 <h3 className="text-lg font-semibold text-slate-900">
  //                   {item.title}
  //                 </h3>
  //                 <p className="text-slate-600 mt-2 text-sm leading-relaxed">
  //                   {item.desc}
  //                 </p>
  //               </motion.div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </section>

  //     {/* When to see ENT */}
  //     <section className="relative h-[35vh]  bg-gradient-to-r from-teal-50 via-white to-teal-50 flex items-center overflow-hidden">
  //       {/* Soft Decorative Blur */}
  //       <div className="absolute -left-20 top-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
  //       <div className="absolute -right-20 bottom-0 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />

  //       <motion.div
  //         initial={{ opacity: 0, y: 30 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ duration: 0.5 }}
  //         className="relative max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8"
  //       >
  //         {/* Left Content */}
  //         <div className="max-w-xl">
  //           <span className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
  //             Dr. Sabiya Khan Suri
  //           </span>

  //           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3">
  //             Expert ENT Care in Indore
  //           </h2>

  //           <p className="text-slate-600 max-w-lg mt-4 text-sm leading-relaxed">
  //             Early detection and management of tinnitus and hearing disorders
  //             can significantly improve quality of life and prevent
  //             complications.
  //           </p>
  //         </div>

  //         {/* Right CTA */}
  //         <div className="flex flex-col sm:flex-row gap-4">
  //           <Link
  //             to="/take-advice?topic=ent"
  //             className="bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-all shadow-sm"
  //           >
  //             Read Health Tips →
  //           </Link>

  //           <Link
  //             to="/book-appointment"
  //             className="border border-teal-600 text-teal-700 px-6 py-3 rounded-md font-medium hover:bg-teal-600 hover:text-white transition-all"
  //           >
  //             Book Hearing Checkup
  //           </Link>
  //         </div>
  //       </motion.div>
  //     </section>

  //   </div>
  // );
}
