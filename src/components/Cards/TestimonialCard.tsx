import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    position: string;
    image: string;
    text: string;
  };
  index: number;
  darkMode: boolean;
}

export default function TestimonialCard({ testimonial, index, darkMode }: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg relative`}
    >
      <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H12.5C13.163 10 13.7989 10.2634 14.2678 10.7322C14.7366 11.2011 15 11.837 15 12.5V27.5C15 28.163 14.7366 28.7989 14.2678 29.2678C13.7989 29.7366 13.163 30 12.5 30H7.5M32.5 20H27.5C26.837 20 26.2011 19.7366 25.7322 19.2678C25.2634 18.7989 25 18.163 25 17.5V12.5C25 11.837 25.2634 11.2011 25.7322 10.7322C26.2011 10.2634 26.837 10 27.5 10H32.5C33.163 10 33.7989 10.2634 34.2678 10.7322C34.7366 11.2011 35 11.837 35 12.5V27.5C35 28.163 34.7366 28.7989 34.2678 29.2678C33.7989 29.7366 33.163 30 32.5 30H27.5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.text}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
          {/* Thay thế bằng ảnh thực tế */}
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
            Ảnh
          </div>
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
} 