import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Svg = () => {
  const pathRef = useRef(null); // Create a ref for the path
  const actual = "M 10 50 Q 150 50 290 50"; // The smaller, original path shape

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Get the mouse position relative to the SVG
      const svg = pathRef.current.ownerSVGElement;
      const pt = svg.createSVGPoint();
      pt.x = event.clientX;
      pt.y = event.clientY;
      const svgPoint = pt.matrixTransform(svg.getScreenCTM().inverse());

      // Create the path using the mouse position
      const path = `M 10 50 Q ${svgPoint.x} ${svgPoint.y} 290 50`;
      gsap.to(pathRef.current, { duration: 0.2, attr: { d: path } });
    };

    const handleMouseLeave = () => {
      // Reset the path when the mouse leaves the SVG area
      gsap.to(pathRef.current, { duration: 1.2, attr: { d: actual }, ease: "elastic.out(1,0.2)" });
    };

    const svgElement = pathRef.current.ownerSVGElement;

    // Add event listeners to the SVG element
    svgElement.addEventListener('mousemove', handleMouseMove);
    svgElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup: remove the event listeners when the component is unmounted
    return () => {
      svgElement.removeEventListener('mousemove', handleMouseMove);
      svgElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [actual]); // Dependency on the actual path

  return (
    <div className="hidden sm:flex items-center justify-center">
      <svg
        className="w-full h-[250px] -translate-x-1/3 " // Smaller dimensions for the SVG container
        viewBox="0 0 300 100" // Adjust the viewBox to smaller size
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef} // Assign the ref to the path element
          d={actual} // Initialize with the smaller original path shape
          fill="transparent"
          stroke="#5c2b73"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
};

export default Svg;
