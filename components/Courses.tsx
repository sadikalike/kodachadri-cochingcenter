import { BookOpen, GraduationCap, Stethoscope, BrainCircuit, CheckCircle2 } from 'lucide-react';

export default function Courses() {
  const courses = [
    { 
      title: "10th Standard (SSLC)", 
      desc: "Comprehensive coaching for State, CBSE, and ICSE boards with expert guidance and study materials.", 
      badge: "Most Popular",
      icon: BookOpen,
      features: ["State/CBSE/ICSE Syllabus", "Regular Tests", "Doubt Clearing"],
      color: "bg-blue-50 text-blue-600"
    },
    { 
      title: "JEE Mains & Advanced", 
      desc: "Specialized training for Engineering entrance exams with focus on problem-solving and concepts.", 
      badge: "Results Proven",
      icon: GraduationCap,
      features: ["Concept Clarity", "Mock Tests", "Previous Year Papers"],
      color: "bg-orange-50 text-orange-600"
    },
    { 
      title: "NEET", 
      desc: "Complete preparation for Medical entrance exams with in-depth subject knowledge and practice.", 
      badge: "Expert Faculty",
      icon: Stethoscope,
      features: ["NCERT Focus", "Weekly Quizzes", "Expert Mentorship"],
      color: "bg-green-50 text-green-600"
    },
    { 
      title: "CET", 
      desc: "Expert guidance for Karnataka CET with strategic learning and time management skills.", 
      badge: "State Level",
      icon: BrainCircuit,
      features: ["Karnataka Syllabus", "Speed Tests", "Rank Booster"],
      color: "bg-purple-50 text-purple-600"
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4">Our Courses</h2>
          <div className="w-24 h-1 bg-[var(--primary-yellow)] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of expertly designed courses to achieve your academic goals.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative flex flex-col overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-0 right-0 bg-[var(--primary-yellow)] text-[var(--primary-blue)] text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                  {course.badge}
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${course.color}`}>
                    <IconComponent size={28} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{course.desc}</p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-green-500 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a 
                    href="#contact" 
                    className="block text-center w-full bg-[var(--primary-blue)] text-white py-2.5 rounded-lg font-medium hover:bg-[var(--primary-red)] transition-colors duration-300 mt-auto"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}