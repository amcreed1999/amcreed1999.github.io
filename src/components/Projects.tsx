"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  longDescription?: string;
  challenges?: string[];
  outcomes?: string[];
  images?: string[];
}

const projects: Project[] = [
  {
    title: "EEG VR Visualisation",
    description: "A Virtual Reality environment that allows clinicians to visualise and interact with EEG data in 3D space.",
    longDescription: "This project revolutionizes how medical professionals interact with EEG data by bringing it into three-dimensional space. Using Virtual Reality, we've created an intuitive environment where clinicians can manipulate and analyze brain activity data in ways previously impossible with traditional 2D displays.",
    image: "/Images/Projects/EEG_VR.png",
    technologies: ["Unity", "C#", "Python", "OpenXR", "VR", "AR"],
    github: "https://github.com/amcreed/eeg-vr",
    challenges: [
      "Optimizing performance for real-time 3D visualization of complex EEG data",
      "Creating intuitive VR interactions for medical professionals",
      "Ensuring accurate data representation in 3D space"
    ],
    outcomes: [
      "Reduced analysis time by 40% compared to traditional methods",
      "Improved pattern recognition in complex EEG data",
      "Positive feedback from medical professionals"
    ],
    images: [
      "/Images/Projects/EEG_VR_1.png",
      "/Images/Projects/EEG_VR_2.png",
      "/Images/Projects/EEG_VR_3.png",
      "/Images/Projects/EEG_VR_4.png"
    ]
  },
  {
    title: "IoT Carbon Monitoring",
    description: "A Virtual Reality environment that allows clinicians to visualise and interact with EEG data in 3D space.",
    longDescription: "This project revolutionizes how medical professionals interact with EEG data by bringing it into three-dimensional space. Using Virtual Reality, we've created an intuitive environment where clinicians can manipulate and analyze brain activity data in ways previously impossible with traditional 2D displays.",
    image: "/Images/Projects/EEG_VR.png",
    technologies: ["Unity", "C#", "Python", "OpenXR", "VR", "AR"],
    github: "https://github.com/amcreed/eeg-vr",
    challenges: [
      "Optimizing performance for real-time 3D visualization of complex EEG data",
      "Creating intuitive VR interactions for medical professionals",
      "Ensuring accurate data representation in 3D space"
    ],
    outcomes: [
      "Reduced analysis time by 40% compared to traditional methods",
      "Improved pattern recognition in complex EEG data",
      "Positive feedback from medical professionals"
    ],
    images: [
      "/Images/Projects/EEG_VR_1.png",
      "/Images/Projects/EEG_VR_2.png",
      "/Images/Projects/EEG_VR_3.png",
      "/Images/Projects/EEG_VR_4.png"
    ]
  },
  {
    title: "Raspberry Pi Smart Mirror",
    description: "A Virtual Reality environment that allows clinicians to visualise and interact with EEG data in 3D space.",
    longDescription: "This project revolutionizes how medical professionals interact with EEG data by bringing it into three-dimensional space. Using Virtual Reality, we've created an intuitive environment where clinicians can manipulate and analyze brain activity data in ways previously impossible with traditional 2D displays.",
    image: "/Images/Projects/EEG_VR.png",
    technologies: ["Unity", "C#", "Python", "OpenXR", "VR", "AR"],
    github: "https://github.com/amcreed/eeg-vr",
    challenges: [
      "Optimizing performance for real-time 3D visualization of complex EEG data",
      "Creating intuitive VR interactions for medical professionals",
      "Ensuring accurate data representation in 3D space"
    ],
    outcomes: [
      "Reduced analysis time by 40% compared to traditional methods",
      "Improved pattern recognition in complex EEG data",
      "Positive feedback from medical professionals"
    ],
    images: [
      "/Images/Projects/EEG_VR_1.png",
      "/Images/Projects/EEG_VR_2.png",
      "/Images/Projects/EEG_VR_3.png",
      "/Images/Projects/EEG_VR_4.png"
    ]
  },
  {
    title: "Club Fundraising Platform",
    description: "A Virtual Reality environment that allows clinicians to visualise and interact with EEG data in 3D space.",
    longDescription: "This project revolutionizes how medical professionals interact with EEG data by bringing it into three-dimensional space. Using Virtual Reality, we've created an intuitive environment where clinicians can manipulate and analyze brain activity data in ways previously impossible with traditional 2D displays.",
    image: "/Images/Projects/EEG_VR.png",
    technologies: ["Unity", "C#", "Python", "OpenXR", "VR", "AR"],
    github: "https://github.com/amcreed/eeg-vr",
    challenges: [
      "Optimizing performance for real-time 3D visualization of complex EEG data",
      "Creating intuitive VR interactions for medical professionals",
      "Ensuring accurate data representation in 3D space"
    ],
    outcomes: [
      "Reduced analysis time by 40% compared to traditional methods",
      "Improved pattern recognition in complex EEG data",
      "Positive feedback from medical professionals"
    ],
    images: [
      "/Images/Projects/EEG_VR_1.png",
      "/Images/Projects/EEG_VR_2.png",
      "/Images/Projects/EEG_VR_3.png",
      "/Images/Projects/EEG_VR_4.png"
    ]
  },
  // ... Update other projects with additional details
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`} id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-extrabold text-center mb-12 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors`}
                >
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;