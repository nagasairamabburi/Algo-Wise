import React, { useState } from 'react';
import { Phone, Mail, User, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form Data Submitted:', formData);
      toast.success('Your message has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-black/40 backdrop-blur-md border border-blue-900/30 rounded-xl p-6 md:p-10 shadow-lg"
        >
          <form onSubmit={handleContactFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-blue-400 mb-2">
                Your Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                  required
                />
                <User className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-blue-400" />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-blue-400 mb-2">
                Your Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                  required
                />
                <Mail className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-blue-400" />
              </div>
            </div>

            <div className="relative col-span-1 md:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-blue-400 mb-2">
                Contact Number
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
                  required
                />
                <Phone className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-blue-400" />
              </div>
            </div>

            <div className="relative col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-blue-400 mb-2">
                Your Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 resize-none"
                  required
                />
                <MessageCircle className="absolute bottom-4 right-4 w-5 h-5 text-blue-400" />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full col-span-1 md:col-span-2 py-4 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;