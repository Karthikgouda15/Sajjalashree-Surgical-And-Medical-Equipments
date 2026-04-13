import { motion } from 'framer-motion';
import { Shield, Target, Award, CheckCircle2, HeartPulse, Building2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About = () => {
  const values = [
    { title: 'Quality Assurance', desc: 'Every instrument undergoes rigorous testing to meet international healthcare standards.', icon: Shield },
    { title: 'Client Centric', desc: 'Focusing on the specific needs of doctors, hospitals, and medical practitioners.', icon: Target },
    { title: 'Innovation', desc: 'Bringing the latest biomedical technologies to the heart of Bellary.', icon: HeartPulse },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Intro */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white">
                Dedicated to <span className="text-medical-500">Healthcare Excellence</span> in Bellary since 2015
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                Sajjalashree Surgical and Medical Equipments has established itself as a premier provider of medical infrastructure and surgical tools in North Karnataka. Our journey began with a simple mission: to make high-quality healthcare equipment accessible to every clinic and hospital in our region.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We bridge the gap between world-class medical manufacturers and local healthcare heroes. By providing reliable, certified, and state-of-the-art equipment, we ensure that practitioners can focus on what matters most—saving lives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border-l-4 border-medical-500 bg-white dark:bg-slate-900 rounded-r-xl shadow-sm">
                  <h4 className="font-bold text-2xl dark:text-white">150+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Hospitals Served</p>
                </div>
                <div className="p-4 border-l-4 border-medical-500 bg-white dark:bg-slate-900 rounded-r-xl shadow-sm">
                  <h4 className="font-bold text-2xl dark:text-white">2000+</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Products Cataloged</p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 medical-gradient blur-[100px] opacity-20 -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" alt="Hospital" className="rounded-3xl shadow-2xl" />
                  <img src="https://images.unsplash.com/photo-1576091160550-21735994b1a3?auto=format&fit=crop&q=80&w=400" alt="Med Tools" className="rounded-3xl shadow-2xl" />
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400" alt="Team" className="rounded-3xl shadow-2xl" />
                  <div className="bg-medical-500 rounded-3xl p-8 text-white aspect-square flex flex-col justify-center">
                    <Award className="w-12 h-12 mb-4" />
                    <h4 className="font-bold text-xl">Certified Quality</h4>
                    <p className="text-sm text-white/80 mt-2">ISO 9001:2015 Registered Supplier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">The Core of Our Service</h2>
            <p className="text-slate-500">Built on trust, speed, and uncompromising quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-10">
                <div className="w-14 h-14 bg-medical-500/10 rounded-2xl flex items-center justify-center text-medical-500 mb-6">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{v.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <GlassCard className="p-12 relative overflow-hidden" hover={false}>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <CheckCircle2 className="w-40 h-40" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-medical-600">Our Mission</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
              "To empower the healthcare ecosystem of Bellary by providing high-precision medical tools that save lives and improve patient recovery."
            </p>
          </GlassCard>
          <GlassCard className="p-12 relative overflow-hidden" hover={false}>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Building2 className="w-40 h-40" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-medical-600">Our Vision</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
              "To become the most trusted medical infrastructure partner across Karnataka, known for technological integrity and exceptional support."
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default About;
