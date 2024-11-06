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
  captions?: string[];
  youtube?: string;
  website?: string;
}

const projects: Project[] = [
  {
    title: "Masters Project: EEG VR Visualisation",
    description: "A Virtual Reality environment that allows clinicians to visualise and interact with EEG data in 3D space.",
    longDescription: "This project revolutionises how medical professionals interact with EEG data by bringing it into three-dimensional space. Using Virtual Reality, we've created an intuitive environment where clinicians can manipulate and analyze brain activity data in ways previously impossible with traditional 2D displays. While also State of the Art AI seizure detection and sonification algorithms were implemented. Full source Thesis and source code will be available once the project is published.",
    image: "/Images/Projects/EEG_VR.png",
    technologies: ["Unity", "C#", "Python", "OpenXR", "VR", "AR"],
    github: "https://github.com/amcreed/eeg-vr",

    challenges: [
      "Optimising performance for real-time 3D visualisation of complex EEG data",
      "Creating intuitive VR interactions for medical professionals",
      "Ensuring accurate data representation in 3D space",
      "Ensuring sufficient performance for Virtual Reality Rendering"
    ],
    outcomes: [
      "Non-Expert clinicians can now use VR to visualise EEG data and detect seizures as accurately as expert clinicians",
      "Visualisations of EEG data in 3D space allow for a more intuitive understanding of the data",
      "Visualisation of vast amounts of data in a virtual reality environment in a novel way"
    ],
    images: [
      "/Images/Projects/EEG_VR_1.png",
      "/Images/Projects/EEG_VR_2.png",
      "/Images/Projects/EEG_VR_3.png",
    ],
    captions: [
      "Main Screen of the VR World - Shows the different channels of EEG data",
      "The EEG Data broken into its different frequency bands and visualised in 3D space",
      "3D Brain Model showing the AI's detection of a seizure in a traffic light pattern",
    ],
    youtube: "3XZXtIzvPPM"
  },
  // ------------------------------------------------------------ FYP PROJECTS --------------------------------------------------------------------------------------------
  {
    title: "Undergraduate Final Year Project: IoT Carbon Monitoring",
    description: "A LoRA based Carbon Monitoring System with Cloud Integration",
    longDescription: "How does one get data back from a location with no internet connection? This project aims to address this question by creating a LoRA based Carbon Monitoring System that can be deployed in remote locations and send data back to a cloud server. The system is designed to be low cost and low power consuming, making it suitable for remote locations. There was also a requirement to retrofit the existing hardware to allow it to communicate with the new system and with the cloud for monitoring.",
    image: "/Images/Projects/Final_FYP_Node.jpg",
    technologies: ["LoRa", "C++", "Python", "AWS", "Raspberry Pi","MQTT", "Real Deployment","Hardware Design", "System Architecture","Energy Harvesting", "I2C", "UART", "SPI" ],
    challenges: [
      "Creating a system that can be deployed in remote locations",
      "Ensuring the system is low cost and low power consuming",
      "Harvesting Energy to increase the longevity of the device",
      "Ensuring the system is reliable and can handle the harsh environment of a remote location"
    ],
    outcomes: [
      "A real world working example of a LoRA based Carbon Monitoring System",
      "A system that can be easily deployed in remote locations",
      "A system that can be monitored in real time through a web interface",
      "A system that is reliable and can handle the harsh environment of a remote location"
    ],
    images: [
      "/Images/Projects/Final_FYP_Node.jpg",
      "/Images/Projects/CR3000.png",
      "/Images/Projects/FYP_Hardware.png",
      "/Images/Projects/FYP_Cloud.png",
      "/Images/Projects/FYP_Dashboard.png"
    ],
    captions: [
      "Final Version of the IoT Node with LoRA capabilities",
      "CR3000 Data Acquisition System that was retrofitted to work with the new system",
      "The schematic of the hardware and communication protocols used in the project",
      "The AWS Cloud Architecture used to host the data and provide a web interface",
      "The Dashboard that was displayed on the Open Day to show the system in action",
    ],
    // youtube: "dQw4w9WgXcQ"
  },
  {
    title: "Raspberry Pi Smart Mirror",
    description: "A Christmas Gift for my Girlfriend",
    longDescription: "What do you get for the girl that has everything? A Smart Mirror of course! This project was a fun project to do over the Christmas period and was a great success. I was probably more stressed for this project  than any other I had done, A tough client- the father in law! Ready to scrutinise everything down to the last screw or soldered joint. But in the end it was a great success and I learned a lot about the Raspberry Pi and the different libraries and frameworks that are available for it, while also showcasing a lot of my skills into a real world application under a time constraint.",
    image: "/Images/Projects/EEG_VR.png",
    technologies: ["Raspberry Pi", "Python", "Soldering", "Fusion360", "CAD", "Woodworking", "Wiring", "API's", "GCP", "Prototyping", "Project Management"],
    // github: "https://github.com/amcreed/eeg-vr",
    challenges: [
      "A very tough client to impress in a very tight time constraint while she is not around",
      "Lots of soldering and wiring and coding",
      "A final physical assembly and testing phase to ensure everything worked perfectly"
    ],
    outcomes: [
      "One very happy girlfriend",
      "Lots of new skills in coding, cloud computing, API's, soldering, woodworking and wiring. ",
      "A real world application of my skills",
      "A working Raspberry Pi Smart Mirror that still works over a year later with no problems"
    ],
    images: [
      "/Images/Projects/EEG_VR_1.png",
      "/Images/Projects/EEG_VR_2.png",
      "/Images/Projects/EEG_VR_3.png"
    ],
    captions: [
      "Raspberry Pi Smart Mirror - Image 1",
      "Raspberry Pi Smart Mirror - Image 2",
      "Raspberry Pi Smart Mirror - Image 3",
    ],
    youtube: "dQw4w9WgXcQ"
  },
  {
    title: "Club Fundraising Platform (Ongoing)",
    description: "A SaaS Platform for Clubs to Fundraise",
    longDescription: "This project is a platform for clubs to run a online fundraisers for their club. It started with the running of an online fundraiser for my own club, but it has now been expanded to allow for other clubs to use it as well. It is a work in progress and is still being developed.",
    image: "/Images/Projects/Club_Fundraiser.png",
    technologies: ["NextJS", "TailwindCSS", "Typescript", "Vercel", "Stripe", "Firebase", "Sketch", "Mailgun"],
    // github: "https://github.com/amcreed/eeg-vr",
    website: "https://www.club-fundraiser.com",
    challenges: [
      "Creating a platform that is easy to use and understand",
      "Creating a platform that is customisable for each club",
      "Ensuring the platform is secure and can handle the payment processing",
      "Keeping track of the funds and donations to ensure each club gets the correct amount"
    ],
    outcomes: [
      "Over €100K raised for clubs",
      "A platform that is customisable for each club",
      "A platform that is secure and can handle the payment processing",
      "A platform that keeps track of the funds and donations to ensure each club gets the correct amount"
    ],
    images: [
      "/Images/Projects/Club_Fundraiser.png",
      "/Images/Projects/CF_FermoyGAA.png",
      "/Images/Projects/CF_LMS_Inniscarra.png",
    ],
    captions: [
      "Hero of the Club Fundraising Platform",
      "Fermoy GAA Club Fundraising Page",
      "Example of one competition on the platform",
    ],
    // youtube: "dQw4w9WgXcQ"
  },
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