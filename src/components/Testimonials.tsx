"use client";
import { useTheme } from "next-themes";
import Image from "next/image";// Import the LinkedIn logo

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  linkedin: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Declan Duggan",
    role: "Research Student",
    company: "University College Cork",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFRJEI7ZzA6eQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709026390712?e=1736380800&v=beta&t=tmkR2mXZICgUxa2ZkX2mPTGOuI7c66_rOAoi_s6mJHs",
    quote: "Hmm, how to describe Adam? Imagine if Mark Zuckerberg could weld, make garden furniture, build cranes, break a tackle, cook a mean chicken tika massala, sing like a bird, oh and also had a sense of humour, and you'd get close. But the reality is he's unique, so you'll have to hire him to find out what's he's really like ¯\_(ツ)_/¯",
    linkedin: "https://www.linkedin.com/in/declan-duggan-2916372b7/"
  },
  {
    name: "Leah Twomey",
    role: "Research Student",
    company: "University College Cork",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHaTPWayAN2vA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700249993204?e=1736380800&v=beta&t=LJbifuZu8qBKNAKMHUTIZW6DDkWfUpsghlXNzwRrRxE",
    quote: "Adam is an innovative and creative thinker, bringing a unique commitment to every project he undertakes. His focus on finding solutions, no matter the obstacles, is unmatched. He’s the only person I know who would willingly stand in a peatland in the rain for 12 hours with me, determined to debug and deploy a successful solution. His drive and passion for technical excellence in real-world settings make him an invaluable problem-solver.",
    linkedin: "https://www.linkedin.com/in/leah-twomey/"
  },
  {
    name: "John Murphy",
    role: "R&D Manager",
    company: "Liebherr Container Cranes",
    image: "/Images/Testimonials/john.jpg",
    quote: "During his internship, Adam quickly adapted to our development environment and made valuable contributions to our GPS tracking system project. His ability to work independently while maintaining clear communication was impressive.",
    linkedin: "https://www.linkedin.com/in/john-murphy-7b7b7b7b7b/"
  },
  {
    name: "Sarah O'Connor",
    role: "CEO",
    company: "Local Startup Hub",
    image: "/Images/Testimonials/sarah.jpg",
    quote: "Adam's pitch won our startup competition due to his clear vision and technical expertise. His ability to explain complex technical solutions in simple terms set him apart.",
    linkedin: "https://www.linkedin.com/in/sarah-oconnor-7b7b7b7b7b/"
  }
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-extrabold text-center mb-12 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          What People Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-4xl ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>
                  &quot;
                </div>
                
                <div className="flex-1">
                  <p className={`text-lg mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="ml-4">
                      <p className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                      </p>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2">
                        <img
                          src="/Images/LinkedIn.png"
                          alt="LinkedIn"
                          className="w-6 h-6 hover:opacity-75 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 