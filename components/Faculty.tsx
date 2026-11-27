import Image from 'next/image';
import { MapPin, Atom, Calculator, BookOpen } from 'lucide-react';
import { facultyData } from '@/data/faculty';

// ಕಾರ್ಡ್ ಕಾಂಪೋನೆಂಟ್
const FacultyCard = ({ member }: { member: any }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full">
      
      {/* Image Section - Mobile ನಲ್ಲಿ ಎತ್ತರ ಹೆಚ್ಚಿಸಲಾಗಿದೆ (h-80) */}
      <div className="relative w-full h-80 md:h-72 bg-gray-200 overflow-hidden flex items-center justify-center">
        {/* Fallback: ಫೋಟೋ ಇಲ್ಲದಿದ್ದರೆ ಕಾಣಿಸುವ ಅಕ್ಷರ */}
        <span className="absolute text-gray-400 font-bold text-6xl z-0">
          {member.name.charAt(0)}
        </span>

        {/* ಫೋಟೋ ಇದ್ದರೆ ಅದು ಮೇಲೆ ಕಾಣಿಸುತ್ತದೆ */}
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent z-20"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 text-center relative z-30 -mt-8 flex-grow">
        <div className="bg-white rounded-xl shadow-md p-4 h-full flex flex-col justify-center">
          <h3 className="text-lg font-bold text-[var(--primary-blue)] mb-1">{member.name}</h3>
          
          <div className="flex items-center justify-center gap-1 text-gray-600 text-sm mb-2">
            <MapPin size={14} className="text-[var(--primary-red)]" />
            <span>{member.location}</span>
          </div>
          
          {member.subject && (
            <div className="mt-1">
              <span className="inline-block bg-[var(--primary-yellow)]/20 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-md">
                {member.subject}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4">Our Expert Faculty</h2>
          <div className="w-24 h-1 bg-[var(--primary-yellow)] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from the best educators across Karnataka, dedicated to shaping your future.
          </p>
        </div>

        {/* Science Department */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <Atom size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--primary-blue)]">Science Department</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.science.map((member, index) => (
              <FacultyCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Maths Department */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
              <Calculator size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--primary-blue)]">Mathematics Department</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.maths.map((member, index) => (
              <FacultyCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Social & English Department */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--primary-blue)]">Social & English Grammar</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.social.map((member, index) => (
              <FacultyCard key={index} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}