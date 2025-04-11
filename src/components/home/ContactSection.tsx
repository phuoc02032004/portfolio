import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";
import ContactForm from "@/components/ui/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi"; 

interface ContactSectionProps {
  darkMode: boolean;
}

const infoItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } }
};

export default function ContactSection({ darkMode }: ContactSectionProps) {
  const iconBg = darkMode ? 'bg-gray-700/50' : 'bg-blue-100/70';
  const iconColor = darkMode ? 'text-cyan-400' : 'text-blue-600';
  const linkColor = darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-800';
  const socialBg = darkMode ? 'bg-gray-700/60 hover:bg-cyan-600/20' : 'bg-gray-100 hover:bg-blue-100';
  const socialIconColor = darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600';

  return (
    <section
      id="contact"
      className={`py-28 md:py-32 px-4 sm:px-6 lg:px-8 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100'
          : 'bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900'
      } relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            subtitle="Get In Touch"
            title="Let's Build Something Great"
            description="Have a project idea or looking to collaborate? Reach out and let's discuss how we can work together."
            darkMode={darkMode}
            subtitleClass={darkMode ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-700/30' : 'bg-blue-100 text-blue-700'}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            className="lg:col-span-1"
          >
            <motion.div
             variants={infoItemVariants} 
             className={`p-8 font-poppins md:p-10 rounded-2xl ${darkMode ? 'bg-gray-800/60 border border-gray-700/40' : 'bg-white border border-gray-200'} shadow-lg h-full flex flex-col`}
            >
              <h3 className="text-2xl font-poppins font-semibold mb-6">Contact Details</h3>
              <p className={`mb-8 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Feel free to connect through the channels below or use the form to send a direct message.
              </p>

              <motion.div
                className="space-y-6 mb-10"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }} 
              >
                <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
                    <FiMail className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Email</h4>
                    <a href={`mailto:${personalInfo.contact.email}`} className={`text-base break-all ${linkColor} transition-colors duration-200`}>
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
                    <FiPhone className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Phone</h4>
                    <a href={`tel:${personalInfo.contact.phone}`} className={`text-base ${linkColor} transition-colors duration-200`}>
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={infoItemVariants} className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
                    <FiMapPin className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Location</h4>
                    <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {personalInfo.contact.location}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="mt-auto pt-6 border-t border-gray-700/30 dark:border-gray-700/30">
                <h4 className="text-sm font-medium mb-4">Connect with me</h4>
                <motion.div
                    className="flex space-x-4"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }} 
                >
                  {[
                    { icon: FiGithub, url: personalInfo.social.github, label: "GitHub" },
                    { icon: FiLinkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
                    { icon: FiTwitter, url: personalInfo.social.twitter, label: "Twitter" },
                    { icon: FiFacebook, url: personalInfo.social.facebook, label: "Facebook" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={socialIconVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${socialBg} ${socialIconColor} transition-all duration-200`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-2">
            <ContactForm darkMode={darkMode} />
          </div>
        </div>
      </div>

      <div className="absolute top-[-5%] right-[-10%] -z-10 w-1/2 md:w-1/3 h-1/2 opacity-10 dark:opacity-[0.07]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={darkMode ? '#06b6d4' : '#60a5fa'} d="M39.9,-65.7C51.5,-58.4,60.8,-47.3,67.2,-34.6C73.6,-21.9,77.1,-7.7,75.8,6.1C74.5,19.9,68.5,33.3,59.3,44.3C50.1,55.3,37.8,63.9,24.2,69.2C10.7,74.5,-4.1,76.5,-17.9,73.2C-31.7,69.9,-44.5,61.3,-54.9,50C-65.3,38.7,-73.3,24.7,-76.9,9.2C-80.5,-6.3,-79.7,-23.3,-72.3,-36.9C-64.9,-50.5,-50.9,-60.7,-36.6,-66.5C-22.3,-72.3,-7.7,-73.7,3.9,-70.1C15.5,-66.5,28.3,-73,39.9,-65.7Z" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>

      <div className="absolute bottom-[-5%] left-[-10%] -z-10 w-1/2 md:w-1/3 h-1/2 opacity-10 dark:opacity-[0.07]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={darkMode ? '#2563eb' : '#93c5fd'} d="M45.7,-78.3C58.9,-70.6,69.2,-57.9,76.4,-43.5C83.5,-29.2,87.5,-13.1,85.7,2C83.9,17.1,76.3,31.2,67.1,44.2C57.9,57.2,47.1,69.1,33.6,76.3C20.1,83.5,3.9,86,-11.8,83.8C-27.5,81.6,-42.7,74.7,-54.8,64.1C-66.9,53.5,-75.9,39.2,-80.1,23.8C-84.3,8.4,-83.7,-8.1,-78.7,-22.7C-73.7,-37.3,-64.3,-50,-52.1,-58.1C-39.9,-66.2,-24.9,-69.7,-9.2,-74.5C6.5,-79.3,32.5,-85.9,45.7,-78.3Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>
    </section>
  );
}