import { motion } from 'motion/react';
import { ExternalLink, Github, Star, Zap, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: "Stellar Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization, advanced filtering, and interactive charts. Built for enterprise-level data management with real-time WebSocket connections.",
      image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHN8fDE3NTg2MTYwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "WebSocket", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Full-Stack Web App",
      status: "Live Production"
    },
    {
      title: "Cosmic E-Commerce",
      description: "Modern e-commerce platform with seamless checkout experience, inventory management, and AI-powered product recommendations. Features advanced payment processing and multi-vendor support.",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTg1NzIxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "E-Commerce Platform",
      status: "In Development"
    },
    {
      title: "Nebula Mobile App",
      description: "Cross-platform mobile application with intuitive UI/UX and offline functionality.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTg2NDQ0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Mobile Application",
      status: "Completed"
    },
    {
      title: "Quantum AI Assistant",
      description: "AI-powered virtual assistant with natural language processing and machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTg2NDQ0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "AI/ML Project",
      status: "Beta Testing"
    },
    {
      title: "Galaxy Design System",
      description: "Comprehensive design system with reusable components and design tokens for scalable applications.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTg2NDQ0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Storybook", "Figma", "React", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Design System",
      status: "Open Source"
    },
    {
      title: "Orbit Social Platform",
      description: "Social networking platform with real-time messaging, content sharing, and community features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx8fDE3NTg2NDQ0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Vue.js", "Socket.io", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Social Platform",
      status: "Concept"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Live Production':
        return <Zap className="w-4 h-4" />;
      case 'In Development':
        return <Rocket className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live Production':
        return 'from-green-400 to-emerald-500';
      case 'In Development':
        return 'from-orange-400 to-red-500';
      case 'Beta Testing':
        return 'from-yellow-400 to-orange-500';
      case 'Open Source':
        return 'from-blue-400 to-cyan-500';
      default:
        return 'from-purple-400 to-blue-500';
    }
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-8xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio of innovative web applications, mobile solutions, and cutting-edge projects 
            that push the boundaries of modern development.
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl">
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/90 to-blue-500/90 rounded-full backdrop-blur-sm">
                    <Star className="w-4 h-4 text-yellow-300" />
                    <span className="text-white font-medium text-sm">Featured</span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/50 rounded-full backdrop-blur-sm">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(project.status)}`}></div>
                    <span className="text-white text-sm">{project.status}</span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Parallax overlay effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent"
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating action buttons */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center gap-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-purple-600/90 rounded-2xl hover:bg-purple-500/90 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-purple-500/25"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-gray-800/90 rounded-2xl hover:bg-gray-700/90 transition-all duration-200 backdrop-blur-sm shadow-lg"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl text-white group-hover:text-purple-100 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getStatusColor(project.status)}/20 border border-current/30`}>
                        {getStatusIcon(project.status)}
                      </div>
                    </div>
                    
                    <p className="text-purple-200/80 text-sm mb-2 tracking-wide">
                      {project.category}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          className="px-3 py-1.5 text-sm bg-purple-500/20 text-purple-200 rounded-lg border border-purple-400/30 group-hover:border-purple-300/50 group-hover:bg-purple-500/30 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-purple-500/0 group-hover:shadow-purple-500/25 transition-shadow duration-500 pointer-events-none"></div>
                  
                  {/* Ambient glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none blur-xl"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Regular Projects - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {regularProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm">
                  {/* Status indicator */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 bg-black/50 rounded-full backdrop-blur-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getStatusColor(project.status)}`}></div>
                    <span className="text-white text-xs">{project.status}</span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Compact action buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        className="p-2.5 bg-purple-600/80 rounded-xl hover:bg-purple-500/80 transition-colors duration-200 backdrop-blur-sm"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2.5 bg-gray-800/80 rounded-xl hover:bg-gray-700/80 transition-colors duration-200 backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <p className="text-purple-300/80 text-xs mb-1 tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="text-lg mb-2 text-white group-hover:text-purple-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies - Limited */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-purple-500/15 text-purple-300 rounded-md border border-purple-500/25 group-hover:border-purple-400/40 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-purple-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/15 transition-shadow duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 border-2 border-purple-500/50 text-purple-300 rounded-2xl hover:bg-purple-500/10 hover:border-purple-400/70 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </span>
            
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0"
              whileHover={{ scale: 1.5, opacity: 1 }}
              initial={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}