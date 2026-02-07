import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ENT() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ENT-Specific Treatment Slider Content
  const entHighlights = [
    {
      title: "Microscopic Ear Surgery",
      desc: "Advanced restorative procedures for hearing loss and chronic ear infections.",
      stat: "98% Success Rate",
      image: "https://i.pinimg.com/736x/6b/2e/04/6b2e044a1f2bd8cb243dcc2757ef5655.jpg"
    },
    {
      title: "Endoscopic Sinus Surgery",
      desc: "Minimally invasive treatment for chronic sinusitis and nasal polyps.",
      stat: "1,200+ Procedures",
      image: "https://i.pinimg.com/736x/6b/0f/4f/6b0f4f243b97ef35742d68ea3f1f8a31.jpg"
    },
    {
      title: "Head & Neck Cancer Screening",
      desc: "Early detection and surgical management of thyroid and neck tumors.",
      stat: "Gold Medalist Care",
      image: "https://i.pinimg.com/736x/ab/a1/c0/aba1c0628e1e2290c4db5ecef8605efd.jpg"
    }
  ];

  const conditions = [
    { name: 'Hearing Loss & Infections', icon: '👂' },
    { name: 'Tinnitus (Buzzing/Ringing)', icon: '🔔' },
    { name: 'Sinusitis & Allergy', icon: '👃' },
    { name: 'Throat & Voice Disorders', icon: '🗣️' },
    { name: 'Snoring & Sleep Apnea', icon: '😴' },
    { name: 'Thyroid & Neck Surgery', icon: '🦋' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % entHighlights.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-teal-900 text-white py-24 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1600"
            className="w-full h-full object-cover"
            alt="ENT Clinic"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className="max-w-3xl"
          >
            <span className="bg-teal-500/20 border border-teal-400 text-teal-300 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">
              ENT & Head-Neck Surgery
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Dr. Sabiya Khan Suri</h1>
            <p className="text-2xl text-teal-100 mb-2">MBBS, DLO (Gold Medalist)</p>
            <p className="text-lg text-teal-200/80 mb-8 italic">
              Consultant at Shalby Multi-Specialty Hospital, Indore.
            </p>
            <p className="text-lg text-teal-200/80 mb-8 italic">Reg No: MP-15829</p>
            <Link
              to="/book-appointment?specialist=ent"
              className="bg-white text-teal-900 px-10 py-4 rounded-full font-bold hover:bg-teal-50 transition-all shadow-xl inline-block"
            >
              Book Appointment →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Treatment Slider (Apollo Style) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Clinical Success & Treatments</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
          </div>

          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full md:w-1/2 h-full"
              >
                <img
                  src={entHighlights[currentSlide].image}
                  className="w-full h-full object-cover"
                  alt="ENT Treatment"
                />
              </motion.div>
            </AnimatePresence>

            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <span className="text-teal-600 font-black text-4xl mb-4 block">
                    {entHighlights[currentSlide].stat}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {entHighlights[currentSlide].title}
                  </h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {entHighlights[currentSlide].desc}
                  </p>
                  <Link to="/book-appointment" className="text-teal-600 font-bold border-b-2 border-teal-600 pb-1 hover:text-teal-800 transition-colors">
                    Request This Procedure →
                  </Link>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2 mt-12">
                {entHighlights.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 transition-all rounded-full ${currentSlide === i ? 'w-12 bg-teal-500' : 'w-4 bg-teal-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Grid - Bento Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">When to Consult?</h2>
            <p className="text-slate-600">Specialized clinical evaluations for all ear, nose, and throat symptoms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-teal-50/50 border border-teal-100 rounded-2xl flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all"
              >
                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                <span className="text-lg font-bold text-teal-900">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose */}
      <section className="py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-900 text-center mb-16"
          >
            Why Choose Our ENT Care?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Specialist', desc: 'Gold medalist with extensive ENT expertise' },
              { title: 'Advanced Technology', desc: 'State-of-the-art diagnostic equipment' },
              { title: 'Personalized Treatment', desc: 'Tailored care for each patient' },
              { title: 'Compassionate Care', desc: 'Understanding and supportive approach' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">✦</div>
                <h3 className="font-bold text-teal-900 mb-2">{card.title}</h3>
                <p className="text-teal-700 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* When to see ENT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-teal-50 m-3 rounded-2xl p-8 border border-teal-300 "
      >
        <h3 className="text-xl font-bold text-teal-900 mb-6">Tinnitus Awareness Week</h3>
        <p className="text-teal-700 mb-4">2nd - 9th February 2026</p>
        <p className="text-teal-800">
          Join us in raising awareness about hearing health. Early detection and treatment of tinnitus and hearing disorders can significantly improve quality of life.
        </p>
        <Link
          to="/take-advice?topic=ent"
          className="mt-6 inline-block text-teal-600 font-semibold hover:text-teal-700"
        >
          Read ENT Health Tips →
        </Link>
      </motion.div>

      {/* Reliable CTA */}
      <section className="py-16 bg-teal-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Expert ENT Care in Indore</h2>
          <p className="text-teal-200 mb-8">Dr. Sabiya Khan Suri offers gold-standard treatment for patients across Indore and Jabalpur.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-appointment" className="bg-teal-500 hover:bg-teal-400 px-8 py-4 rounded-full font-bold transition-all">
              Schedule Appointment
            </Link>
            <a href="tel:+910000000000" className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-teal-900 transition-all">
              Call Helpline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

  
