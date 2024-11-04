import Image from 'next/image';

const HeroOverlay = () => {
  return (  
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-700 opacity-95 rounded-xl p-8 shadow-2xl backdrop-blur-sm border border-white/10 dark:border-gray-600 motion-safe:animate-fade-in sm:w-[80vw] lg:w-auto sm:mt-16 lg:mt-0">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Container with animation */}
        <div className="w-48 h-48 md:w-64 md:h-64 relative group">
          <div className="absolute inset-0 rounded-lg group-hover:from-blue-400/30 transition-all duration-300"></div>
          <Image
            src="/Images/Avatar.png"
            width={256}
            height={256}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg transform motion-safe:group-hover:scale-[1.02] transition-all duration-300"
          />
        </div>

        {/* Text Content with staggered animation */}
        <div className="text-center md:text-left space-y-2">
          <div className="space-y-4 motion-safe:animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-gray-100 tracking-tight">
              Adam Creed
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-gray-300 font-light leading-relaxed">
              Software Developer & Engineer
            </p>
            <p className="text-blue-600/80 dark:text-gray-400 max-w-md text-sm md:text-base">
              Passionate about breaking things in the name of progress. Check out all my skills behind me. 
            </p>
          </div>
          
          {/* Social Links & CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start motion-safe:animate-fade-in-up motion-safe:animate-delay-150">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-600 hover:bg-white/20 dark:hover:bg-gray-500 text-blue-600 font-semibold dark:text-gray-100 rounded-lg transition-all duration-300 border border-blue-600/50 dark:border-gray-500 hover:border-blue-600 dark:hover:border-gray-400 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 dark:font-semibold focus:ring-white/20 dark:focus:ring-gray-400 focus:outline-none"
            >
              Contact Me
            </a>
            <div className="flex gap-6">
              <a 
                href="https://github.com/amcreed1999" 
                className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors group"
                aria-label="GitHub Profile"
              >
                <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform" fill="blue-600" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/adam-creed/" 
                className="text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform" fill="rgb(37, 99, 235)" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 dark:from-gray-700/10 dark:via-transparent dark:to-gray-800/5 rounded-xl -z-10"></div>
    </div>
  );
};

export default HeroOverlay;