import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/ent", label: "ENT Specialist" },
  { path: "/cardiology", label: "CTVS" },
  { path: "/take-advice", label: "Take Advice" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 shadow-md"
    >
      {/* Top Info Bar */}
      <div className="bg-teal-700 text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              📍 Apollo Arcade, Palasia Square, Indore
            </span>
            <span>📞 +91 7869960631</span>
          </div>
          <span>🕐 Mon-Sat: 6 PM - 8 PM</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-5 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              src="/newLogo.png"
              alt="Zalthea Clinic"
              className="h-12 w-auto"
              whileHover={{ scale: 1.06, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <div>
              <span className="text-2xl font-bold text-teal-800">Zalthea</span>
              <span className="text-2xl font-bold text-teal-600"> Clinic</span>
              <p className="text-[10px] text-teal-600 italic -mt-0.5">
                Compassion • Strength • Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text- text-teal-800 font-medium group"
                >
                  {link.label}

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-teal-700 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              to="/book-appointment"
              className="ml-2 px-6 py-2.5 bg-teal-700 text-white rounded-lg  hover:bg-teal-800 transition-all shadow-lg hover:shadow-xl hover:scale-[1.04]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-teal-100 text-teal-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-4 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-5 py-3 ${
                      location.pathname === link.path
                        ? "bg-teal-700 text-white"
                        : "text-teal-800 hover:bg-teal-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center m-4 px-4 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
              >
                Book Appointment
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
