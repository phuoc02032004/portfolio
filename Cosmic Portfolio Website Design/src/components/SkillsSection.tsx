import { motion } from 'motion/react';

export function SkillsSection() {
  const technologies = [
    { 
      name: "React", 
      icon: "⚛️",
      gradient: "from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/25"
    },
    { 
      name: "TypeScript", 
      icon: "🔷",
      gradient: "from-blue-600 to-blue-400",
      shadow: "shadow-blue-500/25"
    },
    { 
      name: "Next.js", 
      icon: "▲",
      gradient: "from-gray-300 to-gray-600",
      shadow: "shadow-gray-500/25"
    },
    { 
      name: "Tailwind CSS", 
      icon: "🎨",
      gradient: "from-teal-400 to-cyan-500",
      shadow: "shadow-teal-500/25"
    },
    { 
      name: "JavaScript", 
      icon: "⚡",
      gradient: "from-yellow-400 to-orange-500",
      shadow: "shadow-yellow-500/25"
    },
    { 
      name: "HTML/CSS", 
      icon: "🌐",
      gradient: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/25"
    },
    { 
      name: "Node.js", 
      icon: "🟢",
      gradient: "from-green-400 to-green-600",
      shadow: "shadow-green-500/25"
    },
    { 
      name: "GraphQL", 
      icon: "🔺",
      gradient: "from-pink-500 to-purple-600",
      shadow: "shadow-pink-500/25"
    },
    { 
      name: "Firebase", 
      icon: "🔥",
      gradient: "from-orange-400 to-red-600",
      shadow: "shadow-orange-500/25"
    },
    { 
      name: "Figma", 
      icon: "🎯",
      gradient: "from-purple-500 to-indigo-600",
      shadow: "shadow-purple-500/25"
    },
    { 
      name: "Git", 
      icon: "📚",
      gradient: "from-red-500 to-orange-600",
      shadow: "shadow-red-500/25"
    },
    { 
      name: "AWS", 
      icon: "☁️",
      gradient: "from-orange-500 to-yellow-500",
      shadow: "shadow-orange-500/25"
    },
    { 
      name: "Docker", 
      icon: "🐳",
      gradient: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/25"
    },
    { 
      name: "MongoDB", 
      icon: "🍃",
      gradient: "from-green-500 to-emerald-600",
      shadow: "shadow-green-500/25"
    },
    { 
      name: "Redux", 
      icon: "🔮",
      gradient: "from-purple-600 to-violet-700",
      shadow: "shadow-purple-500/25"
    },
    { 
      name: "Sass", 
      icon: "💅",
      gradient: "from-pink-500 to-rose-600",
      shadow: "shadow-pink-500/25"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0, rotateX: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative">
                {/* 3D Card Container */}
                <div className={`
                  relative p-6 rounded-2xl border border-purple-500/20 
                  bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-purple-900/5 
                  backdrop-blur-sm transition-all duration-300 
                  group-hover:border-purple-400/50 group-hover:bg-purple-500/10
                  transform-gpu group-hover:shadow-lg group-hover:${tech.shadow}
                  before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:${tech.gradient} before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-5
                `}>
                  
                  {/* Top highlight */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon with 3D effect */}
                  <div className="relative mb-4 flex justify-center">
                    <div className={`
                      relative w-16 h-16 rounded-xl 
                      bg-gradient-to-br ${tech.gradient} 
                      flex items-center justify-center
                      transform transition-all duration-300
                      group-hover:scale-110 group-hover:rotate-3
                      shadow-lg group-hover:shadow-xl group-hover:${tech.shadow}
                    `}>
                      {/* 3D depth effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-xl bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      <span className="text-2xl relative z-10 transform transition-transform duration-200 group-hover:scale-110">
                        {tech.icon}
                      </span>
                    </div>
                  </div>
                  
                  {/* Technology Name */}
                  <div className="text-center">
                    <h3 className="text-white group-hover:text-gray-100 transition-colors duration-300 font-medium">
                      {tech.name}
                    </h3>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none
                    bg-gradient-to-br ${tech.gradient} blur-xl scale-75
                  `} style={{ zIndex: -1 }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm">
            <p className="text-gray-300 max-w-2xl">
              Constantly evolving and learning new technologies to stay at the forefront of web development. 
              Always excited to explore emerging tools and frameworks that push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}