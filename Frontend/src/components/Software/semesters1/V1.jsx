import React, { useState, useRef } from 'react';
import Video1 from '../Video1'; // Ensure the path to Video1 is correct
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import maaz from "../../../../public/maaz.jpg"
import TeacherCard from './VT1'; // Renaming VT1 to TeacherCard for clarity
import khalid from '../../../../public/khalid2.jpg'
import shahzaib from '../../../../public/shahzaib.jpg'
import zain from '../../../../public/zain.jpg'
import hashir from '../../../../public/hashir.jpg'

const V1 = () => {
  const [activeVideoId, setActiveVideoId] = useState(null); // Track the active video ID
  const [activeVideoId2, setActiveVideoId2] = useState(null);
  
  const videoRefs = useRef([]); // Track video elements to scroll to them
  const videoRefs2 = useRef([]);
  // Define an array of video objects
  const videoData = [
    { id: 'video2', url: 'https://drive.google.com/file/d/1HSHGvpNP1FgAGKbe_-7h9ew7P95RZDrP/preview', title: 'Week 2 / Variable & Operators', description: 'Introduction to Week 2 topics' },
    { id: 'video3', url: 'https://drive.google.com/file/d/1abxZXkKw8Vodj8DQrgj05xagdrdTeGFt/preview', title: 'Week 3 / Formatted Input/Output', description: 'Overview of Week 3 content' },
    { id: 'video4', url: 'https://drive.google.com/file/d/1tFTKDY0DgZMJK-cGm75RZ1WHe-cfoZxe/preview', title: 'Week 4 / Selections', description: 'Detailed Week 4 lecture' },
    { id: 'video5', url: 'https://drive.google.com/file/d/1V37kEm27aXTorWa26-_cgZkVDFlOQOXX/preview', title: 'Week 5 / Iteration With Loops', description: 'Week 5 insights and explanations' },
    { id: 'video6', url: 'https://drive.google.com/file/d/1OUZREh0sewJ-rxoWEmPPfLhd2o000TFo/preview', title: 'Week 6 / Nested Control Structures', description: 'Concepts covered in Week 6' },
    { id: 'video7', url: 'https://drive.google.com/file/d/1X1dA0eBAVaLeW8xqSib4I1Iwn2GkKV0Y/preview', title: 'Week 7 / Functions' },
    { id: 'video8', url: 'https://drive.google.com/file/d/1YMzFeGNb3UViOUQz6wrDGoz1h6Rt-uba/preview', title: 'Week 8 / List', description: 'Overview of Week 8' },
    { id: 'lab8', url: 'https://drive.google.com/file/d/1GM5R9cjbBirSJh4E2kU9eqsIX2Z8NZ8-/preview', title: 'Lab(Listing) 08', description: 'Lab work for Week 8' },
    { id: 'video9', url: 'https://drive.google.com/file/d/10JKgSr9spxosTTWOQ8S0aswZqN6DeK0Z/preview', title: 'Week 9 / Searching & Sorting', description: 'Week 9 discussion' },
    { id: 'lab9', url: 'https://drive.google.com/file/d/14vKCVZZLQH3LqaDwEkX6LGcpKCJ_wcfa/preview', title: 'Lab 09 (Searching & Sorting)', description: 'Lab on Searching and Sorting' },
    { id: 'video10', url: 'https://drive.google.com/file/d/1YaXWVhPiQ47aOO7zj_yvvPUoV3T13Rcd/preview', title: 'Week 10 / Tuple & Dictionary', description: 'Content for Week 10' },
    { id: 'lab10', url: 'https://drive.google.com/file/d/1rgi0MOIwcnUvFw0LYGx7f6_gWRYyGo1d/preview', title: 'Lab 10 (Tuple)', description: 'Lab work on Tuples' },
    { id: 'lab10b', url: 'https://drive.google.com/file/d/1VDMkyOhUlMmzEhJLwG7AI0RGuZmOl7J1/preview', title: 'Lab 10 (Dict)', description: 'Lab work on Dictionaries' },
    { id: 'lab11', url: 'https://drive.google.com/file/d/1VDMkyOhUlMmzEhJLwG7AI0RGuZmOl7J1/preview', title: 'Lab 11 (Modules & Packages)', description: 'Lab on Modules and Packages' },
    { id: 'video12', url: 'https://drive.google.com/file/d/1i1fBaaPoZswDGYx9ABZfBPPaeIrmDPCB/preview', title: 'Week 12 / Strings', description: 'Week 12 lecture' },
    { id: 'video13', url: 'https://drive.google.com/file/d/11mA8P-pAImyaqSt8qRB0VwHoLLdGxjoz/preview', title: 'Lab 12 (Strings)', description: 'Lab on Strings' },
    { id: 'video13b', url: 'https://drive.google.com/file/d/1rmC9xMbFLyxeyjvwc4fBwcGKqDxIqX36/preview', title: 'Week 13 / File Processing', description: 'Week 13 discussion' },
    { id: 'video14', url: 'https://drive.google.com/file/d/106Fw-XmZyMJQlecPwLYhAK-9dONQmT_u/preview', title: 'Week 14 / Error & Exceptions' },
  ];

  const videoData1 = [
    { id: 'video2', url: 'https://drive.google.com/file/d/1iELRMEZRyEJz5MD7InsLgnR9GPitQVb1/preview', title: 'Inner Product of Matrix', description: 'Inner Product of Matrix' },
    { id: 'video3', url: 'https://drive.google.com/file/d/1xCf0RwTXLXqXeAzcb-CkdAhJ9WUyWNUX/preview', title: 'Inner Product for Polynomials', description: 'Inner Product for Polynomials' },
    { id: 'video4', url: 'https://drive.google.com/file/d/1LgEK3p4D3yqZCuItUiG0VSfeGbkAGfH0/preview', title: 'Eigen Vectors', description: 'Eigen Vectors' },
    { id: 'video5', url: 'https://drive.google.com/file/d/1Oear9iJOleOcshuKI5VQ0gyLlZf2NoLE/preview', title: 'Subspace', description: 'Subspace' },
    { id: 'video6', url: 'https://drive.google.com/file/d/12azB3cp1zbVp70NyM2ImZ5Hnx5i1jlaS/preview', title: 'Linearly Independent', description:'Linearly Independent' },
    { id: 'video7', url: 'https://drive.google.com/file/d/1NNORBkGrXtFeCUtCwfhg-Wo7C15iNKkn/preview', title: 'Linearly Combination' },
    { id: 'video8', url: 'https://drive.google.com/file/d/1Mtd97ybLbLabPGBgYC4XSscJVKnwINzZ/preview', title: 'Vector Space', description: 'Vector Space' },
    { id: 'lab8', url: 'https://drive.google.com/file/d/1MFBmtrRR6P4HwQoJLaBYJeIigtKXHR7E/preview', title: 'SPAN', description: 'SPAN' },
    { id: 'video9', url: 'https://drive.google.com/file/d/1eB5iHeFj9ls6pQ5u0r8PtGEY7pvlv2kP/preview', title: 'Inner Product Space', description: 'Inner Product Space' },
    { id: 'lab9', url: 'https://drive.google.com/file/d/1hm_RXYY9xFRJELXsosRgZq0vdy8GeQXA/preview', title: 'Graham Schmmidi Process', description: 'Graham Schmmidi Process' },
    { id: 'video10', url: 'https://drive.google.com/file/d/1UoZLSPwJEXQ0j_ND2W40vbQCRrLkIUXs/preview', title: 'Angle Between Vectors', description: 'Content for Week 10' },
    { id: 'lab10', url: 'https://drive.google.com/file/d/1U2HuGH4Mm8Un0Tck7jX4l6es2-T5mXL6/preview', title: 'How to Solve Baises questions', description: 'How to Solve Baises questions' },
    { id: 'lab10c', url: 'https://drive.google.com/file/d/195oCeh92OX1vR_MSz_9ilANKVCz8oWMB/preview', title: 'Dimensions & Linear Transformation Pt.1', description: 'Linear Transformation' },
    { id: 'lab10b', url: 'https://drive.google.com/file/d/1TbXHLwnKgUEgDNX-NsJaxGCabrP0Vxbh/preview', title: 'Linear Transformation Pt.2', description: 'Linear Transformation' },
  ];

  const handleVideoClick = (id, index) => {
    setActiveVideoId(id); // Set the clicked video as the active video

    // Scroll to the selected video on mobile after a slight delay to ensure rendering
    setTimeout(() => {
      if (videoRefs.current[index]) {
        videoRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };
  const handleVideoClick2 = (id, index) => {
    setActiveVideoId2(id); // Set the clicked video as the active video

    // Scroll to the selected video on mobile after a slight delay to ensure rendering
    setTimeout(() => {
      if (videoRefs2.current[index]) {
        videoRefs2.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };
  // Teacher data array
  const teacherData = [
    {
      id: 1,
      name: "M. Khalid Hussain",
      department: "3rd Semester (2024)",
      description: "An experienced web developer with 96 marks in PF, currently studying in the 3rd semester. Taught all weekly lectures.",
      image: khalid
    },
    {
      id: 2,
      name: "Shahzaib Khurshidi",
      department: "3rd Semester (2024)",
      description: "A 3rd-semester student and classmate of Khalid. Shahzaib has taught some labs, Khalid supervised it or providing corrections as needed.",
      image: shahzaib
    },
    {
      id: 3,
      name: "Hashir",
      department: "3rd Semester (2024)",
      description: "A 3rd-semester student and classmate of Khalid. Hashir has recorded all the lectures, which is why you have access to these videos. Thanks to Hashir for this contribution!",
      image: hashir
    },
    {
      id: 4,
      name: "Syed Murtaza Zaidi",
      department: "3rd Semester (2024)",
      description: "A 3rd-semester student and classmate of Khalid. Murtaza actively participates in lectures by asking questions and engaging with the material. His contributions help make the videos more understandable. Thanks to Murtaza for his involvement! ",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Zain",
      department: "4th Semester (2024)",
      description: "A 3rd-semester student and classmate of Khalid. Zain actively participates in lectures by asking questions and engaging with the material. His contributions help make the videos more understandable. Thanks to Zain for his involvement!",
      image: zain
    },
  
  ];

  const teacherData2 = [
    {
      id: 1,
      name: "Maaz",
      department: "3rd Semester (2024)",
      description: "A 3rd-semester student, currently Class Representative (CR), with strong academic performance in previous exams and effective class management skills.",
      image: maaz
    },
   
  ];



  return (
    <div>
      <Navbar />
      <div className="text-center ">
        <h2 className="text-2xl md:text-4xl font-bold leading-normal mt-20">Programming Fundamentals Lectures</h2>
      </div>

      {/* Centering the Back button */}
      <div className="flex justify-center mt-6">
        <Link to="/semester1">
          <button className="bg-[#692f95] text-white px-4 py-2 border-none rounded-md hover:bg-[#573b7c] transition duration-300">
            Back
          </button>
        </Link>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {videoData.map((video, index) => (
          <div
            key={video.id}
            className={`relative flex flex-col items-center justify-center text-center bg-[#692f95] text-white p-4 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer 
              ${activeVideoId === video.id ? 'shadow-2xl scale-105' : 'shadow-md'}`}
            onClick={() => handleVideoClick(video.id, index)}
            onTouchStart={() => handleVideoClick(video.id, index)} // Handle mobile touch events
            ref={(el) => (videoRefs.current[index] = el)} // Store ref for scrolling
          >
            <h2 className="text-lg font-bold">{video.title}</h2>
            {/* Render Video1 component only for the active video */}
            {activeVideoId === video.id ? <Video1 fileUrl={video.url} /> : <p className="text-sm">Click to play</p>}
          </div>
        ))}
      </div>

      {/* Teacher Cards */}
      <h1 className="text-center text-4xl font-bold mt-12 mb-6">Faculty</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {teacherData.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            name={teacher.name}
            department={teacher.department}
            description={teacher.description}
            image={teacher.image}
          />
        ))}
      </div>


      <div className="text-center mt-20">
        <h2 className="text-2xl md:text-4xl font-bold leading-normal">Linear Algebra</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {videoData1.map((video, index) => (
          <div
            key={video.id}
            className={`relative flex flex-col items-center justify-center text-center bg-[#692f95] text-white p-4 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer 
              ${activeVideoId2 === video.id ? 'shadow-2xl scale-105' : 'shadow-md'}`}
            onClick={() => handleVideoClick2(video.id, index)}
            onTouchStart={() => handleVideoClick2(video.id, index)} // Handle mobile touch events
            ref={(el) => (videoRefs2.current[index] = el)} // Store ref for scrolling
          >
            <h2 className="text-lg font-bold">{video.title}</h2>
            {/* Render Video1 component only for the active video */}
            {activeVideoId2 === video.id ? <Video1 fileUrl={video.url} /> : <p className="text-sm">Click to play</p>}
          </div>
        ))}
      </div>


       {/* Teacher Cards */}
       <h1 className="text-center text-4xl font-bold mt-12 mb-6">Faculty</h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {teacherData2.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            name={teacher.name}
            department={teacher.department}
            description={teacher.description}
            image={teacher.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default V1;
