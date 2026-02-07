import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const adviceArticles = [
  {
    id: 1,
    category: 'ENT',
    title: "Don't Ignore Ringing, Humming, or Buzzing Sounds",
    excerpt: 'Tinnitus can significantly impact quality of life. Learn when to seek help and what treatments are available.',
    link: '#',
  },
  {
    id: 2,
    category: 'ENT',
    title: 'Understanding Sinusitis: Symptoms & Treatment',
    excerpt: 'Chronic sinus issues? Our ENT specialist explains common causes and effective treatment options.',
    link: '#',
  },
  {
    id: 3,
    category: 'Cardiology',
    title: 'Is Exercise Really Good for the Heart?',
    excerpt: 'Evidence-based advice on how physical activity benefits your cardiovascular health.',
    link: '#',
  },
  {
    id: 4,
    category: 'Cardiology',
    title: 'Heart-Healthy Habits: A Practical Guide',
    excerpt: 'Simple daily habits that can improve your heart health and reduce risk factors.',
    link: '#',
  },
  {
    id: 5,
    category: 'ENT',
    title: 'Hearing Matters: Tinnitus Awareness',
    excerpt: 'Early detection and treatment of hearing disorders can make a significant difference.',
    link: '#',
  },
  {
    id: 6,
    category: 'Cardiology',
    title: 'Managing Blood Pressure: Expert Tips',
    excerpt: 'Lifestyle changes and monitoring strategies for better blood pressure control.',
    link: '#',
  },
];

export default function TakeAdvice() {
  return (
    <div>
      <section className="py-16 bg-linear-to-br from-teal-600 to-teal-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Take Expert Advice</h1>
          <p className="text-teal-100 text-lg">Health tips and guidance from our specialists</p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Featured News & Health Advice</h2>
            <p className="text-teal-700 max-w-2xl mx-auto">Evidence-based advice from our ENT and Cardiology specialists to help you stay healthy.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adviceArticles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-teal-100 group"
              >
                <div className={`h-2 ${article.category === 'ENT' ? 'bg-teal-500' : 'bg-teal-600'}`} />
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    article.category === 'ENT' ? 'bg-teal-100 text-teal-700' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-teal-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-teal-700 text-sm mb-4">{article.excerpt}</p>
                  <Link
                    to={article.link}
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-teal-700 mb-6">Need personalized advice? Book a consultation with our specialists.</p>
            <Link
              to="/book-appointment"
              className="inline-block px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
