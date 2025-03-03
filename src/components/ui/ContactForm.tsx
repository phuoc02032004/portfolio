import { motion } from "framer-motion";
import { useState } from "react";

interface ContactFormProps {
  darkMode: boolean;
}

export default function ContactForm({ darkMode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Show success message or handle errors
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Họ và tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
            } border focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors`}
            placeholder="Nhập họ và tên của bạn"
          />
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
            } border focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors`}
            placeholder="Nhập email của bạn"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Tiêu đề
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
              : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
          } border focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors`}
          placeholder="Nhập tiêu đề tin nhắn"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Nội dung
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`w-full px-4 py-3 rounded-lg ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
              : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500'
          } border focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors`}
          placeholder="Nhập nội dung tin nhắn của bạn"
        ></textarea>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className={`w-full py-4 px-6 rounded-lg font-medium text-white ${
          darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
        } transition-colors flex items-center justify-center gap-2`}
      >
        <span>Gửi tin nhắn</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>
    </motion.form>
  );
} 