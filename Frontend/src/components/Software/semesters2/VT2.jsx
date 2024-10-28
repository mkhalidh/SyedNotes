import React from 'react';

const VT2 = ({ name, department, description, image }) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative">
      <div className="flex flex-col md:flex-row items-center">
        {/* VT1 Image */}
        <div className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 md:mb-0 md:mr-4 transition-opacity duration-300 group-hover:opacity-30">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        {/* VT1 Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 transition-opacity duration-300 group-hover:opacity-30">
            {name}
          </h2>
          <p className="text-xs sm:text-sm md:text-md text-gray-600 transition-opacity duration-300 group-hover:opacity-30">
            {department}
          </p>
          {/* Hidden description that appears on hover */}
          {description && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
              <p className="text-xs sm:text-sm text-center">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VT2;
