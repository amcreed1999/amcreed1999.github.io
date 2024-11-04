"use client";
import { useState } from 'react';
import { useTheme } from "next-themes";

const ContactForm = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    // const data = {
    //   name: formData.get('name'),
    //   email: formData.get('email'),
    //   message: formData.get('message'),
    // };

    try {
      // Replace with your form handling logic
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setFormStatus('sent');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
            Let&apos;s Connect
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className={`space-y-6 ${
            isDark 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200'
          } p-8 rounded-lg shadow-lg`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                } mb-2`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors duration-200`}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                } mb-2`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors duration-200`}
              />
            </div>
          </div>

          <div>
            <label 
              htmlFor="message" 
              className={`block text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } mb-2`}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors duration-200`}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'sent'}
              className={`px-6 py-3 rounded-lg font-semibold text-white 
                ${formStatus === 'sending' 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : formStatus === 'sent'
                    ? 'bg-green-500'
                    : 'bg-blue-600 hover:bg-blue-700'
                } 
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {formStatus === 'sending' ? 'Sending...' : 
               formStatus === 'sent' ? 'Message Sent!' : 
               formStatus === 'error' ? 'Try Again' : 
               'Send Message'}
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a 
            href="https://github.com/amcreed1999" 
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/adam-creed/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
          >
            LinkedIn
          </a>
          <a 
            href="mailto:amcreed99@gmail.com"
            className={`text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 