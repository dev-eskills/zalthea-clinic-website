import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { doctors, reviews, slides, stats, treatments } from '../utils/homeData';
import TreatmentSection from '../components/homeContent/TreatmentSection';
import ActionCTA from '../components/homeContent/ActionCTA';
import Hero from '../components/homeContent/Hero';
import FacultySection from '../components/homeContent/FacultySection';
import ImpactMilestones from '../components/homeContent/ImpactMilestones';
import ReviewSection from '../components/homeContent/ReviewSection';
import ProfessionalSummary from '../components/homeContent/ProfessionalSummary';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-32 md:pt-40 bg-white selection:bg-teal-100">
      {/* Premium Hero Slider */}
      <Hero slides={slides} currentSlide={currentSlide} />

      {/* Professional Clinical Faculty Section */}
      <FacultySection doctors={doctors} />
      {/* Professional Summary */}
      <ProfessionalSummary />
      {/*Patient Success Cards */}
      <ImpactMilestones stats={stats} />

      {/* Modern Treatment Bento Grid */}
      <TreatmentSection />

      {/* {Review} */}
      <ReviewSection reviews={reviews} />

      {/* Reliable CTA Banner */}
      <ActionCTA />
    </div>
  );
}

