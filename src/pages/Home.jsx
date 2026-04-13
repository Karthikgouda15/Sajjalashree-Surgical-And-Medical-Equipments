import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, Activity, ShieldCheck, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Activity },
    { label: 'Trusted Clients', value: '500+', icon: Users },
    { label: 'Quality Products', value: '1k+', icon: ShieldCheck },
    { label: 'Prompt Delivery', value: '100%', icon: Truck },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 z-10" />
          <img 
            src="/images/hero_bg.png" 
            alt="Medical Facility" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase text-medical-600 bg-medical-500/10 rounded-full border border-medical-500/20">
                Premium Medical Supplier
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-slate-900 dark:text-white">
                Trusted Surgical & <span className="text-medical-500">Medical Equipment</span> in Bellary
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Empowering healthcare providers with state-of-the-art surgical instruments, hospital furniture, and diagnostic devices. Excellence in every heartbeat.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="bg-medical-500 hover:bg-medical-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-medical-500/20 transition-all flex items-center gap-2 group">
                  <ShoppingBag className="w-5 h-5" />
                  View Products
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="glass-effect dark:bg-white/5 px-8 py-4 rounded-2xl font-bold transition-all border border-slate-200 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="text-center group" hover={false}>
                <div className="w-12 h-12 medical-gradient rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-1 dark:text-white">{stat.value}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Comprehensive Healthcare Solutions</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              We provide a wide range of specialized equipment tailored for hospitals, clinics, and diagnostic centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Surgical Instruments</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">Precision-crafted tools for various surgical specialties including orthopedic, cardiac, and general surgery.</p>
              <Link to="/products?category=Surgical" className="text-medical-500 font-bold flex items-center gap-2 group/btn">
                Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </GlassCard>

            <GlassCard className="relative overflow-hidden group" delay={0.2}>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Hospital Furniture</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">Ergonomic hospital beds, examination tables, and ward equipment designed for patient comfort and efficiency.</p>
              <Link to="/products?category=Furniture" className="text-medical-500 font-bold flex items-center gap-2 group/btn">
                Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </GlassCard>

            <GlassCard className="relative overflow-hidden group" delay={0.4}>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Diagnostic Tools</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">Advanced patient monitors, ultrasound machines, and laboratory equipment for accurate clinical diagnostics.</p>
              <Link to="/products?category=Diagnostic" className="text-medical-500 font-bold flex items-center gap-2 group/btn">
                Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Specialized Services & Rentals */}
      <section className="py-24 bg-medical-50/50 dark:bg-medical-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <span className="text-medical-600 font-bold tracking-widest uppercase text-sm mb-4 block">Specialized Solutions</span>
              <h2 className="text-4xl font-bold dark:text-white">Equipment Hire & Bio-Medical Technical Support</h2>
            </div>
            <Link to="/services" className="text-medical-600 font-bold flex items-center gap-2 group">
              View All Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 medical-gradient opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-medical-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-medical-500/30">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">Medical Equipment Hire</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    Providing high-quality medical devices on a rental basis for short and long-term needs. Includes BGM, Muscle Stimulators, and Compression Pumps with full support.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['24/7 Support', 'Certified Equipment', 'Affordable Weekly/Monthly Rates'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-medical-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products?category=Medical Equipment Hire" className="bg-medical-500 text-white px-6 py-3 rounded-xl font-bold text-sm inline-block shadow-lg shadow-medical-500/20 hover:scale-105 transition-transform">
                    Explore Rentals
                  </Link>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-32 h-32 medical-gradient opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                  <ShieldCheck className="w-8 h-8 text-medical-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">Specialized Repair</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    Expert bio-medical technical support for complex hospital infrastructure, specializing in Heart-Lung machine maintenance and component repair.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['OEM Certified Spares', 'Emergency Field Support', 'Quality Assurance Testing'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <Activity className="w-4 h-4 text-medical-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="border-2 border-slate-200 dark:border-white/10 dark:text-white px-6 py-3 rounded-xl font-bold text-sm inline-block hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                    Request Technical Support
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

       {/* Animated Call to Action */}
       <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animated-gradient rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 z-0" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to upgrade your medical facility?</h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Get in touch with our experts today for bulk orders, maintenance support, or product inquiries.
              </p>
              <div className="flex flex-center justify-center gap-6">
                 <Link to="/contact" className="bg-white text-medical-600 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
                  Get a Quote
                </Link>
                <Link to="/services" className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
