import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { memo } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  darkMode: boolean;
}

const ProjectCard = ({ project, darkMode }: ProjectCardProps) => {
  const cardBg = darkMode
    ? "bg-gradient-to-br from-gray-800 to-gray-850"
    : "bg-gradient-to-br from-white to-gray-50";
  const cardBorder = darkMode
    ? "border border-gray-700/50"
    : "border border-gray-200/80";
  const cardShadow = darkMode
    ? "shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-cyan-900/50 translate-y-1"
    : "shadow-lg shadow-gray-300/40 hover:shadow-2xl hover:shadow-blue-400/50 translate-y-1";

  const tagStyle = darkMode
    ? "bg-cyan-900/70 text-cyan-200 hover:bg-cyan-800/80"
    : "bg-blue-100 text-blue-800 hover:bg-blue-200/90";

  const overlayBg = darkMode
    ? "bg-gradient-to-t from-black/80 via-black/60 to-transparent"
    : "bg-gradient-to-t from-blue-800/80 via-blue-600/60 to-transparent";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -8,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          className={`rounded-2xl font-poppins overflow-hidden ${cardBg} ${cardBorder} ${cardShadow} transition-all duration-300 group flex flex-col h-full`}
        >
          <div className="h-56 w-full relative overflow-hidden cursor-pointer">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 ${overlayBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center p-4`}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-center"
              >
                <div className="flex gap-4 justify-center">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition-colors"
                  >
                    <FiExternalLink />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2 border border-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <FiGithub />
                    <span>Code</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="p-6 md:p-7 flex flex-col flex-grow">
            <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {project.title}
            </h3>
            <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 line-clamp-3 min-h-[3.75rem] flex-grow`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${tagStyle} transition-colors duration-200`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl md:bg-transparent bg-white border-none dark:bg-gray-900 rounded-lg shadow-lg font-poppins">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl text-center font-bold font-poppins">{project.title}</DialogTitle>
        </DialogHeader>
         <div className="min-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Project Image */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.title || 'Project image'}
          width={800}
          height={450}
          className="w-full h-auto object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      <div className="p-6 md:p-8">
        {/* Project Description */}
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          {project.description || 'A detailed description of the project goes here, explaining its purpose, features, and the technologies used.'}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold
                             bg-sky-100 text-sky-700
                             dark:bg-sky-700 dark:text-sky-100
                             hover:bg-sky-200 dark:hover:bg-sky-600 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
            >
              <FiExternalLink size={18} />
              <span>View Demo</span>
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3
                         bg-gray-700 text-white
                         dark:bg-gray-600 dark:text-gray-100
                         rounded-lg text-sm font-semibold shadow-md
                         hover:bg-gray-800 dark:hover:bg-gray-500
                         focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
                         transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
            >
              <FiGithub size={18} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
      </DialogContent>
    </Dialog>
  );
};

export default memo(ProjectCard);