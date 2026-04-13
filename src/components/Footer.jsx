import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
    ],
    products: [
      { name: 'Surgical Instruments', path: '/products?category=Surgical' },
      { name: 'Hospital Equipment', path: '/products?category=Hospital' },
      { name: 'Diagnostic Devices', path: '/products?category=Diagnostic' },
    ]
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-medical-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">Sajjalashree</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-medical-500">
                  Surgical & Medical
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading supplier of high-quality surgical and hospital equipment in Bellary. Committed to excellence in healthcare solutions since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-medical-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-medical-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-medical-500 mt-0.5" />
                <span>Radio Complex, Bellary Road, Bellary - 583101, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-medical-500" />
                <a href="tel:+919876543210" className="hover:text-medical-500">+91 9876 543 210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-medical-500" />
                <a href="mailto:info@sajjalashree.com" className="hover:text-medical-500">info@sajjalashree.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center">
          <p>© {currentYear} Sajjalashree Surgical and Medical Equipments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
