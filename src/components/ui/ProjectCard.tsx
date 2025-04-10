import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    tags: string[];
    demoUrl: string;
    codeUrl: string;
  };
  index: number;
  darkMode: boolean;
}

export default function ProjectCard({ project, index, darkMode }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="h-56 bg-gray-200 relative overflow-hidden group">
        {/* Display actual project image */}
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        
        {/* Overlay khi hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-purple-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center p-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
            <p className="font-medium mb-4">Xem chi tiết dự án</p>
            <div className="flex gap-4 justify-center">
              <a href={project.demoUrl} className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">Demo</a>
              <a href={project.codeUrl} className="px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">Code</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className={`px-2 py-1 rounded-md text-xs font-medium ${
              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.demoUrl} className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
            <span>Xem demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <a href={project.codeUrl} className="text-blue-600 hover:underline text-sm font-medium flex items-center gap-1">
            <span>Mã nguồn</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
} 