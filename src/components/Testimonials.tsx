"use client";
import { useTheme } from "next-themes";
import Image from "next/image";// Import the LinkedIn logo

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  linkedin: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Declan Duggan",
    role: "Research Student",
    company: "University College Cork",
    image: "Images/Declan_Duggan.jpeg",
    quote: "Hmm, how to describe Adam? Imagine if Mark Zuckerberg could weld, make garden furniture, build cranes, break a tackle, cook a mean chicken tika massala, sing like a bird, oh and also had a sense of humour, and you'd get close. But the reality is he's unique, so you'll have to hire him to find out what's he's really like ¯\_(ツ)_/¯",
    linkedin: "https://www.linkedin.com/in/declan-duggan-2916372b7/"
  },
  {
    name: "Leah Twomey",
    role: "Research Student",
    company: "University College Cork",
    image: "Images/Leah_Twomey.jpeg",
    quote: "Adam is an innovative and creative thinker, bringing a unique commitment to every project he undertakes. His focus on finding solutions, no matter the obstacles, is unmatched. He’s the only person I know who would willingly stand in a peatland in the rain for 12 hours with me, determined to debug and deploy a successful solution. His drive and passion for technical excellence in real-world settings make him an invaluable problem-solver.",
    linkedin: "https://www.linkedin.com/in/leah-twomey/"
  },
  {
    name: "Bosco Creed",
    role: "Operations Director",
    company: "South Coast Logistics",
    image: "Images/Bosco_Creed.jpeg",
    quote: "Adam has demonstrated an appetite for hard work over several part time jobs while in school or 3rd level. Whether it was sourcing hard to find parts for mechanics or loose loading shipping containers, his can do attitude always shone through. Blessed with intelligence and determination to get the job, you can be assured Adam will always deliver. On the other hand if you just want someone to do a Gannt Chart for the perfect Christmas dinner he is the man for that challenge too! 😉",
    linkedin: "https://www.linkedin.com/in/bosco-creed-01ba6025/"
  },
  {
    name: "Jack Scannell",
    role: "Supply Chain Manager",
    company: "Veolia Ireland",
    image: "Images/Jack_Scannell.jpeg",
    quote: "I’ve known Adam for quite a number of years and I’ve come to know him as a person of exceptional reliability, strong work ethic, and remarkable technical aptitude.  Over the past few years I’ve come to realise what makes Adam so exceptional and that’s how many people rely on him as their “Fix it guy“. If your local business needed a new software system? Adam’s your guy. If your sports club is trying to raise funds of 300k but doesn’t know how to create a website or a payment system for such volume? Adam’s your guy. Overall he’s a standup guy with a strong work ethic and now that’s he’s leaving Ireland I truly think a lot of people in our community will start to realise how much Adam really is one of a kind. ",
    linkedin: "https://www.linkedin.com/in/jackscannell/"
  }
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-extrabold text-center  ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          What People Say
        </h2>
        <p className={`text-center mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'} text-lg`}>
          I asked some of my nearest and dearest to write something for my website. Here is what they had to say:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-4xl ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>
                  &quot;
                </div>
                
                <div className="flex-1">
                  <p className={`text-lg mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="ml-4">
                      <p className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                        <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2">
                        <img
                          src="/Images/LinkedIn.png"
                          alt="LinkedIn"
                          className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                        />
                      </a>
                      </p>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {testimonial.role} at {testimonial.company}
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 