import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiSun, FiMoon, FiArrowUp, FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Import necessary icons

interface FooterProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const socialLinks = [
  { name: "GitHub", url: personalInfo.social.github, icon: FiGithub },
  { name: "LinkedIn", url: personalInfo.social.linkedin, icon: FiLinkedin },
  { name: "Twitter", url: personalInfo.social.twitter, icon: FiTwitter },
  { name: "Facebook", url: personalInfo.social.facebook, icon: FiFacebook },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  // { name: "Skills", href: "#skills" }, // Add or remove as needed
  // { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Footer({ darkMode, toggleDarkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Style variables for better readability and consistency
  const footerBg = darkMode ? 'bg-gray-950 border-t border-gray-800/50' : 'bg-white border-t border-gray-200/80';
  const textColor = darkMode ? 'text-gray-400' : 'text-gray-600';
  const headingColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const linkColor = darkMode ? 'hover:text-cyan-400' : 'hover:text-blue-600';
  const accentColor = darkMode ? 'text-cyan-400' : 'text-blue-600';
  const socialIconBg = darkMode ? 'bg-gray-800 hover:bg-cyan-600/20' : 'bg-gray-100 hover:bg-blue-100';
  const socialIconColor = darkMode ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-blue-600';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-poppins ${footerBg} ${textColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Info, Links, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-5 lg:col-span-4">
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-2xl font-bold mb-4 ${headingColor} font-righteous`} // Use brand font if applicable
            >
              {personalInfo.name}
            </motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 text-sm leading-relaxed"
            >
              Passionate Frontend Developer crafting modern, engaging, and user-centric web experiences. Let&apos;s build something amazing together.
            </motion.p>
            {/* Social Icons */}
            <motion.div
                className="flex space-x-3"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name} profile`}
                  variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center group transition-all duration-200 ${socialIconBg}`}
                >
                  <link.icon className={`w-5 h-5 transition-colors duration-200 ${socialIconColor}`} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className={`text-base font-semibold mb-4 ${headingColor}`}>Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`transition-colors duration-200 ${linkColor}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className={`text-base font-semibold mb-4 ${headingColor}`}>Contact Me</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <FiMail className={`w-4 h-4 mt-0.5 shrink-0 ${accentColor}`} aria-hidden="true" />
                <a href={`mailto:${personalInfo.contact.email}`} className={`break-words ${linkColor} transition-colors duration-200`}>
                  {personalInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiPhone className={`w-4 h-4 mt-0.5 shrink-0 ${accentColor}`} aria-hidden="true" />
                <a href={`tel:${personalInfo.contact.phone}`} className={`${linkColor} transition-colors duration-200`}>
                  {personalInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className={`w-4 h-4 mt-0.5 shrink-0 ${accentColor}`} aria-hidden="true" />
                <span>{personalInfo.contact.location}</span>
              </li>
            </ul>
          </div>
           {/* Column 4 (Optional): Could be newsletter signup, latest blog post, etc. */}
           {/* <div className="md:col-span-3 lg:col-span-3">
             <h4 className={`text-base font-semibold mb-4 ${headingColor}`}>Newsletter</h4>
             // Add newsletter form here
           </div> */}
        </div>

        {/* Bottom Section: Copyright, Theme Toggle, Policy Links */}
        <div className={`pt-8 mt-8 border-t ${darkMode ? 'border-gray-800/70' : 'border-gray-200'} flex flex-col sm:flex-row justify-between items-center gap-4`}>
          <p className="text-xs text-center sm:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </motion.button>

            {/* Policy Links */}
            <div className="flex space-x-4 text-xs">
              <a href="#" className={`${linkColor} transition-colors duration-200 hover:underline`}>
                Privacy Policy
              </a>
              <a href="#" className={`${linkColor} transition-colors duration-200 hover:underline`}>
                Terms of Use
              </a>
            </div>
            {/* Back to Top Button */}
             <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition-colors duration-200 hidden sm:block ${darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-cyan-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-600'}`}
              aria-label="Scroll back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Optional: Final attribution line */}
        {/* <div className="mt-8 text-center">
          <p className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
            Crafted with <span className="text-red-500 mx-1">❤</span> by {personalInfo.name}
          </p>
        </div> */}
      </div>
    </footer>
  );
}