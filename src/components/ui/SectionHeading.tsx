  import { motion } from "framer-motion";

  interface SectionHeadingProps {
    subtitle: string;
    title: string;
    description?: string;
    subtitleClass?: string;
    darkMode?: boolean;
  }

  export default function SectionHeading({ 
    subtitle, 
    title, 
    description, 
    subtitleClass, 
    darkMode = false 
  }: SectionHeadingProps) {
    return (
      <div className="flex font-poppins flex-col items-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`px-4 py-1 rounded-full text-sm font-medium mb-4 ${
            subtitleClass || (darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-600')
          }`}
        >
          {subtitle}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-center max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    );
  } 