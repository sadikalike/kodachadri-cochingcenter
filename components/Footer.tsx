import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

// 1. ವರ್ಷವನ್ನು ಲೆಕ್ಕ ಹಾಕಲು ಪ್ರತ್ಯೇಕ ಫಂಕ್ಷನ್ (ಇದು ಕ್ಯಾಶ್ ಆಗುತ್ತದೆ)
async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

// 2. ವರ್ಷವನ್ನು ತೋರಿಸುವ ಕಾಂಪೋನೆಂಟ್
async function Year() {
  const year = await getYear();
  return <>{year}</>;
}

// 3. ನಿಮ್ಮ ಮುಖ್ಯ Footer ಕಾಂಪೋನೆಂಟ್
export default function Footer() {
  return (
    <footer className="bg-[var(--primary-blue)] text-white pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Column 1: Brand Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3 tracking-wide">KODACHADRI ACADEMY</h2>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              A Dream Destination of Budding Youth. We provide top-tier coaching for 10th Standard, JEE, NEET, and CET.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://wa.me/917411406791" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-red)] transition-colors">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-red)] transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-red)] transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary-red)] transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[var(--primary-yellow)]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#courses" className="hover:text-white transition-colors">Our Courses</Link></li>
              <li><Link href="#feedback" className="hover:text-white transition-colors">Student Feedback</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-[var(--primary-yellow)]">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-[var(--primary-red)] shrink-0" />
                <span>Shimoga & Sagar, Karnataka</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-[var(--primary-red)] shrink-0" />
                <a href="tel:+917411406791" className="hover:text-white transition-colors">+91 7411406791</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-[var(--primary-red)] shrink-0" />
                <a href="mailto:info@kodachadriacademy.com" className="hover:text-white transition-colors">info@kodachadriacademy.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Professional Bottom Bar --- */}
        <div className="border-t border-blue-800/50 pt-6 text-center text-sm text-gray-400">
          
          {/* Line 1: Copyright */}
          <p className="mb-2">
            &copy; <Year /> Kodachadri Academy. All Rights Reserved.
          </p>

          {/* Line 2: Designed & Developed by Growzy Digital */}
          <div className="flex justify-center items-center gap-1 text-xs text-gray-500 mb-1">
            <span>Designed & Developed by</span>
            <a 
              href="https://www.instagram.com/growzy.digital?cnvx=MXNlMXhhcmhwbXZqbg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--primary-yellow)] font-semibold hover:text-yellow-300 transition-colors"
            >
              Growzy Digital
            </a>
          </div>

          {/* Line 3: WhatsApp Number (Second Line) */}
          <div className="flex justify-center items-center">
            <a 
              href="https://wa.me/917510436350" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 font-medium text-xs transition-colors"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={14} />
              +91 7510436350
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}