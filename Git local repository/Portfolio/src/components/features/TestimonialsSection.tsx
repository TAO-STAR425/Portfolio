import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../constants/projects';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What industry leaders say about working with me
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
            {/* Quote marks */}
            <div className="text-6xl text-blue-400/20 font-serif absolute top-4 left-6">"</div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
                {testimonials[currentIndex].content}
              </blockquote>

              {/* Client info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30"
                />
                <div className="text-center">
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Additional testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 transition-all duration-300 hover:border-gray-600/50 ${
                index === currentIndex ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;