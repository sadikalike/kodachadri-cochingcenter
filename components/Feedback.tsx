import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

export default function Feedback() {
  const testimonials = [
    {
      name: "Tushar U Sagar",
      achievement: "JEE Mains Qualified",
      text: "Kodachadri Academy helped me clear JEE Mains. The teachers are very supportive and the study material is top-notch. The environment here pushes you to do your best every day.",
      image: "/student1.png", // ನಿಮ್ಮ ಫೋಟೋ ಹೆಸರು
      initial: "T"
    },
    {
      name: "Kusuma N.S",
      achievement: "JEE Mains Qualified",
      text: "The SSLC coaching is excellent. The state-level expert faculty makes concepts very easy to understand. I highly recommend this academy for anyone aiming for top results.",
      image: "/student2.png", // ನಿಮ್ಮ ಫೋಟೋ ಹೆಸರು
      initial: "K"
    }
  ];

  return (
    <section id="feedback" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4">Student Success Stories</h2>
          <div className="w-24 h-1 bg-[var(--primary-yellow)] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have achieved their dreams with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--primary-yellow)] relative flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={60} className="text-[var(--primary-blue)]" />
              </div>

              {/* 5 Star Rating */}
              <div className="flex gap-1 mb-6 text-[var(--primary-yellow)]">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              {/* Feedback Text */}
              <p className="text-gray-700 italic mb-8 flex-1 relative z-10 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Profile Picture Area (Image or Initial) */}
                <div className="w-14 h-14 rounded-full overflow-hidden bg-[var(--primary-blue)] text-white flex items-center justify-center font-bold text-xl shrink-0 border-2 border-gray-200 shadow-sm relative">
                  {/* 
                    ನಿಮ್ಮ ಬಳಿ ವಿದ್ಯಾರ್ಥಿಗಳ ಫೋಟೋ ಇದ್ದರೆ, public ಫೋಲ್ಡರ್‌ಗೆ ಹಾಕಿ, ಕೆಳಗಿನ Image ಟ್ಯಾಗ್ ಬಳಸಿ 
                    ಮತ್ತು initial ಇರುವ div ಅನ್ನು ತೆಗೆದುಹಾಕಿ.
                  */}
                  {testimonial.initial}
                  
                  {/* <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill 
                    className="object-cover"
                  /> 
                  */}
                </div>

                <div>
                  <h4 className="font-bold text-[var(--primary-blue)] text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-[var(--primary-red)] font-medium">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}