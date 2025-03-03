import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface ProjectsSectionProps {
  darkMode: boolean;
}

export default function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  return (
    <section className={`py-24 px-4 md:px-8 ${darkMode ? 'bg-gray-900' : 'bg-[#f8f8f6]'} relative`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Projects"
          title="Featured Projects"
          description="Here are some of my projects that showcase my skills and experience in web development."
          darkMode={darkMode}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-lg text-lg font-medium border-2 ${
              darkMode 
                ? 'border-blue-600 text-blue-500 hover:bg-blue-900/20' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            } transition-all`}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
      
      <div className={`absolute top-0 left-0 w-full h-64 ${darkMode ? 'opacity-5' : 'opacity-20'}`} 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}>
      </div>
    </section>
  );
} 