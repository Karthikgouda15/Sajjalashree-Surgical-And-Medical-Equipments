import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will contact you shortly.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 dark:text-white"
          >
            Get In Touch
          </motion.h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have questions about our equipment or need a customized quote? We're here to help you equip your healthcare facility with the best.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <GlassCard className="flex items-start gap-4 p-8">
                <div className="w-12 h-12 medical-gradient rounded-2xl flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 dark:text-white">Our Location</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    Radio Complex, near Old Bus Stand,<br />Bellary Road, Bellary - 583101, India
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-start gap-4 p-8" delay={0.1}>
                <div className="w-12 h-12 medical-gradient rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 dark:text-white">Call Us</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Sales: +91 9876 543 210<br />
                    Support: +91 8765 432 109
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-start gap-4 p-8" delay={0.2}>
                <div className="w-12 h-12 medical-gradient rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 dark:text-white">Working Hours</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <GlassCard className="lg:col-span-2 p-8 md:p-12" delay={0.3}>
              <h3 className="text-2xl font-bold mb-8 dark:text-white flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-medical-500" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold dark:text-slate-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-medical-500 transition-all dark:text-white"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold dark:text-slate-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-medical-500 transition-all dark:text-white"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold dark:text-slate-300">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-medical-500 transition-all dark:text-white"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold dark:text-slate-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Nature of inquiry"
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-medical-500 transition-all dark:text-white"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold dark:text-slate-300">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-medical-500 transition-all dark:text-white"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-medical-500 hover:bg-medical-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Send Inquiry
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full">
        {/* Replace with your actual Google Maps URL */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15443.20864708753!2d76.9116!3d15.1394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7137f7690623f%3A0x6739673967396739!2sBellary%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v16a!"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
