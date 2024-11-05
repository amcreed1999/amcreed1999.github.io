"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SkillLogo {
  name: string;
  imageUrl: string;
  learnedAt?: string; // Where the skill was learned
  description?: string; // Optional description of your experience
}

const skillLogos: SkillLogo[] = [
  { 
    name: "Python", 
    imageUrl: "/Images/Python_Logo.png",
    learnedAt: "University",
    description: "Used extensively in AI, machine learning projects and data analysis."
  },
  { 
    name: "Javascript", 
    imageUrl: "/Images/JavaScript.png",
    learnedAt: "Self-taught",
    description: "Developed dynamic web applications and interactive UI components for my final year project."
  },
  { 
    name: "React", 
    imageUrl: "/Images/React_Logo.png",
    learnedAt: "Self-taught",
    description: "Built a few websites, including this one."
  },
  { 
    name: "Typescript", 
    imageUrl: "/Images/Typescript_Logo.png",
    learnedAt: "Self-taught",
    description: "Used in some of my websites to add some extra functionality."
  },
  { 
    name: "NextJS", 
    imageUrl: "/Images/NextJS_Logo.png",
    learnedAt: "Self-taught",
    description: "Built server-side rendered React applications. Used to raise money for my local club."
  },
  { 
    name: "Tailwind", 
    imageUrl: "/Images/Tailwind_CSS_Logo.png",
    learnedAt: "Self-taught",
    description: "Learnt when trying to make my own website."
  },
  { 
    name: "AWS", 
    imageUrl: "/Images/AWS_Logo.png",
    learnedAt: "Self-taught",
    description: "Final Year Project, hosted a website on AWS that was the dashboard for the Data we gathered. Also used AWS Lambda to process the data, AWS IOT to collect it and AWS S3 to store it."
  },
  { 
    name: "Git", 
    imageUrl: "/Images/Git_Logo.png",
    learnedAt: "Self-taught",
    description: "Managed source code versions and branches."
  },
  { 
    name: "GitHub", 
    imageUrl: "/Images/GitHub_Logo.png",
    learnedAt: "Self-taught",
    description: "Learn when doing my Masters, need a quick way to change between multiple variations of the same thing."
  },
  { 
    name: "HTML", 
    imageUrl: "/Images/HTML_Logo.png",
    learnedAt: "Self-taught",
    description: "Learnt with JS and CSS to create a Dashboard for my Final Year Project."
  },
  { 
    name: "CSS", 
    imageUrl: "/Images/CSS_Logo.png",
    learnedAt: "Self-taught",
    description: "Styled the dashboard for my Final Year Project. Moved away from it when I started learning Tailwind."
  },
  { 
    name: "Firebase", 
    imageUrl: "/Images/Firebase_Logo.png",
    learnedAt: "Self-taught",
    description: "The backbone of my first attempt at a Start Up."
  },
  { 
    name: "Linux", 
    imageUrl: "/Images/Linux_Logo.png",
    learnedAt: "University",
    description: "A few modules, used a lot in Raspberry Pi projects, running local servers and databases with some Large Language Models."
  },
  { 
    name: "Swift", 
    imageUrl: "/Images/Swift.png",
    learnedAt: "Self-taught",
    description: "Developed iOS applications with Swift."
  },
  { 
    name: "SwiftUI", 
    imageUrl: "/Images/SwiftUI.png",
    learnedAt: "Self-taught",
    description: "Built modern iOS interfaces using SwiftUI. Won best Idea at a StartUp Competition."
  },
  { 
    name: "Flutter", 
    imageUrl: "/Images/Flutter.png",
    learnedAt: "Self-taught",
    description: "Developed my Start Up idea further, still on going."
  },
  { 
    name: "C#", 
    imageUrl: "/Images/C_Sharp_Logo.png",
    learnedAt: "University",
    description: "First coding language I learned. Used in Unity for my Masters Project."
  },
  { 
    name: "C++", 
    imageUrl: "/Images/C++_Logo.png",
    learnedAt: "University",
    description: "Used in Embedded Systems modules. Tutored for 2 years."
  },
  { 
    name: "C", 
    imageUrl: "/Images/C_Logo.png",
    learnedAt: "University",
    description: "Fundamental language for understanding low-level programming."
  },
  { 
    name: "Google Cloud", 
    imageUrl: "/Images/Google_Cloud_Logo.png",
    learnedAt: "Self-taught",
    description: "Mostly when building a Smart Mirror. Made it work with Google Assistant, Photos, Maps, YouTube and more."
  },
  { 
    name: "Vercel", 
    imageUrl: "/Images/Vercel_Logo.png",
    learnedAt: "Self-taught",
    description: "My go to for deploying websites, easy to use and has a lot of features. Have three websites running on it."
  },
  { 
    name: "Heroku", 
    imageUrl: "/Images/Heroku_Logo.png",
    learnedAt: "Self-taught",
    description: "Deployed and managed applications on Heroku platform. Have my second Startup Idea running on it."
  },
  { 
    name: "Stripe", 
    imageUrl: "/Images/Stripe_Logo.png",
    learnedAt: "Self-taught",
    description: "Successfully integrated Stripe into different projects to process payments. Have taken over €100K in payments."
  },
  { 
    name: "Figma", 
    imageUrl: "/Images/Figma_Logo.png",
    learnedAt: "Self-taught",
    description: "Designed UI/UX prototypes and wireframes for Masters, some websites and also some graphics."
  },
  { 
    name: "Sketch", 
    imageUrl: "/Images/Sketch_Logo.png",
    learnedAt: "Self-taught",
    description: "Created vector graphics and design layouts for Masters, some websites and also my local club."
  },
  { 
    name: "Unity", 
    imageUrl: "/Images/Unity_Logo.png",
    learnedAt: "Self-taught",
    description: "Used extensively in my Masters Project to create a 3D environment to visualise EEG data."
  },
  { 
    name: "Qualcomm Spaces", 
    imageUrl: "/Images/Qualcomm_Spaces_Logo.png",
    learnedAt: "Self-taught",
    description: "Worked on AR/VR projects using Qualcomm Spaces for my Masters Project."
  },
  { 
    name: "OpenXR", 
    imageUrl: "/Images/OpenXR_Logo.png",
    learnedAt: "Self-taught",
    description: "Developed cross-platform VR applications. Used for my Masters Project to ensure it worked on all headsets."
  },
  { 
    name: "Matlab", 
    imageUrl: "/Images/Matlab_Logo.png",
    learnedAt: "University",
    description: "Second language I learned, used in conjunction with Simulink to model and simulate systems."
  },
  { 
    name: "LtSpice", 
    imageUrl: "/Images/LTSpice_Logo.png",
    learnedAt: "University",
    description: "Simulated electronic circuits and systems. "
  },
  { 
    name: "Lora", 
    imageUrl: "/Images/Lora_Logo.png",
    learnedAt: "Work Experience",
    description: "Implemented IoT solutions using LoRa technology. Used in my final year project to collect data from sensors and send it to the cloud."
  },
  { 
    name: "Fusion360", 
    imageUrl: "/Images/Fusion360_Logo.png",
    learnedAt: "Self-taught",
    description: "Designed 3D model of my Smart Mirror before building it. Some other useful things too."
  },
  { 
    name: "FlutterFlow", 
    imageUrl: "/Images/FlutterFlow_Logo.png",
    learnedAt: "Self-taught",
    description: "Built mobile app for my Start Up idea. Still on going."
  },
  { 
    name: "Latex", 
    imageUrl: "/Images/Latex_Logo.png",
    learnedAt: "Self-taught",
    description: "Document preparation system for high-quality typesetting. Used for my Masters Project."
  },
  { 
    name: "Mailgun", 
    imageUrl: "/Images/Mailgun_Logo.png",
    learnedAt: "Self-taught",
    description: "Used in some of my websites to send emails. "
  },
  { 
    name: "WordPress", 
    imageUrl: "/Images/WordPress_Logo.png",
    learnedAt: "Self-taught",
    description: "Built my first website on it. Moved away from it when I started learning React."
  },
  { 
    name: "Powerpoint", 
    imageUrl: "/Images/Powerpoint_Logo.png",
    learnedAt: "My Father",
    description: "A must for any career, used so many times I have lost count."
  },
  { 
    name: "Excel", 
    imageUrl: "/Images/Excel_Logo.png",
    learnedAt: "My Father",
    description: "A non-negotiable for any career. Macros, VBA, Pivot Tables, Look ups, Charts, Graphs, you name it."
  },
  { 
    name: "Photoshop", 
    imageUrl: "/Images/Photoshop_Logo.png",
    learnedAt: "Self-taught",
    description: "Hobbyist, used for some graphics and photoshopping in conjunction with Lightroom."
  },
  { 
    name: "STM", 
    imageUrl: "/Images/STM_Logo.png",
    learnedAt: "University",
    description: "Worked on embedded systems and microcontroller programming. Tutored for 2 years."
  },
  { 
    name: "STMCube", 
    imageUrl: "/Images/STM32_Cube.png",
    learnedAt: "University",
    description: "Worked on embedded systems and microcontroller programming. Tutored for 2 years."
  }
  // Add more skills here
];

