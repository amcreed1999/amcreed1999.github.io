"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "EEG VR Visualisation",
    description: "A Virtual Reality environment that allows clinicians to visualise and interact with EEG data in 3D space. Breaking the constraints of traditional 2D EEG analysis.",
    image: "/Images/Projects/EEG_VR.png", // Add your project image
    technologies: ["Unity", "C#", "Python", "OpenXR", "VR", "AR"],
    github: "https://github.com/amcreed/eeg-vr"
  },
  {
    title: "IoT Carbon Monitoring",
    description: "Network of IoT devices monitoring Carbon Emissions of Peatland. Retrofitted gold standard research equipment with wireless capabilities and created a dashboard for data visualization.",
    image: "/Images/Projects/IoT_Carbon.png", // Add your project image
    technologies: ["C++", "Python", "AWS", "LoRa", "IoT", "MQTT"],
    link: "https://your-dashboard-link.com"
  },
  {
    title: "Smart Mirror",
    description: "Built a Smart Mirror integrated with Google services. Features include voice commands, personalized dashboard, weather updates, and calendar integration.",
    image: "/Images/Projects/Smart_Mirror.png", // Add your project image
    technologies: ["Python", "Google Cloud", "React", "Node.js", "Raspberry Pi"],
    github: "https://github.com/amcreed/smart-mirror"
  },
  {
    title: "Club Management Platform",
    description: "Developed a comprehensive platform for sports clubs to manage memberships, payments, and events. Successfully processed over €100K in transactions.",
    image: "/Images/Projects/Club_Platform.png", // Add your project image
    technologies: ["Next.js", "TypeScript", "Stripe", "Firebase", "Tailwind"],
    link: "https://your-platform-link.com"
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
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

                {/* Technologies */}
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

                {/* Links */}
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${
                        isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                      }`}
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${
                        isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                      }`}
                    >
                      <span>View Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 