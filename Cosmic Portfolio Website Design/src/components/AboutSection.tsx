import { motion } from 'motion/react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

export function AboutSection() {
  const cards = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time and team collaboration."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Bridging the gap between beautiful designs and functional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for lightning-fast load times and smooth interactions."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Putting users first with accessible, intuitive interfaces that delight and engage."
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Frontend Developer with 5+ years of experience crafting digital experiences 
            that push the boundaries of what's possible on the web. From concept to deployment, 
            I transform ideas into pixel-perfect, interactive realities.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                {/* Glowing background effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <card.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl mb-2 text-white group-hover:text-purple-100 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/20 transition-shadow duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest web technologies, 
              contributing to open source projects, or stargazing and drawing inspiration 
              from the cosmos for my next creative project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}