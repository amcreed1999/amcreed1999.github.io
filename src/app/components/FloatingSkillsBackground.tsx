"use client";
import React, { useEffect, useRef } from "react";

interface SkillLogo {
  name: string;
  imageUrl: string;
}

const skillLogos: SkillLogo[] = [
  { name: "Python", imageUrl: "/Images/Python.png" },
  { name: "Javascript", imageUrl: "/Images/JavaScript.png" },
  { name: "STM", imageUrl: "/Images/STM.png" },
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
  { name: "LtSpice", imageUrl: "/Images/LTSpice_Logo.png"}




  // Add more skills here
];

const logoScales: { [key: string]: number } = {
  "STM": 1,
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
  // Add more logos that need scaling
};

const FloatingSkillsBackground: React.FC = () => {
  const logoRefs = useRef<HTMLDivElement[]>([]);
  const animationFrameRef = useRef<number>();
  const velocities = useRef<Array<{ x: number; y: number }>>(
    skillLogos.map(() => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    }))
  );

  useEffect(() => {
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

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-100 border-2 border-blue-500 bg-white">
      {skillLogos.map((logo, index) => (
        <div
          key={`skill-${index}`}
          ref={(el) => {
            if (el) logoRefs.current[index] = el;
          }}
          className="absolute w-16 h-16 bg-no-repeat bg-center bg-contain p-2 min-w-[64px] min-h-[64px]"
          style={{
            backgroundImage: `url(${logo.imageUrl})`,
            transform: `scale(${logoScales[logo.name] || 1})`
          }}
        />
      ))}
    </section>
  );
};

export default FloatingSkillsBackground;
