import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Droplet,
  Microscope,
  Wind,
  HeartHandshake,
} from "lucide-react";

export default function Cardiology() {
  const services = [
    {
      title: "Cardio Monitoring",
      icon: HeartPulse,
      desc: "Continuous heart rhythm tracking and diagnostic evaluation.",
    },
    {
      title: "Cardiovascular Surgery",
      icon: Activity,
      desc: "Advanced surgical treatment for heart and vascular conditions.",
    },
    {
      title: "BP Management",
      icon: Droplet,
      desc: "Personalized plans for effective blood pressure control.",
    },
    {
      title: "ECG",
      icon: Stethoscope,
      desc: "Accurate testing to assess heart function and performance.",
    },
    {
      title: "Cardiac Profile",
      icon: Microscope,
      desc: "Comprehensive blood tests to evaluate heart health risks.",
    },
    {
      title: "Thoracic Surgery",
      icon: Wind,
      desc: "Specialized care for lung and chest conditions.",
    },
    {
      title: "Consultations",
      icon: HeartHandshake,
      desc: "Expert guidance for cardiac, vascular, and thoracic care.",
    },
  ];

  const trustMetrics = [
    "13,000+ Successful Surgeries",
    "Gold Medalist Expertise",
    "Advanced CTVS Care",
    "Mohak Super Speciality Affiliated",
    "SAIMS Hospital Partner",
    "Indore's Leading Heart Surgeon",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-[85vh] pt-20 flex items-center overflow-hidden bg-teal-950">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/ac/60/c3/ac60c3dbb58ed3c8774344b29105be06.jpg"
            alt="Cardiology Center"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-900/20 to-teal-950" />
        </div>

        {/* Decorative Glow */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-500/20 blur-3xl rounded-full" />

        <div className="relative z-10 px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-5 py-2 bg-teal-500/10 text-teal-200 rounded-md text-sm tracking-widest uppercase  mb-2"
            >
              Cardiothoracic & Vascular Specialist
            </motion.span>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
              DR. Sami Anwar Khan
            </h1>

            <p className="text-xl text-teal-50 mb-2 ">
              MBBS, MS , MCh-CTVS (Gold Medalist)
            </p>

            {/* Subtext */}
            <p className="text-lg text-teal-50/80 leading-relaxed mb-10 max-w-2xl">
              A leading Cardiothoracic & Vascular Surgeon specializing in
              advanced cardiac, thoracic, and complex vascular surgeries,
              committed to clinical excellence and superior patient outcomes.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5">
              <Link
                to="/book-appointment?specialist=cardiology"
                className="px-7 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-all duration-300"
              >
                Book Appointment →
              </Link>

              <Link
                to="/contact"
                className="px-8 py-3 border border-teal-400 text-teal-200 hover:bg-teal-500/20 rounded-md transition-all duration-300"
              >
                Contact Clinic
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Slider */}
      <div className="bg-gray-50 backdrop-blur-md py-6 overflow-hidden border-b border-teal-800">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-12 text-teal-900 font-semibold uppercase tracking-widest text-sm"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...trustMetrics, ...trustMetrics].map((text, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="text-teal-400 text-lg">✦</span>
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Bento Grid */}
      <section className="relative py-14 bg-slate-50">
        <div className="absolute -top-15 -right-32 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-teal-600  uppercase tracking-wider text-sm"
            >
              Clinical Services
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Comprehensive Cardiothoracic <br />
              <span className="text-teal-600">Care Solutions</span>
            </motion.h2>

            {/* Elegant Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-teal-500 mx-auto mt-6 rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-4 shadow-sm border-teal-500 p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={20} className="text-teal-600" />
                    <h3 className="font-semibold text-slate-900 text-base">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section with Visual Accent */}
      <section className="relative py-14 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="uppercase tracking-wider text-sm text-teal-600">
              Professional Experience
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
              Surgical Excellence &{" "}
              <span className="text-teal-600">Academic Distinction</span>
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* LEFT – Timeline Experience */}
            <div className="lg:w-1/2 space-y-10 relative">
              {/* Vertical Line */}
              <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-teal-200 hidden sm:block" />

              {[
                {
                  t: "Gold Medalist Surgeon",
                  d: "Recognized for academic distinction and surgical excellence in Cardiothoracic & Vascular Surgery.",
                },
                {
                  t: "Modern Hospital Affiliations",
                  d: "Consultant at Mohak Super Speciality Hospital and SAIMS Hospital, delivering advanced cardiac and thoracic care.",
                },
                {
                  t: "Prime Clinical Location",
                  d: "Practice located at Palasia Square, ensuring accessibility and comfort for patients.",
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-14">
                  {/* Circle Marker */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold shadow-lg">
                    {i + 1}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.t}
                    </h4>
                    <p className="text-slate-600 mt-2 leading-relaxed text-sm">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT – Premium Image Card */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-md overflow-hidden shadow-sm  group">
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                  alt="Surgical Excellence"
                  className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-14 bg-teal-950 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Book Your Clinical Consultation
          </h2>

          <p className="text-teal-50 text-base mb-10 opacity-80">
            Comprehensive evaluation and advanced surgical consultation for
            cardiac, thoracic, and vascular conditions. Early diagnosis and
            timely intervention ensure better clinical outcomes and recovery.
          </p>

          <Link
            to="/book-appointment?specialist=cardiology"
            className="bg-teal-500 hover:bg-teal-600 text-white px-12 py-5 rounded-md transition-all inline-block text-lg"
          >
            Schedule Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
