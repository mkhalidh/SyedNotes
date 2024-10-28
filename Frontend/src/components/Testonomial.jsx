import React, { useState, useEffect } from "react";
import Svg from "./Svg";

const testimonialList = [
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position:  "4th Semester in\n2024",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },  {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position:  "4th Semester in\n2024",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },  {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position:  "4th Semester in\n2024",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },  {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Aksay Kumar",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Sara Tailor",
      position:  "4th Semester in\n2024",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },  {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "John Leo",
      position: "CEO & Founder at EasyFrontend",
      content:
        "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you. It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    
  ],
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % testimonialList.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const sliderStyle = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(-${index * 100}%)`,
  };

  const sliderContainerStyle = {
    overflow: 'hidden',
    position: 'relative',
  };

  const slideStyle = {
    minWidth: '100%',
  };

  return (
    <section className="ezy__testimonial23 light py-14 md:py-24 bg-#dcb3e38b dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
      <div className="container px-4 mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold leading-normal">
            Student's Feedback
          </h2>
        </div>

        <div className="mt-12" style={sliderContainerStyle}>
          <div className="testimonial-slider-inner" style={sliderStyle}>
            {testimonialList.map((testimonials, idx) => (
              <div className="testimonial-slide" style={slideStyle} key={idx}>
                <div className="grid grid-cols-3 gap-6">
                  {testimonials.map((testimonial, i) => (
                    <div className="col-span-3 lg:col-span-1" key={i}>
                      <div className="bg-[#692f95] text-white dark:bg-[#0b1727] shadow-xl dark:shadow-md h-full p-6 xl:p-8 rounded-xl border dark:border-white border-gray-200">
                        <div className="flex items-center mb-6">
                          <div className="mr-3">
                            <img
                              src={testimonial.img}
                              alt={testimonial.name}
                              className="max-w-full h-auto rounded-full border"
                              width="65"
                            />
                          </div>
                          <div>
                            <h4 className="text-xl font-medium">{testimonial.name}</h4>
                            <p className="text-sm mb-2">{testimonial.position}</p>
                          </div>
                        </div>
                        <p className="opacity-75 mb-2">{testimonial.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 m-0 mt-12">
            {testimonialList.map((_, i) => (
              <button
                className={`w-2 h-2 rounded-full ${
                  index === i
                    ? "scale-100 bg-[#379b4b]"
                    : "bg-gray-400 dark:bg-slate-800"
                }`}
                key={i}
                onClick={() => handleSelect(i)}
              />
            ))}
          </div>
        </div>
       <Svg/>



      </div>
    </section>
  );
};

export default Testimonial;

