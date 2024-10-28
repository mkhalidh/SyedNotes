import React, { useState, useRef } from 'react';
import Video1 from '../Video1'; // Ensure the path to Video1 is correct
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import TeacherCard from './VT2'; // Renaming VT1 to TeacherCard for clarity
import maaz from "../../../../public/maaz.jpg"


const V2 = () => {
  const [activeVideoId, setActiveVideoId] = useState(null); // Track the active video ID
  const [activeVideoId2, setActiveVideoId2] = useState(null);
  
  const videoRefs = useRef([]); // Track video elements to scroll to them
  const videoRefs2 = useRef([]);
  // Define an array of video objects
  const videoData = [
    { id: 'video2', url: 'https://drive.google.com/file/d/1opoQXUYXEGeohv9Sf3TBRuV-YpkiPxOa/preview', title: 'Midterm Numericals Topics With Formula (Columb"s Law)', description: 'Introduction to Week 2 topics' },
    { id: 'video3', url: 'https://drive.google.com/file/d/19ye1954_bUAmmhdHTEN6mvgvcvWOYoHJ/preview', title: 'Midterm  Numericals Topics With Formula (Faraday"s Law)', description: 'Overview of Week 3 content' },
    { id: 'video4', url: 'https://drive.google.com/file/d/1GhlSAokdhfsYJeNuhPwo7Z4MFCQRs1do/preview', title: 'Midterm  Numericals Topics With Formula (Electric Potential"s Law)', description: 'Detailed Week 4 lecture' },
    { id: 'video5', url: 'https://drive.google.com/file/d/1GUfAZ6dM7eH82STlzroPZhJpD-k1MXBM/preview', title: 'Midterm  Numericals Topics With Formula (Electric Field/Intensity)', description: 'Week 5 insights and explanations' },
    { id: 'video6', url: 'https://drive.google.com/file/d/1Tq7eEPuKC72EAlQv427XkvJONlOGhaqK/preview', title: 'Midterm  Numericals Topics With Formula (Gausse"s Law)/Capacitors ', description: 'Concepts covered in Week 6' },
    { id: 'video7', url: 'https://drive.google.com/file/d/17RB78NGyo8f-3vG4h5_Nup33i4JQN5Ic/preview', title: 'Midterm  Numericals Topics With Formula (Capacitance of Parallel Plate Capacitor)' },
    { id: 'video8', url: 'https://drive.google.com/file/d/158kLzxjaDqcY5oUbFkP7EySUIhJ3f20W/preview', title: 'Midterm  Numericals Topics With Formula (-Electric Current-)', description: 'Overview of Week 8' },
    { id: 'lab8', url: 'https://drive.google.com/file/d/1gl33YfhcjYY-Ep-0idONyKckHRK2W-lv/preview', title: 'Midterm  Numericals Topics With Formula (-Energy Stored In Capacitor-)', description: 'Lab work for Week 8' },
    { id: 'video9', url: 'https://drive.google.com/file/d/11u661PypcQWhDpRNLpa9GF2mtXnBnmCK/preview', title: 'Midterm  Numericals Topics With Formula (-Ohm"s Law-)', description: 'Week 9 discussion' },
    { id: 'lab9', url: 'https://drive.google.com/file/d/17EXa_fcbVvsj0TjHhO_utW5muhsMwic0/preview', title: 'Midterm  Numericals Topics With Formula (-Electro Motive Force (EMF)-)', description: 'Lab on Searching and Sorting' },
    { id: 'video10', url: 'https://drive.google.com/file/d/1WYRI3ySbxVhp3ktRX2boao6Nuk99ZwLD/preview', title: 'Midterm  Numericals Topics With Formula (-Ampere"s Law-)', description: 'Content for Week 10' },
    { id: 'lab10', url: 'https://drive.google.com/file/d/1Op3h8lSlitgumjI75CDmNawUQHNcB5Rs/preview', title: 'Midterm  Numericals Topics With Formula (-Dot & Cross Product (Vector)-)', description: 'Lab work on Tuples' },

  ];

  const videoData1 = [
    { id: 'video2', url: 'https://drive.google.com/file/d/1XnGcefR2ekK4dD5XHekp28d480GfWxVU/preview', title: 'Exercise 1.2 (Composite Functions)', description: '(Composite Functions)' },
    { id: 'video3', url: 'https://drive.google.com/file/d/1WnCMyzmKZTdEIoXwswduW6POyZdTDvEz/preview', title: 'Exercise 1.2 Continue (Odd/Even Functions)', description: ' (Odd/Even Functions)' },
    { id: 'video4', url: 'https://drive.google.com/file/d/1losU3SuWDV4V-WQM_nKu1Pi-csT2mVPq/preview', title: 'Exercise 1.2 Graph(Function)', description: 'Exercise 1.2 Graph(Function)' },
    { id: 'video5', url: 'https://drive.google.com/file/d/1ZlhcbovNuYv8Eq5aVQIWlawOYdf-UNry/preview', title: 'Exercise 1.1 (Domain/Range)', description: 'Exercise 1.1 (Domain/Range)' },
    { id: 'video6', url: 'https://drive.google.com/file/d/1_77jFSihPahZ90hr5uO5dm8RQLMf1efN/preview', title: 'Exercise Function (Must Watch Before Start Functions Topic)', description:'(Must Watch Before Start Functions Topic' },
    { id: 'video7', url: 'https://drive.google.com/file/d/1p_wUJmZwcYVJ2EuX5VkuDb21QlgHo7Yp/preview', title: 'Furthermore f(g(x))) questions', description:'f(g(x))) ' },
    { id: 'video8', url: 'https://drive.google.com/file/d/1eVuTT2XzxpUN7ZZW1Qy-NBeNpNeW3_hS/preview', title: 'Exercise 2.2 (Limits) With Graphs', description: 'Exercise 2.2 (Limits) With Graphs' },
    { id: 'lab8', url: 'https://drive.google.com/file/d/10V9_UUIR0f2YD0W3tmztI6daeN4YaCKE/preview', title: 'Exercise 2.4', description: 'Exercise 2.4' },
    { id: 'video9', url: 'https://drive.google.com/file/d/11UNTyXKL_yeM8Ys6Zq6_xgAWZ83x6Y7i/preview', title: 'Exercise 2.5 (Continuous/Discontinuous)', description: 'Exercise 2.5 (Continuous/Discontinuous)' },
    { id: 'lab9', url: 'https://drive.google.com/file/d/1ltp-Lgk4iZyoHk0PKr2Wr-kmzjc8DjRY/preview', title: 'Exercise 3 - Differentiation', description: 'Graham Schmmidi Process' },
    { id: 'video10', url: 'https://drive.google.com/file/d/1UMOyiD_2sbxrsU1JpxfD0QBB-bsH608h/preview', title: 'Exercise 3.3 (first & 2nd Derivative)', description: 'Content for Week 10' },
    { id: 'lab10', url: 'https://drive.google.com/file/d/1XfHugpVSgIY-atgZj_ZzJyqtvLPJMS7D/preview', title: 'Exercise 3.4 (Velocity/Acceleration/Speed)', description: 'How to Solve Baises questions' },
    { id: 'lab10c', url: 'https://drive.google.com/file/d/1QwvLnGxBAObOkDHLY6RetheZ0mnrYTWJ/preview', title: 'Exercise 3.4 (Velocity/Acceleration/Speed) Pt.2', description: 'Linear Transformation' },
    { id: 'lab10b', url: 'https://drive.google.com/file/d/1kEW9qr_20m4D1dAhW8fFTDXBuRcvLZin/preview', title: 'Exercise 3.6', description: 'Exercise 3.6' },
    { id: 'lab10c', url: 'https://drive.google.com/file/d/1vuSHk6fcawVxHS7YWkkt1pRCC_ZpRLE5/preview', title: 'Exercise 3.7 Implicit differentiation', description: 'Exercise 3.7 Implicit differentiation' },

    { id: 'lab10d', url: 'https://drive.google.com/file/d/1rAV4JWYF3K-6n9AwcDGM1lGTwSGhqSAL/preview', title: 'Exercise 3.7 Equation of tangent/Normal', description: 'Exercise 3.6' },
    { id: 'lab10e', url: 'https://drive.google.com/file/d/12nY4rrHxB-KTCvZtlFg1xw5cOX4gEM5p/preview', title: 'Exercise 4.2 Mean Value Theorem', description: 'Exercise 3.6' },
    {id: 'lab10f', url:"https://drive.google.com/file/d/1EQtFzhHuKGni54iGMx4Dt16dQ6FaQjlJ/preview", title: 'Exercise 10.2 (Taylor And Meclaurin"s Series', description: 'Exercise'},
    {id: 'lab10g', url:"https://drive.google.com/file/d/17YuFm1ewR1J7pglQw67Y7WQa33FrdHZy/preview", title: 'Exercise 7.5 (L-Hopital Rules)', description: 'Exercise'},
    {id: 'lab10h', url:"https://drive.google.com/file/d/1O2fI-2xwo4NLnInIaFV1Byj-CCtjI4YI/preview", title: 'Exercise 5.4 (Area of Shaded reigon', description: 'Exercise'},
    {id: 'lab10i', url:"https://drive.google.com/file/d/1Jc-PJPEvr8T_cLBBQ9CetiFfMhjg_15h/preview", title: 'Exercise 4.4 (Point of Inflation , Maxima/Minima , Concave Up/Down)', description: 'Exercise'},
    {id: 'lab10j', url:"https://drive.google.com/file/d/1hu4M4gOGjWi7wJ_yEOAUvNsazjtbiT6g/preview", title: 'Chapter 12 (Vectors) (12.2, 12.3, 12.4, 12.5)', description: 'Exercise'},
    {id: 'lab10k', url:"https://drive.google.com/file/d/1YdBRAYNZOrAkpTnksZeBuNZjvcuJ1kI3/preview", title: 'Exercise 14.3/14.4(Chain Rules)/14.7(local Minima/Maxima)', description: 'Exercise'},
    {id: 'lab10l', url:"https://drive.google.com/file/d/1oLNC8hoFWBDZ8OE2CfxYLEWaZ8Vkq9g-/preview", title: 'Exercise 12.5', description: 'Exercise'},
    {id: 'lab10lm', url:"https://drive.google.com/file/d/13mM-4-teKzwX2zccS8_133QRckn1UTNy/preview", title: 'Exercise 11.3 (Polar/Rectangular Coordinates)', description: 'Exercise'},

    {id: 'lab10ln', url:"https://drive.google.com/file/d/1clmka-6-GB4VNwzu6PqTj6Ndppvjw1A3/preview", title: 'Exercise 8 (Integration Basic rules)', description: 'Exercise'},

    {id: 'lab10o', url:"https://drive.google.com/file/d/1DPPrT1TM5cLmIUOh1ptRIT7ObUib7mDo/preview", title: 'Exercise 15.1 (Double Integral) ', description: 'Exercise'},
    {id: 'lab10o', url:"https://drive.google.com/file/d/1-q3_SgzAf--6xclTZ_1Vi8PMjvL90VUv/preview", title: 'Exercise 8.5 (Partial Integration) ', description: 'Exercise'},
    {id: 'lab10o', url:"https://drive.google.com/file/d/1AhQiPZn0aT1QMO-KlC_Nez0KQgpCV-yy/preview", title: 'Exercise 8.4 (Formulas Integration) ', description: 'Exercise'},
    {id: 'lab10o', url:"https://drive.google.com/file/d/1s7Q86GNL0zLjO_yFWDmyGoAZvwSbhJVB/preview", title: 'Exercise 8.3 (Sinx/Cosx Integrations) ', description: 'Exercise'},
    {id: 'lab10o', url:"https://drive.google.com/file/d/1Dv-Ty_yENh-Rw9z2BItCKESKBj7YvDPp/preview", title: 'Exercise 8.2 (By Parts (Integrations)) ', description: 'Exercise'},
    {id: 'lab10o', url:"https://drive.google.com/file/d/1fNP9dcaK-59n6JUJQzlFodtmX3U1xF0H/preview", title: 'Exercise 8 (Basic Integrations) ', description: 'Exercise'},
    {id: 'lab10o', url:"https://drive.google.com/file/d/1Rhclp04XQCWLNdKlvnO-2YuUJJCbsgUP/preview", title: 'Exercise 14.7 (Problem solve) ', description: 'Exercise'},
    {id: 'lab10o', url:"https://drive.google.com/file/d/1s7Q86GNL0zLjO_yFWDmyGoAZvwSbhJVB/preview", title: 'Exercise 8.3 (Sinx/Cosx Integrations) ', description: 'Exercise'},
    // {id: 'lab10o', url:"https://drive.google.com/file/d/1s7Q86GNL0zLjO_yFWDmyGoAZvwSbhJVB/preview", title: 'Exercise 8.3 (Sinx/Cosx Integrations) ', description: 'Exercise'},



  
  
  
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
      name: "Maaz",
      department: "3rd Semester (2024)",
      description: "A 3rd-semester student, currently Class Representative (CR), with strong academic performance in previous exams and effective class management skills.",
      image: maaz
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
        <h2 className="text-2xl md:text-4xl font-bold leading-normal mt-20">Physics</h2>
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
        <h2 className="text-2xl md:text-4xl font-bold leading-normal">Calculas</h2>
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

export default V2;
