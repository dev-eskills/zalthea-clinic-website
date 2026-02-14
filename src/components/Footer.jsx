import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer
      style={{
        backgroundImage: `url("/slider3.jpeg")`, // put your image inside public folder
      }}
      className="w-full text-white bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-black/70 to-teal-950/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 min-w-0"
          >
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Zalthea Clinic"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">Zalthea Clinic</h3>
                <p className="text-xs italic text-teal-300">
                  Compassion • Strength • Excellence
                </p>
              </div>
            </div>
            <p className="text-white text-sm">
              Expert ENT and Cardiology care in Indore. Your health is our
              priority.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="min-w-0"
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "ENT Specialist",
                "CTVS",
                "Book Appointment",
                "Take Advice",
                "Contact",
              ].map((label, i) => (
                <li key={i}>
                  <Link
                    to={
                      label === "Home"
                        ? "/"
                        : label === "ENT Specialist"
                          ? "/ent"
                          : label === "CTVS"
                            ? "/cardiology"
                            : label === "Book Appointment"
                              ? "/book-appointment"
                              : label === "Take Advice"
                                ? "/take-advice"
                                : "/contact"
                    }
                    className="text-white hover:text-teal-100 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="min-w-0"
          >
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <address className="mb-4 space-y-3 text-white">
              <p>
                202, 203, 204, Second Floor
                <br />
                Apollo Arcade, 1/2 Old Palasia
                <br />
                Palasia Square, Indore (M.P.) - 452018
              </p>
            </address>

            <a href="tel:+917869960631">📞 +91 7869960631</a>
            <p className="mt-3">🕐 Mon-Sat: 6 PM - 8 PM</p>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="min-w-0"
          >
            <h4 className="font-semibold text-white  mb-4">Health Tips</h4>
            <p className="text-white text-sm mb-4">
              Connect with us for wellness tips and clinic updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-full">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 px-4 py-2 rounded-lg bg-teal-900/50 border border-teal-700 text-white placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="shrink-0 px-4 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors"
              >
                Stay in touch
              </button>
            </form>
            <div className=" mt-5 rounded-lg overflow-hidden border border-teal-800">
              <iframe
                src="https://www.google.com/maps?q=Apollo+Arcade+Old+Palasia+Indore&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zalthea Clinic Location"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-teal-800 text-center text-white text-sm"
        >
          © {currentYear} Zalthea Clinic made by{" "}
          <Link
            to={"https://www.aimfortech.com/"}
            className="hover:border-b-2 border-b-teal-100 transition-colors hover:text-teal-100"
          >
            {" "}
            Aimfortech Solutions.
          </Link>{" "}
          All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
