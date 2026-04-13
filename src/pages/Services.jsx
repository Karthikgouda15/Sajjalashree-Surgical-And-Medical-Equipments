import { motion } from 'framer-motion';
import { Truck, Settings, ClipboardCheck, LayoutGrid, Stethoscope, Briefcase, Activity, Heart, Zap, ShieldCheck, Clock, Layers } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Services = () => {
  const services = [
    {
      title: 'Equipment Supply',
      desc: 'Sourcing and delivering high-precision surgical instruments and hospital furniture from global manufacturers.',
      icon: Stethoscope,
      features: ['Precision Scaling', 'Sterile Packaging', 'On-time Delivery']
    },
    {
      title: 'Medical Equipment Rentals',
      desc: 'Flexible hiring solutions for essential devices including Blood Glucose Monitors (BGM) and EMS machines for home or clinic use.',
      icon: Clock,
      features: ['Blood Glucose Monitors', 'Muscle Stimulators', 'Health Care Kits']
    },
    {
      title: 'Specialized Repair Services',
      desc: 'Advanced technical support and component-level repair for complex heart-lung machines and life-critical diagnostic tools.',
      icon: Settings,
      features: ['Heart-Lung Repair', 'Sensor Calibration', 'On-site Support']
    },
    {
      title: 'Lymphedema Pump Hire',
      desc: 'Rent specialized sequential compression pumps for lymphedema management with professional setup and sizing.',
      icon: Zap,
      features: ['Adjustable Pressure', 'Multiple Sleeve Sizes', 'Home Delivery']
    },
    {
      title: 'Quality & Compliance',
      desc: 'Comprehensive quality assurance and safety testing to ensure all medical equipment meets ISO and regulatory standards.',
      icon: ShieldCheck,
      features: ['Safety Testing', 'Calibration Certs', 'Audit Support']
    },
    {
      title: 'Bulk Project Support',
      desc: 'Turnkey solutions for new hospital projects and clinic setups with competitive pricing and project management.',
      icon: Briefcase,
      features: ['Phased Delivery', 'Equipment Planning', 'Setup Assistance']
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-500/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 dark:text-white">Our Services</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">Beyond supplying equipment, we provide long-term reliability and professional support for the Bellary healthcare community.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="p-8 md:p-12 group">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-20 h-20 bg-medical-500/10 rounded-[2.5rem] flex items-center justify-center text-medical-500 shrink-0 group-hover:bg-medical-500 group-hover:text-white transition-all duration-500">
                  <service.icon className="w-10 h-10" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                   <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed italic border-l-4 border-medical-500/20 pl-4">
                    {service.desc}
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-medical-500" />
                        {f}
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 max-w-4xl mx-auto text-center px-4">
        <GlassCard className="p-12 border-none bg-slate-900 text-white" hover={false}>
          <div className="flex justify-center mb-6">
            <Truck className="w-12 h-12 text-medical-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Fast & Reliable Logistics</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            We understand that in healthcare, every second counts. Our localized fleet in Bellary ensures that essential medical supplies reach our clients in record time.
          </p>
          <button className="bg-medical-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-medical-600 transition-colors">
            Learn About Logistics
          </button>
        </GlassCard>
      </section>
    </div>
  );
};

export default Services;
