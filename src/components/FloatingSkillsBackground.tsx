"use client";
import React, { useEffect, useRef, useState } from "react";

interface SkillLogo {
  name: string;
  imageUrl: string;
}

const skillLogos: SkillLogo[] = [
  { name: "Python", imageUrl: "/Images/Python_Logo.png" },
  { name: "Javascript", imageUrl: "/Images/JavaScript.png" },
  { name: "STM", imageUrl: "/Images/STM_Logo.png" },
  { name: "STMCube", imageUrl: "/Images/STM32_Cube.png" },
  { name: "Swift", imageUrl: "/Images/Swift.png" },
  { name: "SwiftUI", imageUrl: "/Images/SwiftUI.png" },
  { name: "Flutter", imageUrl: "/Images/Flutter.png" },
  { name: "C", imageUrl: "/Images/C_Logo.png" },
  { name: "C++", imageUrl: "/Images/C++_Logo.png" },
  { name: "C#", imageUrl: "/Images/C_Sharp_Logo.png" },
  { name: "Latex", imageUrl: "/Images/Latex_Logo.png" },
  { name: "HTML", imageUrl: "/Images/HTML_Logo.png" },
  { name: "NextJS", imageUrl: "/Images/NextJS_Logo.png" },
  { name: "React", imageUrl: "/Images/React_Logo.png" },
  { name: "Tailwind", imageUrl: "/Images/Tailwind_CSS_Logo.png" },
  { name: "GitHub", imageUrl: "/Images/GitHub_Logo.png" },
  { name: "Git", imageUrl: "/Images/Git_Logo.png" },
  { name: "Firebase", imageUrl: "/Images/Firebase_Logo.png" },
  { name: "Figma", imageUrl: "/Images/Figma_Logo.png" },
  { name: "Sketch", imageUrl: "/Images/Sketch_Logo.png" },
  { name: "Google Cloud", imageUrl: "/Images/Google_Cloud_Logo.png" },
  { name: "AWS", imageUrl: "/Images/AWS_Logo.png" },
  { name: "Linux", imageUrl: "/Images/Linux_Logo.png" },
  { name: "Heroku", imageUrl: "/Images/Heroku_Logo.png" },
  { name: "Vercel", imageUrl: "/Images/Vercel_Logo.png" },
  { name: "Stripe", imageUrl: "/Images/Stripe_Logo.png" },
  { name: "Mailgun", imageUrl: "/Images/Mailgun_Logo.png" },
  { name: "WordPress", imageUrl: "/Images/WordPress_Logo.png" },
  { name: "Qualcomm Spaces", imageUrl: "/Images/Qualcomm_Spaces_Logo.png" },
  { name: "Unity", imageUrl: "/Images/Unity_Logo.png" },
  { name: "CSS", imageUrl: "/Images/CSS_Logo.png" },
  { name: "Fusion360", imageUrl: "/Images/Fusion360_Logo.png" },
  { name: "OpenXR", imageUrl: "/Images/OpenXR_Logo.png" },
  { name: "Powerpoint", imageUrl: "/Images/Powerpoint_Logo.png" },
  { name: "Excel", imageUrl: "/Images/Excel_Logo.png" },
  { name: "Keynote", imageUrl: "/Images/Keynote_Logo.png" },
  { name: "Photoshop", imageUrl: "/Images/Photoshop_Logo.png" },
  { name: "Matlab", imageUrl: "/Images/Matlab_Logo.png" },
  { name: "LtSpice", imageUrl: "/Images/LTSpice_Logo.png"},
  { name: "Lora", imageUrl: "/Images/Lora_Logo.png"},
  { name: "FlutterFlow", imageUrl: "/Images/FlutterFlow_Logo.png"},
  {name: "Typescript", imageUrl:"/Images/Typescript_Logo.png"}


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
    <section className="flex-grow relative w-full h-full bg-gray-100 dark:bg-gray-500 border-2 p-2  bg-white z-0">
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
    </section>
  );
};

export default FloatingSkillsBackground;
