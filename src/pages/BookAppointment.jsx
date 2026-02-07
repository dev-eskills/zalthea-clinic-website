import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const specialists = [
  {
    value: 'ent',
    label: 'Dr. Sabiya Khan Suri - ENT and Head & Neck Surgeon',
    desc: 'MBBS, DLO (Gold Medalist)'
  },
  {
    value: 'ctvs',
    label: 'Dr. Sami Anwar Khan - Cardiothoracic & Vascular Surgeon',
    desc: 'MBBS, MS, MCh, CTVS (Gold Medalist)'
  },
];
export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const presetSpecialist = searchParams.get('specialist') || '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    specialist: presetSpecialist || 'ent',
    date: '',
    disease: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md mx-auto text-center px-4"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-4xl">✓</div>
          <h2 className="text-2xl font-bold text-teal-900 mb-4">Appointment Request Submitted!</h2>
          <p className="text-teal-700 mb-6">We'll contact you shortly to confirm your appointment. Please keep your phone handy.</p>
          <p className="text-teal-600 text-sm">Mon-Sat: 6 PM - 8 PM • Apollo Arcade, Palasia Square, Indore</p>
        </motion.div>
      </section>
    );
  }

  return (
    <div>
      <section className="py-16 bg-linear-to-br from-teal-600 to-teal-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Book Appointment</h1>
          <p className="text-teal-100 text-lg">Consult with our specialists today</p>
        </motion.div>
      </section>

      <section className="py-24 -mt-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-teal-100"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@yourmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="123 456 789"
                  className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-2">Select Specialist *</label>
                <select
                  name="specialist"
                  value={form.specialist}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                >
                  {specialists.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-2">Your Condition / Disease *</label>
                <input
                  type="text"
                  name="disease"
                  value={form.disease}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Tinnitus, Sinusitis, Chest pain, etc."
                  className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-900 mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any additional details you'd like to share..."
                  className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
                />
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
            >
              Submit Request →
            </motion.button>
            <p className="text-teal-600 text-sm text-center mt-4">Clinic Hours: Mon-Sat 6 PM - 8 PM</p>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
