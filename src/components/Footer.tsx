"use client";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 sm:py-12 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-white to-gray-100'} border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
          {/* Fun Message */}
          <div className="px-4">
            <p className={`text-base sm:text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
              🎉 Congratulations! You&apos;ve made it to the bottom of my portfolio!
            </p>
            <p className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              Since you&apos;re still here, why not{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                hire me
              </span>
              ? 😉
            </p>
          </div>

          {/* Quick Links with Icons */}
          <div className="flex gap-8 sm:gap-12">
            <a 
              href="mailto:amcreed99@gmail.com"
              className={`${isDark ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'} transition-colors group`}
              aria-label="Email Me"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.287l-12-8.713v12.713h24v-12.713l-12 8.713z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/amcreed1999" 
              className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors group"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:scale-110 transition-transform" fill="blue-600" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/adam-creed/" 
              className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:scale-110 transition-transform" fill="rgb(37, 99, 235)" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Random Fun Facts */}
          <div className="px-4">
            <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} italic`}>
              Random fact: This website was built with {' '}
              <span className="font-semibold">Next.js</span>, {' '}
              <span className="font-semibold">TypeScript</span>, {' '}
              <span className="font-semibold">Tailwind CSS</span>, and lots of ☕
            </p>
          </div>

          {/* Copyright */}
          <div className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'} mt-4`}>
            • © {currentYear} Adam Creed • 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 