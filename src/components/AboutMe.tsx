import Image from 'next/image';

const steps = [
  {
    icon: '/Images/Location.png',
    title: 'Melbourne',
    description: 'I have recently moved to Melbourne from Ireland to further my career and experience life in a new country.'
  },
  {
    icon: '/Images/Education.png',
    title: 'Masters',
    description: 'I have just finished my Masters of Engineering by Research from the Embedded Systems Research Group in UCC, Ireland.'
  },
  {
    icon: '/Images/IoT.png',
    title: 'Cloud & IOT',
    description: 'Designed and Built IOT devices that utilise both AWS and GCP. Showcasing both my software and hardware skills.'
  },
  {
    icon: '/Images/Certificate.png',
    title: 'Certifications',
    description: 'Completed courses in VR and AR. Soldering. Welding. 3D Printing. Currently working towards my AWS Cloud Practioner Certification.'
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-24 h-24 mb-6 relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={96}
                  height={96}
                  className="text-green-500"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mt-5 dark:text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-center text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 