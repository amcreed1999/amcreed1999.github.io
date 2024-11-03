const HeroOverlay = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#1E3A8A] opacity-95 rounded-xl p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Container */}
        <div className="w-48 h-48 md:w-64 md:h-64  shadow-lg">
          <img
            src="/Images/Avatar.png" // Replace with your image path
            alt="Profile"
            className="w-full h-full "
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Adam Creed
          </h1>
          <p className="text-xl md:text-2xl text-primary mt-4 ">
            Electronic Engineer & Software Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay; 