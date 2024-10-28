import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import man from '../../public/hammad.jpg';
import man2 from '../../public/khalid2.jpg'
import landscape from '../../public/books/book15.jpg'
// Placeholder URLs for images and profile links
const developerImage = man2; // Replace with actual developer image URL
const contributorImage = man; // Replace with actual contributor image URL
const developerLinkedIn = "https://www.linkedin.com/in/muhammad-khalid-hussain-384752202/"; // Replace with actual LinkedIn profile URL
const developerGitHub = "https://github.com/mkhalidh"; // Replace with actual GitHub profile URL
const developerLeetCode = "https://leetcode.com/u/mkhalidh/"; // Replace with actual LeetCode profile URL
const contributorLinkedIn = "https://www.linkedin.com/in/hammad-kashmiri-b24810291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "; // Replace with actual LinkedIn profile URL
const contributorGithub = "https://github.com/HammadKashmiri1"
const contributorLeetcode = "https://leetcode.com/u/HammadKashmiri_/"
const landscapeImage =landscape
function About() {
  return (
    <>
      <Navbar />
      <div className="about-page container mx-auto py-16 px-6">
        {/* Intro Section with Landscape Image */}
        <section 
          className="relative mb-16" 
          style={{ backgroundImage: `url(${landscapeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center text-white py-16 px-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
            <p className="text-lg mb-6">
              We are a team of dedicated professionals combining technical expertise with creativity to deliver innovative solutions. Explore our platform and meet the talented individuals behind it.
            </p>
          </div>
        </section>

        {/* Section for Developer */}
        <section className="about-section flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="about-text md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Meet the Developer(Khalid)</h2>
            <p className="text-lg mb-4">
            Our developer(Khalid) excels in the MERN stack (MongoDB, Express.js, React, Node.js), Java, and Python, bringing a deep understanding of modern web technologies. Their 2-3 years of graphic design experience enhance their ability to create both functional and visually appealing applications.
            </p>
            <p className="text-lg mb-6">
            Passionate about solving complex problems, they continually advance their software development skills and embrace new learning opportunities. Their unique combination of technical and creative skills ensures that they deliver solutions that are not only effective but also aesthetically engaging, making them a key asset to any project.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={developerLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                aria-label="Developer LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-linkedin w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zM4.943 12.304V6.169H3.269v6.135h1.674zm.843-7.393a1.004 1.004 0 1 0 0-2.008 1.004 1.004 0 0 0 0 2.008zm4.913 7.393V8.594c0-.936-.336-1.575-1.177-1.575-.641 0-1.024.433-1.191.853-.061.147-.077.352-.077.559v3.873h1.675V8.944c0-.29.021-.579.098-.8.216-.56.709-.857 1.206-.857.854 0 1.195.644 1.195 1.587v3.43h1.674zm-5.756 0V6.169h-1.67v6.135h1.67z" />
                </svg>
              </a>
              <a
                href={developerGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600"
                aria-label="Developer GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-github w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href={developerLeetCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-800"
                aria-label="Developer LeetCode"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-code w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.719 12.042L1.327 8l4.392-4.042L4.515 2.58.058 7.58a1.493 1.493 0 0 0 0 2.84l4.457 4.998 1.204-1.376zM10.281 12.042l4.392-4.042-4.392-4.042-1.204 1.376 4.457 4.998-4.457 4.998 1.204-1.376z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="about-image md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <img
              src={developerImage}
              alt="Developer"
              className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto"
            />
          </div>
        </section>

        {/* Section for Content Contributor */}
        <section className="about-section flex flex-col md:flex-row items-center justify-between">
          <div className="about-image md:w-1/2 mb-8 md:mb-0">
            <img
              src={contributorImage}
              alt="Content Contributor"
              className="rounded-lg shadow-lg w-full md:w-3/4 mx-auto"
            />
          </div>
          <div className="about-text md:w-1/2 text-center md:text-left ">
          <div>
            <h2 className="text-3xl font-bold mb-4">Content Contributor(Hammad)</h2>
            <p className="text-lg mb-4 ">
            A Frontend Developer and Android Mobile App Developer, and an ACCP Prime Graduate from Aptech, with a deep understanding of software engineering practices. Proficient in HTML, CSS, JavaScript, and Android development tools, with experience in building responsive and dynamic applications. Eager to stay ahead in the rapidly changing tech landscape, constantly exploring emerging technologies and frameworks to enhance development capabilities. Driven by a passion for creating seamless user experiences and optimized mobile solutions, with a commitment to solving complex problems through innovative digital approaches.
            </p>
            </div>
            {/* <p className="text-lg mb-6">
              Passionate about creating valuable resources, they are key to maintaining the excellence of our platform's content.
            </p> */}
            <div className="flex gap-3">
            <a
              href={contributorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-linkedin w-6 h-6 mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zM4.943 12.304V6.169H3.269v6.135h1.674zm.843-7.393a1.004 1.004 0 1 0 0-2.008 1.004 1.004 0 0 0 0 2.008zm4.913 7.393V8.594c0-.936-.336-1.575-1.177-1.575-.641 0-1.024.433-1.191.853-.061.147-.077.352-.077.559v3.873h1.675V8.944c0-.29.021-.579.098-.8.216-.56.709-.857 1.206-.857.854 0 1.195.644 1.195 1.587v3.43h1.674zm-5.756 0V6.169h-1.67v6.135h1.67z" />
              </svg>
             
            </a>
            <a
                href={contributorGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600"
                aria-label="Developer GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-github w-6 h-6"
                  viewBox="0 0 16 16"
                >

                  Contributor-Github
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href={contributorLeetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-800"
                aria-label="Developer LeetCode"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-code w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.719 12.042L1.327 8l4.392-4.042L4.515 2.58.058 7.58a1.493 1.493 0 0 0 0 2.84l4.457 4.998 1.204-1.376zM10.281 12.042l4.392-4.042-4.392-4.042-1.204 1.376 4.457 4.998-4.457 4.998 1.204-1.376z" />
                </svg>
              </a>
              </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
