import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export default function ProjectCard({ project, darkMode }: ProjectCardProps) {
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
      <DialogContent className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg font-poppins">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl text-center font-bold font-poppins">{project.title}</DialogTitle>
          <DialogDescription className="text-center">{project.description}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-2 align-center justify-center ">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4 justify-center">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition-colors"
          >
            <FiExternalLink />
            <span>Demo</span>
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border border-gray-600 text-white rounded-full text-sm font-semibold bg-slate-400 hover:bg-blue-700 transition-colors"
          >
            <FiGithub />
            <span>Code</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}