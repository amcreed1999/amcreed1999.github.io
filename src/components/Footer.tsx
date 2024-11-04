"use client";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-white to-gray-100'} border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Fun Message */}
          <div>
            <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
              🎉 Congratulations! You've made it to the bottom of my portfolio!
            </p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              Since you're still here, why not{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                hire me
              </span>
              ? 😉
            </p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              I promise I'm more productive than my commit history suggests 🤓
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <Link 
              href="mailto:amcreed99@gmail.com"
              className={`text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-300`}
            >
              📧 Email Me
            </Link>
            <Link 
              href="https://www.linkedin.com/in/adam-creed/"
              className={`text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-300`}
            >
              💼 LinkedIn
            </Link>
            <Link 
              href="https://github.com/amcreed1999"
              className={`text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors duration-300`}
            >
              👨‍💻 GitHub
            </Link>
          </div>

          {/* Random Fun Facts */}
          <div>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} italic`}>
              Random fact: This website was built with {' '}
              <span className="font-semibold">Next.js</span>, {' '}
              <span className="font-semibold">TypeScript</span>, {' '}
              <span className="font-semibold">Tailwind CSS</span>, and lots of ☕
            </p>
          </div>

          {/* Copyright */}
          <div className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'} mt-4`}>
            © {currentYear} Adam Creed • Built with 💙 and a questionable amount of caffeine
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 