import { motion } from "framer-motion";
import { skillCategories, skillLevels } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface SkillsSectionProps {
  darkMode: boolean;
}

export default function SkillsSection({ darkMode }: SkillsSectionProps) {
  return (
    <section id="skills">
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`py-24 px-4 md:px-8 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Kỹ năng"
          title="Chuyên môn của tôi"
          description="Tôi liên tục cập nhật và mở rộng bộ kỹ năng của mình để theo kịp các công nghệ mới nhất."
          darkMode={darkMode}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.id}
              category={category}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>
        
        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Mức độ thành thạo
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skillLevels.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
                </div>
                <div className={`w-full h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <motion.div 
                    className="h-full rounded-full bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={darkMode ? '#3B82F6' : '#93C5FD'} d="M45.3,-51.2C58.3,-42.5,68.5,-28.1,71.8,-12.1C75.1,3.9,71.5,21.5,62.4,35.2C53.3,48.9,38.7,58.5,22.7,64.2C6.7,69.9,-10.6,71.6,-25.4,66.5C-40.2,61.3,-52.5,49.2,-60.2,34.8C-67.9,20.4,-71,3.7,-67.5,-11.1C-64,-25.9,-53.9,-38.8,-41.4,-47.5C-28.9,-56.2,-14.4,-60.8,0.6,-61.5C15.6,-62.2,32.3,-59.9,45.3,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={darkMode ? '#8B5CF6' : '#C4B5FD'} d="M42.8,-65.2C54.9,-56.3,63.6,-43.3,67.4,-29.5C71.2,-15.7,70.1,-1.1,67.3,13.1C64.5,27.2,60,40.9,50.5,50.5C41,60.1,26.5,65.6,11.3,69.2C-3.9,72.8,-19.8,74.5,-33.6,69.5C-47.4,64.5,-59.1,52.8,-65.3,39C-71.5,25.2,-72.2,9.3,-70.6,-6.2C-69,-21.7,-65.1,-36.8,-55.9,-46.9C-46.7,-57,-32.2,-62.1,-18.1,-69.9C-4,-77.7,9.7,-88.2,23.2,-85.8C36.7,-83.4,50,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </motion.section>
    </section>
  );
} 