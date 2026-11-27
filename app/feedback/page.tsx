import { Quote, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { allTestimonials } from '@/data/testimonials';

export default function FeedbackPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button & Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--primary-blue)] hover:text-[var(--primary-red)] font-medium mb-6 transition-colors">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--primary-blue)] mb-4">All Student Success Stories</h1>
            <div className="w-24 h-1 bg-[var(--primary-yellow)] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read the real experiences of our students and parents who trusted us.
            </p>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTestimonials.map((testimonial, index) => (
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

              <p className="text-gray-700 italic mb-6 flex-1 relative z-10 text-sm leading-relaxed">
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

      </div>
    </div>
  );
}