import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      sessionStorage.setItem('pendingNewsletter', email);

      navigate('/auth');
      toast.success('Please sign in to complete your newsletter subscription');

      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-blue-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 lg:col-span-2"
        >
          <h3 className="text-xl font-bold text-blue-400">
            Contact Us
          </h3>
          <p className="text-sm text-gray-300">
            We're here to help with any questions or feedback you might have about our products and services.
          </p>
          
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="py-3 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-blue-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#products" className="hover:text-blue-400 transition">Products</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#innovation" className="hover:text-blue-400 transition">Innovation</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-blue-400">Our Products</h3>
          <ul className="space-y-2">
            <li>PersonaMatch</li>
            <li>MetaSEO</li>
            <li>Mentaura AI</li>
            <li className="text-blue-400 italic">Revolutionary products coming soon...</li>
            <li className="text-sm text-gray-400 mt-2">
              We're developing cutting-edge solutions that harness AI and the latest groundbreaking technologies to solve a wide range of complex problems.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4 lg:col-span-4"
        >
          <h3 className="text-xl font-bold text-blue-400">Newsletter</h3>
          <p className="text-sm">Stay updated with our latest innovations and product launches.</p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md space-y-3">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Mail className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-blue-400" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="border-t border-blue-900/30 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm text-gray-400"
          >
            © {currentYear} AlgoWise Technologies Private Limited. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;