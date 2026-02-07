import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Cardiology() {
  const services = [
    { title: 'Cardio Monitoring', icon: '🩺', desc: 'Real-time heart rhythm analysis and diagnostic checkups.' },
    { title: 'Vascular Surgery', icon: '💉', desc: 'Advanced operative care for arterial and venous disorders.' },
    { title: 'BP Management', icon: '📊', desc: 'Clinical hypertension control and personalized lifestyle plans.' },
    { title: 'ECG & Stress Test', icon: '📈', desc: 'High-precision diagnostic testing for heart performance.' },
    { title: 'Lipid Profile', icon: '🧪', desc: 'Comprehensive cholesterol and lipid management.' },
    { title: 'Consultations', icon: '👨‍⚕️', desc: 'Expert pre- and post-operative surgical guidance.' },
  ];

  const trustMetrics = [
    "13,000+ Successful Surgeries",
    "Gold Medalist Expertise",
    "Advanced CTVS Care",
    "Mohak Super Speciality Affiliated",
    "SAIMS Hospital Partner",
    "Indore's Leading Heart Surgeon",
    "Reg. No. MP-13768",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/ac/60/c3/ac60c3dbb58ed3c8774344b29105be06.jpg"
            className="w-full h-full object-cover"
            alt="Cardiology Center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-950/90 via-teal-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl backdrop-blur-md bg-white/10 p-8 md:p-12 rounded-[2.5rem] border border-white/20 shadow-2xl"
          >
            <span className="text-teal-300 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Cardiothoracic & Vascular
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Dr. Sami Anwar Khan
            </h1>
            <p className="text-teal-200 text-xl font-bold mb-2">MBBS, MS, MCh, CTVS (Gold Medalist)</p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Experience world-class surgical precision at <strong> Mohak Super Speciality & SAIMS Hospital Indore  </strong>.
              Consultant - Cardiothoracic & Vascular Surgeon.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Reg No: MP - 13768 </p>
            <Link
              to="/book-appointment?specialist=cardiology"
              className="bg-white text-teal-900 hover:bg-teal-50 px-10 py-4 rounded-full font-bold transition-all shadow-xl inline-block"
            >
              Book Appointment →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Slider */}
      <div className="bg-teal-900 py-6 overflow-hidden border-y border-teal-800">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-12 text-teal-100 font-bold uppercase tracking-widest text-sm"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...trustMetrics, ...trustMetrics].map((text, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="text-teal-400">✦</span> {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Clinical Services</h2>
            <p className="text-4xl font-bold text-slate-900">Advanced Heart Care Solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="text-4xl mb-6 bg-teal-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="h-1 w-12 bg-teal-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section with Visual Accent */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-teal-900 mb-8 leading-tight">
              Surgical Excellence & <br />Academic Distinction
            </h2>
            <div className="space-y-6">
              {[
                { t: 'Gold Medalist Surgeon', d: 'Recognized for academic and surgical excellence in CTVS.' },
                { t: 'Modern Affiliations', d: 'Consultant at Mohak Super Speciality & SAIMS Hospital.' },
                { t: 'Central Location', d: 'Located at Palasia Square for easy patient access.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.t}</h4>
                    <p className="text-slate-600 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-teal-500 rounded-[3rem] rotate-3 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
              className="rounded-[3rem] shadow-2xl"
              alt="Surgery"
            />
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Schedule Your Vital Consultation Today</h2>
          <p className="text-teal-200 text-lg mb-10 opacity-80">
            Dedicated to providing Indore with the highest standard of cardiothoracic care.
          </p>
          <Link
            to="/book-appointment?specialist=cardiology"
            className="bg-teal-500 hover:bg-teal-400 text-white px-12 py-5 rounded-full font-bold transition-all shadow-xl inline-block text-lg"
          >
            Request Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}


// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function Cardiology() {
//   const services = [
//     'Cardio monitoring & checkups',
//     'Heart disease prevention',
//     'Blood pressure management',
//     'Cholesterol & lipid profile',
//     'ECG & stress testing',
//     'Heart health consultations',
//   ];

//   const steps = [
//     { num: '1', title: 'Appointment', desc: 'Book your consultation' },
//     { num: '2', title: 'Doctor Checkup', desc: 'Comprehensive examination' },
//     { num: '3', title: 'Manage Treatment', desc: 'Personalized care plan' },
//     { num: '4', title: 'Enjoy Life', desc: 'Better heart health' },
//   ];

//   return (
//     <div>
//       {/* Hero */}
//       <section className="relative bg-linear-to-br from-teal-700 to-teal-900 text-white py-24 overflow-hidden">
//         <motion.div
//           className="absolute inset-0 opacity-20"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//           style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
//         />
//         <div className="max-w-7xl mx-auto px-4 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-3xl"
//           >
//             <p className="text-teal-200 font-semibold uppercase tracking-wider mb-4">Cardiology</p>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Sami Anwar Khan</h1>
//             <p className="text-xl text-teal-100 mb-2">MBBS, MS, MCh, CTVS (Gold Medalist)</p>
//             <p className="text-lg text-teal-200 mb-6 font-medium">Consultant - Cardiothoracic & Vascular Surgeon</p>
//             <p className="text-teal-100 mb-8 leading-relaxed">
//               Providing expert surgical care at <strong>Mohak Super Speciality & SAIMS Hospital, Indore</strong>.
//               Specializing in comprehensive cardiovascular evaluations and advanced operative treatments.
//               <br /><span className="text-sm opacity-75">Reg. No.: MP - 13768</span>
//             </p>
//             <Link
//               to="/book-appointment?specialist=cardiology"
//               className="inline-block px-8 py-4 bg-white text-teal-700 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
//             >
//               Book Appointment →
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl font-bold text-teal-900 mb-4">Cardiology Services</h2>
//             <p className="text-teal-700 max-w-2xl mx-auto">Expert heart care and surgical interventions at Zalthea Clinic.</p>
//           </motion.div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, i) => (
//               <motion.div
//                 key={service}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="flex items-center gap-4 p-6 bg-teal-50 rounded-xl border border-teal-100"
//               >
//                 <span className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">♥</span>
//                 <span className="font-medium text-teal-900">{service}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How We Work? - Unchanged */}
//       <section className="py-24 bg-teal-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-teal-900 text-center mb-16"
//           >
//             How We Work?
//           </motion.h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {steps.map((step, i) => (
//               <motion.div
//                 key={step.num}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="text-center"
//               >
//                 <motion.div
//                   className="w-16 h-16 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold"
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                 >
//                   {step.num}
//                 </motion.div>
//                 <h3 className="font-bold text-teal-900 mb-2">{step.title}</h3>
//                 <p className="text-teal-700 text-sm">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Our Cardiology Care? */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-teal-900 text-center mb-16"
//           >
//             Why Choose Zalthea Clinic?
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: 'Gold Medalist Surgeon', desc: 'Dr. Sami Anwar Khan brings academic excellence and surgical precision.' },
//               { title: 'Top-Tier Affiliations', desc: 'Affiliated with Mohak Super Speciality & SAIMS Hospital.' },
//               { title: 'Central Location', desc: 'Conveniently located at Apollo Arcade, Palasia Square, Indore.' },
//             ].map((card, i) => (
//               <motion.div
//                 key={card.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="bg-teal-50 rounded-xl p-8 border border-teal-100"
//               >
//                 <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">♥</div>
//                 <h3 className="font-bold text-teal-900 mb-2">{card.title}</h3>
//                 <p className="text-teal-700">{card.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 bg-teal-900 text-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">Schedule Your Consultation</h2>
//           <p className="text-teal-200 mb-6">Expert CTVS care is just an appointment away.</p>
//           <Link
//             to="/book-appointment?specialist=cardiology"
//             className="inline-block px-8 py-4 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-400 transition-colors"
//           >
//             Book Appointment
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

