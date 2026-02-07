import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/ent', label: 'ENT Specialist' },
  { path: '/cardiology', label: 'Cardiovascular' },
  // { path: '/book-appointment', label: 'Book Appointment' },
  { path: '/take-advice', label: 'Take Advice' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
    >
      {/* Top bar with contact info */}
      <div className="bg-teal-900 text-teal-100 py-2 px-4 text-xs md:text-sm overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 min-w-0">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden sm:inline">📍 Apollo Arcade, Palasia Square, Indore</span>
            <span>📞 +91 9826197018 | +91 8818817862</span>
          </div>
          <span>🕐 Mon-Sat: 6 PM - 8 PM</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              src="/newLogo.png"
              alt="Zalthea Clinic"
              className="h-11 w-auto"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <span className="text-xl font-bold text-teal-900">Zalthea</span>
              <span className="text-xl font-bold text-teal-600"> Clinic</span>
              <p className="text-[10px] text-teal-600 italic -mt-0.5">Compassion • Strength • Excellence</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-teal-500 text-white'
                    : 'text-teal-800 hover:bg-teal-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              className="ml-2 px-5 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/30"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-teal-100 text-teal-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
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
                      className={`block px-4 py-3 rounded-lg ${
                        location.pathname === link.path ? 'bg-teal-500 text-white' : 'text-teal-800 hover:bg-teal-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
