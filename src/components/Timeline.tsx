"use client";

import { useTheme } from "next-themes";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  tags?: string[];
}

const timelineData: TimelineItem[] = [
  {
    date: "July 2023 - October 2024",
    title: "Research Master's Student",
    description: "Designed, Developed and Tested a Virtual Reality environment that allows clinicians to visualise and interact with EEG data. Breaking the constraints of traditional 2D EEG analysis.",
    tags: ["Unity", "C#", "Python", "VR", "AR", "GitHub", "Latex"]
  },
  {
    date: "January 2023 - Present",
    title: "Trying to be an Entrepreneur",
    description: "Won best idea at a startup competition and am now trying to build a startup. It is not easy out here.",
    tags: [ "React", "Tailwind CSS", "GitHub", "Next.js", "TypeScript", "Python", "Heroku", "Google Cloud", "Vercel","Firebase", "Flutter", "Swift", "Figma"]
  },
  {
    date: "June 2024",
    title: "Final Year Project",
    description: "Built a network of IoT devices to monitor the Carbon Emissions of a Peatland, while also retrofitting gold standard research equipment to have wireless communication capabilities. Finally integrated it all to one dashboard for the principle investigator to view and interact with for future projects.",
    tags: ["C++", "LoRA", "Python", "Low Power", "Embedded Systems", "Arduino","Raspberry Pi", "AWS", "GitHub", "Solar Powered", "I2C", "MQTT", "LoRaWAN", "SPI", "Networking", "HTML", "CSS","JavaScript"]
  },
  {
    date: "Summer 2023",
    title: "R&D Engineer Intern",
    description: "Worked in Liebherr's R&D department to develop a new GPS system to improve the accuracy of their cranes, also on the development of a new condition monitoring system for their cranes.",
    tags: ["LoRaWAN", "GPS", "Python", "C++", "C","Figma", "Networking", ]
  },
  {
    date: "September 2019 - June 2024",
    title: "Electrical and Electronic Engineering Student",
    description: "Learnt a lot about circuits, signals and systems, and how to apply them in real world problems. Most importantly, I learnt how to solve problems.",
    tags: ["AI","Embedded Systems", "Digital Signal Processing","Control Systems", "MATLAB","Python", "C", "C++", "Simulink", "LtSpice", "C#", "Excel"]
  },
  {
    date: "June 2021 - October 2024",
    title: "Receptionist at Local Gym",
    description: "Life is not cheap, so I worked there to pay my way through university. The IT systems were not up to date, so I built some automations to make the lives of the staff easier.",
    tags: ["Python", "Excel", "Communication Skills"]
  },
  // Add more timeline items as needed
];

const Timeline = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-extrabold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          My Journey to Date
        </h2>
        
        <div className="relative">
          {/* Updated Vertical Line to match HeroOverlay theme */}
          <div 
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${
              isDark 
                ? 'bg-gradient-to-b from-blue-500/50 via-transparent to-blue-600/30' 
                : 'bg-gradient-to-b from-blue-500/70 via-blue-400/50 to-blue-600/40'
            }`}
            aria-hidden="true"
          />

          <div className="relative">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div 
                    className={`p-6 rounded-lg shadow-lg ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    } hover:shadow-xl transition-shadow duration-300 border border-white/10 dark:border-gray-600`}
                  >
                    <span className={`text-sm font-semibold ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {item.date}
                    </span>
                    <h3 className={`text-xl font-bold mt-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`mt-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                    {item.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-sm rounded-full ${
                              isDark 
                                ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                                : 'bg-gray-100 text-gray-600 border border-gray-200'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Updated Circle with matching theme */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                    isDark
                      ? 'bg-blue-500 border-2 border-gray-800'
                      : 'bg-blue-500 border-2 border-white'
                  } shadow-lg shadow-blue-500/50`}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 