// First, let's create a base size that scales with screen size
const getBaseSize = () => {
  if (typeof window === 'undefined') return 48; // Default for SSR
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  
  // Scale based on both viewport width and height
  if (vw < 640 || vh < 640) return 32; // small screens
  if (vw < 1024 || vh < 768) return 48; // medium screens
  if (vw < 1536 || vh < 1024) return 64; // large screens
  return 80; // xl and above
};

// Modify the logoScales to be multipliers of the base size
const logoScales: { [key: string]: number } = {
  "STM": 1.5,
  "STMCube": 2,
  "LtSpice": 1.2,
  "Matlab": 1,
  "OpenXR": 1.5,
  "Firebase": 2.5,
  "Fusion360": 3,
  "Mailgun": 1.8,
  "Heroku": 1.8,
  "Vercel": 1.8,
  "Flutter": 2,
  "Qualcomm Spaces": 2,
  "Stripe": 1.5,
  "Latex": 1.4,
  "Unity": 2,
  "Python": 2,
  "CSS":2,
  "NextJS": 1.5,
  "AWS": 1.5,
  "Lora": 1.5,
  // Add more logos that need scaling
};

const MIN_SPEED = 0.5; // Adjust this value to set minimum speed
const DEFAULT_SIZE = 64;

const FloatingSkillsBackground: React.FC = () => {
  const logoRefs = useRef<HTMLDivElement[]>([]);
  const animationFrameRef = useRef<number>();
  const [isPositioned, setIsPositioned] = useState(false);
  const [baseSize, setBaseSize] = useState(DEFAULT_SIZE);
  const [showSkillsPopup, setShowSkillsPopup] = useState(false);
  const velocities = useRef<Array<{ x: number; y: number }>>(
    skillLogos.map(() => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = MIN_SPEED + Math.random();
      return {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      };
    })
  );

  // Initialize sizes and start animation after mount
  useEffect(() => {
    const handleResize = () => {
      setBaseSize(getBaseSize());
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size set

    setBaseSize(getBaseSize());
    
    const animate = () => {
      logoRefs.current.forEach((logo, index) => {
        if (!logo) return;
        
        const rect = logo.getBoundingClientRect();
        const parentRect = logo.parentElement?.getBoundingClientRect();
        if (!parentRect) return;

        let x = parseFloat(logo.style.left) || 0;
        let y = parseFloat(logo.style.top) || 0;

        // Update position
        x += velocities.current[index].x;
        y += velocities.current[index].y;

        // Bounce off edges with padding
        if (x <= 0) {
          x = 0;
          velocities.current[index].x *= -1;
        } else if (x >= parentRect.width - rect.width) {
          x = parentRect.width - rect.width;
          velocities.current[index].x *= -1;
        }

        if (y <= 0) {
          y = 0;
          velocities.current[index].y *= -1;
        } else if (y >= parentRect.height - rect.height) {
          y = parentRect.height - rect.height;
          velocities.current[index].y *= -1;
        }

        // Apply position
        logo.style.left = `${x}px`;
        logo.style.top = `${y}px`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize random starting positions
    logoRefs.current.forEach((logo) => {
      if (!logo || !logo.parentElement) return;
      const parentRect = logo.parentElement.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();
      
      logo.style.left = `${Math.random() * (parentRect.width - logoRect.width)}px`;
      logo.style.top = `${Math.random() * (parentRect.height - logoRect.height)}px`;
    });

    // Set positioned to true and start animation
    setIsPositioned(true);
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="flex-grow relative w-full h-full bg-gray-100 dark:bg-gray-700 border-2 p-2 justify-center items-center overflow-hidden bg-white z-1 pt-20">
      {skillLogos.map((logo, index) => (
        <div
          key={`skill-${index}`}
          ref={(el) => {
            if (el) logoRefs.current[index] = el;
          }}
          className="absolute bg-no-repeat bg-center bg-contain p-2 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${logo.imageUrl})`,
            transform: `scale(${logoScales[logo.name] || 1})`,
            width: `${baseSize}px`,
            height: `${baseSize}px`,
            minWidth: `${baseSize}px`,
            minHeight: `${baseSize}px`,
            opacity: isPositioned ? 1 : 0,
            left: '0px',
            top: '0px'
          }}
        />
      ))}

      {/* Skills Button */}
      <button
        onClick={() => setShowSkillsPopup(true)}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-105 z-[50]"
        aria-label="View Skills"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </button>

      {/* Skills Popup */}
      {showSkillsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto relative">
            <div className="sticky top-0 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Skills & Technologies
              </h2>
              <button
                onClick={() => setShowSkillsPopup(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-8rem)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {skillLogos.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center"
                  >
                    <div className="w-20 h-20 relative mb-4">
                      <Image
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                      {skill.learnedAt}
                    </p>
                    {skill.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FloatingSkillsBackground;
