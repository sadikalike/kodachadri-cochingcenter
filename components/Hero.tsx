import { PhoneCall, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative bg-[var(--primary-blue)] text-white overflow-hidden flex flex-col justify-center min-h-[85vh] md:min-h-[500px] py-8 md:py-16"
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/academy.jpg')] bg-cover bg-center"
        style={{ opacity: 0.2 }}
      ></div>
      
      {/* Attractive Gradient Overlay for Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] via-[#0f2b5c] to-[#051024]"></div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[var(--primary-yellow)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 w-full">
        
        {/* Top Badge */}
        <span className="inline-flex items-center gap-1.5 md:gap-2 bg-[var(--primary-yellow)] text-[var(--primary-blue)] font-bold px-4 py-1.5 rounded-full mb-5 md:mb-6 uppercase tracking-wider text-[10px] md:text-sm shadow-[0_0_15px_rgba(251,192,45,0.3)]">
          <GraduationCap size={16} className="md:w-4 md:h-4" />
          Welcome to Kodachadri Academy
        </span>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-5 leading-[1.15] md:leading-tight tracking-tight">
          A Dream Destination <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-yellow)] to-yellow-200">
            for Budding Youth
          </span>
        </h1>
        
        {/* Sub Heading (Kannada) */}
        <p className="text-[14px] sm:text-base md:text-lg lg:text-xl mb-8 md:mb-8 max-w-3xl text-gray-300 font-kannada leading-relaxed px-2 md:px-0">
          ರಾಜ್ಯಮಟ್ಟದ ನುರಿತ ಶಿಕ್ಷಣ ತಜ್ಞರಿಂದ 10ನೇ ತರಗತಿ (State | CBSE | ICSE) ಹಾಗೂ JEE, NEET, CET ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಿಗೆ ಸಮಗ್ರ ತರಬೇತಿ.
        </p>

        {/* Buttons - Stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0">
          {/* Contact Us Button */}
          <a href="#contact" className="bg-[var(--primary-red)] hover:bg-red-700 text-white px-6 py-3.5 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 shadow-lg shadow-red-900/40 flex items-center justify-center gap-2 text-sm md:text-base w-full md:w-auto">
            <PhoneCall size={18} className="md:w-5 md:h-5" />
            <span>Contact Us</span>
          </a>
          
          {/* Explore Courses Button */}
          <a href="#courses" className="bg-white text-[var(--primary-blue)] hover:bg-gray-100 px-6 py-3.5 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 shadow-lg shadow-white/10 flex items-center justify-center gap-2 text-sm md:text-base w-full md:w-auto">
            <CheckCircle2 size={18} className="md:w-5 md:h-5" />
            <span>Explore Courses</span>
          </a>
        </div>

      </div>
    </section>
  );
}