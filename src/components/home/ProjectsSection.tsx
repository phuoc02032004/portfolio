import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/Cards/ProjectCard"; 
import SectionHeading from "@/components/ui/SectionHeading";


interface ProjectsSectionProps {
  darkMode: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

export default function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className={`py-28 md:py-32 px-4 sm:px-6 lg:px-8 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-850' 
          : 'bg-gradient-to-b from-blue-50 via-white to-blue-100' 
      } relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto"> 
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            subtitle="My Work"
            title="Featured Projects"
            description="Explore a selection of projects where I've applied my skills to create impactful web solutions." // Mô tả chi tiết hơn
            darkMode={darkMode}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {projects.map((project, ) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                project={project}
                darkMode={darkMode}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
          className="text-center mt-20" 
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: `0px 8px 25px -5px ${darkMode ? 'rgba(30, 144, 255, 0.5)' : 'rgba(59, 130, 246, 0.4)'}`, // Shadow màu cyan/blue đậm hơn
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-10 font-poppins py-4 rounded-full text-base md:text-lg font-semibold border-2 transition-all duration-300 ${
              darkMode
                ? 'border-cyan-600 text-cyan-400 hover:bg-cyan-900/40 hover:border-cyan-500 hover:text-cyan-300'
                : 'border-blue-600 text-blue-700 hover:bg-blue-100 hover:border-blue-700'
            }`}
          >
            Discover More Projects
          </motion.button>
        </motion.div>
      </div>

      <div className={`absolute inset-x-0 top-0 h-96 ${darkMode ? 'opacity-[0.04]' : 'opacity-[0.06]'}`}
        style={{
          backgroundImage: 'radial-gradient(circle at top left, #3b82f6 2px, transparent 2px)',
          backgroundSize: '80px 80px', 
          maskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)' 
        }}>
      </div>
       <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr ${darkMode ? 'from-indigo-900/10' : 'from-purple-100/50'} to-transparent opacity-40 blur-3xl -z-10`}></div>
    </section>
  );
}