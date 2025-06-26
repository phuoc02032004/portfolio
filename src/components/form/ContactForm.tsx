import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
// Optional: Import an icon library like react-icons
// import { FiSend } from 'react-icons/fi';

interface ContactFormProps {
  darkMode: boolean;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm({ darkMode }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    console.log("Submitting form data:", formData);
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    const success = Math.random() > 0.2; 
    if (success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        console.log("Form submitted successfully!");
    } else {
        setSubmitStatus("error");
        console.error("Form submission failed.");
    }

    setIsSubmitting(false);
  };

  const baseInputStyle = `w-full px-4 py-3 rounded-lg border text-base transition-colors duration-200 ease-in-out outline-none focus:ring-2 focus:ring-opacity-50`;
  const lightInputStyle = `bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500`;
  const darkInputStyle = `bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500`;

  const baseButtonStyle = `w-full py-3 px-6 rounded-lg font-semibold text-base text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 disabled:opacity-60`;
  const lightButtonStyle = `bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500 focus:ring-offset-gray-100`;
  const darkButtonStyle = `bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 focus:ring-cyan-500 focus:ring-offset-gray-900`;


  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleFormSubmit}
      className={`p-8 font-poppins md:p-10 rounded-2xl ${darkMode ? 'bg-gray-800/80 border border-gray-700/50 shadow-xl shadow-black/30' : 'bg-white/90 border border-gray-200 shadow-xl shadow-gray-400/20'} backdrop-blur-sm`}
      noValidate 
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={`${baseInputStyle} ${darkMode ? darkInputStyle : lightInputStyle}`}
            placeholder="Enter your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`${baseInputStyle} ${darkMode ? darkInputStyle : lightInputStyle}`}
            placeholder="Enter your email address"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className={`${baseInputStyle} ${darkMode ? darkInputStyle : lightInputStyle}`}
          placeholder="Subject of your message"
          autoComplete="off"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className={`block text-sm font-medium mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className={`${baseInputStyle} ${darkMode ? darkInputStyle : lightInputStyle} resize-none`}
          placeholder="Enter your message here..."
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={isSubmitting}
        className={`${baseButtonStyle} ${darkMode ? darkButtonStyle : lightButtonStyle}`}
      >
        {isSubmitting ? (
            <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
            </>
        ) : (
            <>
                <span>Send Message</span>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </>
        )}

      </motion.button>

       {submitStatus === "success" && (
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-sm font-medium text-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}
        >
            Message sent successfully! Thank you.
        </motion.p>
      )}
       {submitStatus === "error" && (
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
             className={`mt-4 text-sm font-medium text-center ${darkMode ? 'text-red-400' : 'text-red-600'}`}
         >
            Something went wrong. Please try again later.
         </motion.p>
      )}
    </motion.form>
  );
}