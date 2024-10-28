import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner"; // Ensure Banner is a valid image path or component
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import NewsSlider from "../newsslider/NewsSlider";
import FAQ from "../components/FAQ";
import Testimonial23 from "../components/Testonomial";
import WaterFillLoader from "./WaterFillLoader"; // Import WaterFillLoader
import visionImage from '../../public/vision.jpg'; // Adjust path as needed

function Home() {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Simulate content loading (adjust time if needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set a 3-second loading time

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <WaterFillLoader />; // Show the water fill loader while loading
  }

  return (
    <>
      <Navbar />
      <NewsSlider />
      <Banner />
      <Freebook />
      <section className="vision-section bg-[#dcb3e38b] max-w-screen-2xl container mx-auto md:px-20 px-4 my-10 flex flex-col md:flex-row items-center justify-between">
        <div className="vision-text w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-36 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 ml-5">Our Vision</h2>
          <p className="text-sm md:text-lg mb-4 ml-5">
            At SyedNotes, we recognize the significant challenge university students face in managing vast amounts of academic data. Our platform was developed to address this issue by providing a centralized solution for storing and accessing university-related information.
          </p>
          <p className="text-sm md:text-lg mb-6 ml-5">
            By allowing students to easily upload and organize their data, we aim to alleviate the stress and confusion caused by disorganized information. Our vision is to create a streamlined experience where students can focus more on their studies and less on managing their data.
          </p>
        </div>
        <div className="vision-image w-full md:w-1/2 mt-12 md:mt-0 object-cover">
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-lg shadow-lg w-full md:w-[550px] md:h-[400px]  mx-auto object-cover"
          />
        </div>
      </section>
      <Testimonial23 />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
