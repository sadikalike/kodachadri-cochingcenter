"use client";

import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  // ಫಾರ್ಮ್ ಡೇಟಾವನ್ನು ನಿರ್ವಹಿಸಲು ಸ್ಟೇಟ್
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: ''
  });

  // ಇನ್‌ಪುಟ್ ಬದಲಾದಾಗ ಸ್ಟೇಟ್ ಅಪ್‌ಡೇಟ್ ಮಾಡುವ ಫಂಕ್ಷನ್
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ಫಾರ್ಮ್ ಸಬ್ಮಿಟ್ ಆದಾಗ WhatsApp ಗೆ ಕಳುಹಿಸುವ ಫಂಕ್ಷನ್
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ನಿಮ್ಮ WhatsApp ನಂಬರ್ (ದೇಶದ ಕೋಡ್ ಜೊತೆ)
    const phoneNumber = "917411406791"; 
    
    // WhatsApp ಮೆಸೇಜ್ ಫಾರ್ಮ್ಯಾಟ್
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Course:* ${formData.course}%0A*Message:* ${formData.message}`;
    
    // WhatsApp ಲಿಂಕ್
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    // ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ WhatsApp ಓಪನ್ ಮಾಡಿ
    window.open(whatsappUrl, '_blank');
    
    // ಫಾರ್ಮ್ ಖಾಲಿ ಮಾಡಿ
    setFormData({ name: '', phone: '', course: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[var(--primary-yellow)] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about admissions or courses? Reach out to us. We are here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Information Cards */}
          <div className="space-y-6">
            {/* Call / WhatsApp Card */}
            <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--primary-red)]/10 text-[var(--primary-red)] rounded-full flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-blue)] mb-1">Call / WhatsApp</h3>
                <p className="text-gray-600 mb-3">+91 7411406791</p>
                <a href="tel:+917411406791" className="inline-block text-sm font-semibold text-[var(--primary-red)] hover:underline">
                  Call Now &rarr;
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-blue)] mb-1">Our Branches</h3>
                <p className="text-gray-600">Shimoga</p>
                <p className="text-gray-600">Sagar</p>
              </div>
            </div>

            {/* Email Card (Optional) */}
            <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--primary-yellow)]/20 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-blue)] mb-1">Email Us</h3>
                <p className="text-gray-600">info@kodachadriacademy.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[var(--primary-blue)] p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)] transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)] transition-all"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">Interested Course</label>
                <select 
                  id="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)] transition-all appearance-none"
                >
                  <option value="" disabled className="text-gray-800">Select a course</option>
                  <option value="10th Standard (SSLC)" className="text-gray-800">10th Standard (SSLC)</option>
                  <option value="JEE Mains & Advanced" className="text-gray-800">JEE Mains & Advanced</option>
                  <option value="NEET" className="text-gray-800">NEET</option>
                  <option value="CET" className="text-gray-800">CET</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)] transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[var(--primary-yellow)] text-[var(--primary-blue)] font-bold py-3.5 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Send size={18} />
                Send via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}