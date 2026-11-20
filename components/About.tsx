import Image from 'next/image';
import { Target, BookOpen, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4">About Kodachadri Academy</h2>
          <div className="w-24 h-1 bg-[var(--primary-yellow)] mx-auto rounded-full"></div>
        </div>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
          {/* Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--primary-blue)] shrink-0">
            <Image 
              src="/founder.png" 
              alt="Kiran Kelakere - Founder" 
              fill 
              className="object-cover object-top"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-blue)] mb-2">Kiran Kelakere</h3>
            <p className="text-[var(--primary-red)] font-semibold mb-6 uppercase tracking-wide text-sm">Founder & Chairman</p>
            
            <p className="text-gray-600 leading-relaxed mb-4 text-justify md:text-left">
              Kodachadri Academy is a premier coaching institute dedicated to shaping the future of aspiring students. We provide top-tier coaching for 10th Standard (State, CBSE, ICSE) and competitive exams like JEE, NEET, and CET. Our expert faculty ensures that every student receives the guidance they need to excel.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify md:text-left">
              Our mission is to empower students with the knowledge, skills, and confidence required to achieve their goals. Through modern teaching methodologies and personalized attention, we strive to create an environment where learning is engaging and results are extraordinary.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[var(--primary-blue)] text-white p-6 rounded-xl text-center shadow-lg">
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--primary-yellow)] mb-2">1000+</h4>
            <p className="text-sm md:text-base">Students Trained</p>
          </div>
          <div className="bg-[var(--primary-blue)] text-white p-6 rounded-xl text-center shadow-lg">
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--primary-yellow)] mb-2">10+</h4>
            <p className="text-sm md:text-base">Expert Faculty</p>
          </div>
          <div className="bg-[var(--primary-blue)] text-white p-6 rounded-xl text-center shadow-lg">
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--primary-yellow)] mb-2">100%</h4>
            <p className="text-sm md:text-base">Success Rate</p>
          </div>
          <div className="bg-[var(--primary-blue)] text-white p-6 rounded-xl text-center shadow-lg">
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--primary-yellow)] mb-2">2</h4>
            <p className="text-sm md:text-base">Branches (Shimoga & Sagar)</p>
          </div>
        </div>

        {/* Why Choose Us (Values) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[var(--primary-red)]/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[var(--primary-red)]" />
            </div>
            <h4 className="text-xl font-bold text-[var(--primary-blue)] mb-3">Our Mission</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide quality education and prepare students for future challenges with confidence and skill.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[var(--primary-yellow)]/20 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-[var(--primary-blue)] mb-3">Teaching Methodology</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Using simple and modern techniques to make even the most complex subjects easy to understand.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-[var(--primary-blue)] mb-3">Our Achievement</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our students consistently secure top ranks in competitive exams like JEE, NEET, and CET.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}