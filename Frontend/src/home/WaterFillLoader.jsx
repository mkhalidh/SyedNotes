import React, { useState, useEffect } from "react";

const WaterFillLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate loading completion after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#ecd6f0] p-4">
      <h1 className="text-center text-[#37b350] text-6xl md:text-8xl font-bold mb-6">SyedNotes</h1>
      {isLoading ? (
        // Show loader while loading
        <div className="relative w-28 md:w-36 h-48 md:h-64 border-4 border-gray-800 rounded-lg overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full bg-[#692f95] animate-fill"></div>
        </div>
      ) : (
        // Show image with fade-in effect once loading is done
        <img
          src="your-image-url.jpg" // Replace with your image URL
          alt="Loaded Content"
          className="transition-opacity duration-1000 opacity-100 w-full md:w-1/2 lg:w-1/3" // Responsive image
          style={{ opacity: 0 }} // Start with 0 opacity
          onLoad={(e) => (e.target.style.opacity = 1)} // Fade in on load
        />
      )}
    </div>
  );
};

export default WaterFillLoader;
