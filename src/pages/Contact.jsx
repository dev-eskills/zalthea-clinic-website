import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Information</h1>
          <p className="text-teal-100 text-lg">We are here to help. Reach out to Zalthea Clinic via any of the channels below.</p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="py-24 -mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-teal-50 flex gap-6"
            >
              <div className="bg-teal-100 p-4 rounded-full h-fit text-teal-600">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">Clinic Address</h3>
                <p className="text-teal-800 leading-relaxed">
                  202, 203, 204, Second Floor,<br />
                  Apollo Arcade, 1/2 Old Palasia,<br />
                  Palasia Square, Indore (M.P.) - 452018
                </p>
              </div>
            </motion.div>

            {/* Opening Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-teal-50 flex gap-6"
            >
              <div className="bg-teal-100 p-4 rounded-full h-fit text-teal-600">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">Opening Hours</h3>
                <p className="text-teal-800 font-medium">Monday - Saturday</p>
                <p className="text-teal-600 text-lg">6:00 PM - 8:00 PM</p>
                <p className="text-gray-400 text-sm mt-2 font-medium">Closed on Sundays & Public Holidays</p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-teal-50 flex gap-6"
            >
              <div className="bg-teal-100 p-4 rounded-full h-fit text-teal-600">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">Phone Numbers</h3>
                <div className="space-y-2 flex flex-col">
                  <a href="tel:+918818817862" className="text-teal-700 hover:text-teal-900 transition-colors font-semibold text-lg">
                    +91 8818817862
                  </a>
                  <a href="tel:+919826197018" className="text-teal-700 hover:text-teal-900 transition-colors font-semibold text-lg">
                    +91 9826197018
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email/Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-teal-50 flex gap-6"
            >
              <div className="bg-teal-100 p-4 rounded-full h-fit text-teal-600">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">Email Support</h3>
                <p className="text-teal-800 mb-2">For inquiries or documentation:</p>
                <a href="mailto:info@zaltheaclinic.com" className="text-teal-700 hover:text-teal-900 transition-colors font-semibold">
                  zaltheaclinic@gmail.com
                </a>
              </div>
            </motion.div>

          </div>

          {/* Call to Action for Booking */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-6 italic">Looking to book a consultation?</p>
            <a
              href="/book-appointment"
              className="inline-block px-10 py-4 bg-teal-600 text-white rounded-full font-bold shadow-lg hover:bg-teal-700 transition-all hover:shadow-teal-200"
            >
              Go to Booking Form →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     disease: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <section className="py-24 min-h-[60vh] flex items-center justify-center">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="max-w-md mx-auto text-center px-4"
//         >
//           <div className="w-20 h-20 mx-auto mb-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-4xl">✓</div>
//           <h2 className="text-2xl font-bold text-teal-900 mb-4">Message Sent!</h2>
//           <p className="text-teal-700">We'll get back to you as soon as possible. For urgent matters, please call (0731) 555-0123.</p>
//         </motion.div>
//       </section>
//     );
//   }

//   return (
//     <div>
//       <section className="py-16 bg-linear-to-br from-teal-600 to-teal-800 text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl mx-auto px-4 text-center"
//         >
//           <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-teal-100 text-lg">Get in touch with Zalthea Clinic</p>
//         </motion.div>
//       </section>

//       <section className="py-24 -mt-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Contact Form with Disease field */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-teal-100"
//             >
//               <h2 className="text-2xl font-bold text-teal-900 mb-6">Send us a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-teal-900 mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Your name"
//                     className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-teal-900 mb-2">Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="example@yourmail.com"
//                     className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-teal-900 mb-2">Phone *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="123 456 789"
//                     className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-teal-900 mb-2">Your Disease / Condition *</label>
//                   <input
//                     type="text"
//                     name="disease"
//                     value={form.disease}
//                     onChange={handleChange}
//                     required
//                     placeholder="Describe your condition or concern (e.g. Tinnitus, Sinusitis, Heart-related)"
//                     className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-teal-900 mb-2">Message *</label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     placeholder="Tell us more about your concerns..."
//                     className="w-full px-4 py-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
//                   />
//                 </div>
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
//                 >
//                   Submit →
//                 </motion.button>
//               </form>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="space-y-8"
//             >
//               <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
//                 <h3 className="text-xl font-bold text-teal-900 mb-6">Clinic Address</h3>
//                 <p className="text-teal-800 leading-relaxed">
//                   202, 203, 204, Second Floor,<br />
//                   Apollo Arcade, 1/2 Old Palasia,<br />
//                   Palasia Square, Indore (M.P.) - 452018
//                 </p>
//               </div>
//               <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
//                 <h3 className="text-xl font-bold text-teal-900 mb-6">Opening Hours</h3>
//                 <p className="text-teal-800">Monday - Saturday: 6 PM - 8 PM</p>
//                 <p className="text-teal-600 text-sm mt-2">Closed on Sundays</p>
//               </div>
//               <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
//                 <h3 className="text-xl font-bold text-teal-900 mb-6">Phone</h3>
//                 <a href="tel:07315550123" className="text-teal-700 hover:text-teal-900 font-medium text-lg">+91 8818817862 <br />+91 9826197018</a>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
