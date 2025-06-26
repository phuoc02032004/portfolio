import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/Cards/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface TestimonialsSectionProps {
  darkMode: boolean;
}

export default function TestimonialsSection({ darkMode }: TestimonialsSectionProps) {
  return (
    <section className={`py-24 px-4 md:px-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Testimonials"
          title="What Clients Say About Me"
          description="I always strive to deliver the best experience and satisfaction to my clients."
          darkMode={darkMode}
          subtitleClass={darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-600'}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 