import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";
import ContactForm from "@/components/ui/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

interface ContactSectionProps {
  darkMode: boolean;
}

export default function ContactSection({ darkMode }: ContactSectionProps) {
  return (
    <section id="contact" className={`py-24 px-4 md:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Contact"
          title="Start Your Project"
          description="Do you have a project in mind? Let's discuss the details and make it happen."
          darkMode={darkMode}
          subtitleClass={darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-600'}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg h-full`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Get in touch with me through the channels below or send a direct message via the form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href={`mailto:${personalInfo.contact.email}`} className="text-blue-600 hover:underline">
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Điện thoại</h4>
                    <a href={`tel:${personalInfo.contact.phone}`} className="text-blue-600 hover:underline">
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Địa chỉ</h4>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {personalInfo.contact.location}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href={personalInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <ContactForm darkMode={darkMode} />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={darkMode ? '#10B981' : '#D1FAE5'} d="M39.9,-65.7C51.5,-58.4,60.8,-47.3,67.2,-34.6C73.6,-21.9,77.1,-7.7,75.8,6.1C74.5,19.9,68.5,33.3,59.3,44.3C50.1,55.3,37.8,63.9,24.2,69.2C10.7,74.5,-4.1,76.5,-17.9,73.2C-31.7,69.9,-44.5,61.3,-54.9,50C-65.3,38.7,-73.3,24.7,-76.9,9.2C-80.5,-6.3,-79.7,-23.3,-72.3,-36.9C-64.9,-50.5,-50.9,-60.7,-36.6,-66.5C-22.3,-72.3,-7.7,-73.7,3.9,-70.1C15.5,-66.5,28.3,-73,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={darkMode ? '#3B82F6' : '#DBEAFE'} d="M45.7,-78.3C58.9,-70.6,69.2,-57.9,76.4,-43.5C83.5,-29.2,87.5,-13.1,85.7,2C83.9,17.1,76.3,31.2,67.1,44.2C57.9,57.2,47.1,69.1,33.6,76.3C20.1,83.5,3.9,86,-11.8,83.8C-27.5,81.6,-42.7,74.7,-54.8,64.1C-66.9,53.5,-75.9,39.2,-80.1,23.8C-84.3,8.4,-83.7,-8.1,-78.7,-22.7C-73.7,-37.3,-64.3,-50,-52.1,-58.1C-39.9,-66.2,-24.9,-69.7,-9.2,-74.5C6.5,-79.3,32.5,-85.9,45.7,-78.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
} 