import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const adviceArticles = [
  // ================= ENT & HEAD / NECK =================
  {
    id: 1,
    category: "ENT",
    title: "Don't Ignore Ringing, Humming, or Buzzing Sounds",
    excerpt:
      "Persistent tinnitus may indicate underlying ear conditions. Early evaluation can prevent long-term hearing damage.",
    link: "#",
  },
  {
    id: 2,
    category: "ENT",
    title: "Understanding Sinusitis: When Is Surgery Needed?",
    excerpt:
      "Chronic sinus infections, nasal blockage, or facial pressure? Learn when medication is enough and when endoscopic sinus surgery is advised.",
    link: "#",
  },
  {
    id: 3,
    category: "ENT",
    title: "Vertigo & Balance Disorders Explained",
    excerpt:
      "Frequent dizziness or spinning sensations could be inner ear related. Discover causes and modern treatment options.",
    link: "#",
  },
  {
    id: 4,
    category: "ENT",
    title: "Snoring vs Sleep Apnea: Know the Difference",
    excerpt:
      "Loud snoring may be a warning sign of airway obstruction or sleep apnea. Early diagnosis improves long-term health.",
    link: "#",
  },
  {
    id: 5,
    category: "ENT",
    title: "Thyroid & Neck Swellings: When to Consult a Specialist",
    excerpt:
      "Neck lumps, thyroid enlargement, or voice changes should not be ignored. Timely evaluation ensures safe and effective treatment.",
    link: "#",
  },
  {
    id: 6,
    category: "ENT",
    title: "Pediatric ENT: Recurrent Ear Infections in Children",
    excerpt:
      "Frequent ear infections or enlarged adenoids in children can affect hearing and growth. Early care makes a difference.",
    link: "#",
  },

  // ================= CARDIAC SURGERY =================
  {
    id: 7,
    category: "Cardiology",
    title: "When Is Bypass Surgery (CABG) Required?",
    excerpt:
      "Severe coronary artery blockages may require bypass surgery. Understand symptoms, risks, and recovery expectations.",
    link: "#",
  },
  {
    id: 8,
    category: "Cardiology",
    title: "Valve Repair vs Valve Replacement: What’s Best?",
    excerpt:
      "Heart valve disorders can lead to breathlessness and fatigue. Learn how modern surgical techniques restore normal function.",
    link: "#",
  },
  {
    id: 9,
    category: "Cardiology",
    title: "Minimally Invasive Cardiac Surgery Benefits",
    excerpt:
      "Smaller incisions, faster recovery, and reduced pain — discover how advanced cardiac techniques improve outcomes.",
    link: "#",
  },
  {
    id: 10,
    category: "Cardiology",
    title: "Recognizing Early Signs of Heart Failure",
    excerpt:
      "Swelling, fatigue, and breathlessness may indicate heart failure. Early diagnosis improves treatment success.",
    link: "#",
  },

  // ================= THORACIC & VASCULAR =================
  {
    id: 11,
    category: "Cardiology",
    title: "Lung & Chest Tumors: Early Warning Signs",
    excerpt:
      "Persistent cough, chest pain, or breathlessness may signal thoracic conditions requiring specialist evaluation.",
    link: "#",
  },
  {
    id: 12,
    category: "Cardiology",
    title: "Peripheral Arterial Disease (PAD): Don’t Ignore Leg Pain",
    excerpt:
      "Leg pain while walking could be a sign of blocked arteries. Early vascular intervention prevents complications.",
    link: "#",
  },
  
];

export default function TakeAdvice() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const getCategoryStyles = (category) => {
    switch (category) {
      case "ENT":
        return {
          badge: "bg-teal-100 text-teal-700",
          accent: "bg-teal-500",
        };
      case "Cardiology":
        return {
          badge: "bg-teal-900 text-white",
          accent: "bg-teal-900",
        };
      default:
        return {
          badge: "bg-gray-100 text-gray-700",
          accent: "bg-gray-400",
        };
    }
  };

  const ArticleCard = ({ article }) => {
    const styles = getCategoryStyles(article.category);

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all duration-300"
      >
        {/* Accent Bar */}
        <div
          className={`absolute top-0 left-0 w-full h-1 ${styles.accent} rounded-t-xl`}
        />

        <span
          className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full ${styles.badge}`}
        >
          {article.category}
        </span>

        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
          {article.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed">
          {article.excerpt}
        </p>
      </motion.div>
    );
  };

  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 text-white overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-wide uppercase mb-6">
            Expert Medical Insights
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            Trusted Health Advice
            <br />
            <span className="text-teal-300">From Our Specialists</span>
          </h1>

          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto">
            Practical, evidence-based guidance from our ENT and Cardiology
            experts to help you make informed health decisions.
          </p>
        </motion.div>
      </section>

      {/* ARTICLES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Featured News & Health Advice
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Evidence-based advice from our specialists to help you stay
              healthy.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* ENT */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900">ENT</h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {adviceArticles
                  .filter((a) => a.category === "ENT")
                  .map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
              </motion.div>
            </div>

            {/* CARDIOLOGY */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900">
                Cardiology
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {adviceArticles
                  .filter((a) => a.category === "Cardiology")
                  .map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-slate-600 mb-6 text-lg">
              Need personalized advice? Book a consultation with our
              specialists.
            </p>

            <Link
              to="/book-appointment"
              className="inline-block px-10 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all shadow-md hover:shadow-xl"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
