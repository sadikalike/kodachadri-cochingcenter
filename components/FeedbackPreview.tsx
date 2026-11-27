import Link from 'next/link';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { allTestimonials } from '@/data/testimonials';

export default function FeedbackPreview() {
  // ಮುಖಪುಟದಲ್ಲಿ ಕೇವಲ ಮೊದಲ 3 ಫೀಡ್‌ಬ್ಯಾಕ್ ತೋರಿಸೋಣ
  const previewTestimonials = allTestimonials.slice(0, 3);

  return (
    <section id="feedback" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4">Student Success Stories</h2>
          <div className="w-24 h-1 bg-[var(--primary-yellow)] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have achieved their dreams with our guidance.
          </p>
        </div>

        {/* Testimonials Grid (Only 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {previewTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--primary-yellow)] relative flex flex-col h-full"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={40} className="text-[var(--primary-blue)]" />
              </div>

              <div className="flex gap-1 mb-4 text-[var(--primary-yellow)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 flex-1 relative z-10 text-sm leading-relaxed line-clamp-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary-blue)] text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-[var(--primary-red)] font-medium">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/feedback" 
            className="inline-flex items-center gap-2 bg-[var(--primary-blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            View All Success Stories
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}