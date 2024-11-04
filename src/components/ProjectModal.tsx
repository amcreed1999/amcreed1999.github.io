"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
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
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[1000]">
      <div 
        className={`${
          isDark ? 'bg-gray-800' : 'bg-white'
        } rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative`}
      >
        {/* Header */}
        <div className="sticky top-0 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-inherit">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6">
          {/* Main Image */}
          <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
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
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About the Project
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Challenges Overcome
              </h3>
              <ul className={`list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="mb-2">{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {project.outcomes && (
            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Key Outcomes
              </h3>
              <ul className={`list-disc list-inside ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="mb-2">{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Images */}
          {project.images && (
            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 mt-8">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors`}
              >
                View Live Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg font-semibold ${
                  isDark 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                } transition-colors`}
              >
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 