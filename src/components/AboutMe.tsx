import Image from 'next/image';

const steps = [
  {
    icon: '/icons/checklist.svg',
    title: 'Pick a Fundraiser',
    description: 'Choose one of the fundraisers available on our platform and start raising money for your club effortlessly.'
  },
  {
    icon: '/icons/community.svg',
    title: 'Community',
    description: 'Spread the word in your community to gain as much support and traction as possible for your fundraiser.'
  },
  {
    icon: '/icons/relax.svg',
    title: 'Relax',
    description: 'Sit back and relax. Once the fundraiser starts, we take care of the rest, ensuring a smooth process.'
  },
  {
    icon: '/icons/collect.svg',
    title: 'Collect',
    description: 'At the end of the fundraiser, receive all the money you have raised, ready to support your clubs goals.'
  }
];

const AboutMe = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          How It Works
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
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
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