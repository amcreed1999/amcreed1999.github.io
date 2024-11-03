const Education = () => {
  return (
    <section className="py-8 px-4 bg-[#1E3A8A] dark:bg-gray-700 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 dark:border-gray-600">
      <h2 className="text-3xl font-bold text-white dark:text-gray-100 mb-6">Education</h2>
      <ul className="space-y-6">
        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600 dark:text-gray-300">University of Example, 2018 - 2022</p>
          <p className="text-gray-600 dark:text-gray-300">GPA: 3.8/4.0</p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">High School Diploma</h3>
          <p className="text-gray-600 dark:text-gray-300">Example High School, 2014 - 2018</p>
          <p className="text-gray-600 dark:text-gray-300">GPA: 4.0/4.0</p>
        </li>
      </ul>
    </section>
  );
};

export default Education; 