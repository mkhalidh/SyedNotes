import React, { useState } from "react";
import Card from './Card';
import './Course.css'; 
import { Link, useNavigate } from "react-router-dom";
import BetaNotification from "../home/BetaNotification";
// import H1 from "./Testing/H1"
import book1 from "../../public/books/book1.jpg"
import book2 from "../../public/books/book2.jpg"
import book3 from "../../public/books/book3.jpg"
import book4 from "../../public/books/book4.jpg"
import book5 from "../../public/books/book5.jpg"
import book6 from "../../public/books/book6.jpg"
import book7 from "../../public/books/book7.jpg"
import book8 from "../../public/books/book8.jpg"
import book9 from "../../public/books/book9.jpg"
import book10 from "../../public/books/book10.jpg"
import book11 from "../../public/books/book11.jpg"
import book12 from "../../public/books/book12.jpg"
import book13 from "../../public/books/book13.jpg"
import book14 from "../../public/books/book14.jpg"
import  book15 from "../../public/books/book15.jpg"
import book16 from "../../public/books/book16.jpg"
import book17 from "../../public/books/book17.jpg"
import book18 from "../../public/books/book18.png"
import book19 from "../../public/books/book19.jpg"
import book20 from "../../public/books/book20.jpg"
import book21 from "../../public/books/book21.jpg"
import book22 from "../../public/books/book22.jpg"
import book23 from "../../public/books/book23.jpg"
import book24 from "../../public/books/book24.jpg"






function Course() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const cards = [
    {
      heading: "Semester 1",
      images: [
        book1,
        book2,
        book3,
      ]
    },
    {
      heading: "Semester 2",
      images: [
      book4,
      book5,
        book6,
      ]
    },
    {
      heading: "Semester 3",
      images: [
        book7,
        book8,
        book9,
      ]
    },
    {
      heading: "Semester 4",
      images: [
      book10,
      book11,
        book12,
      ]
    },
    {
      heading: "Semester 5",
      images: [
      book13,
      book14,
        book15,
      ]
    },
    {
      heading: "Semester 6",
      images: [
        book16,
        book17,
        book18,
      ]
    },
    {
      heading: "Semester 7",
      images: [
        book19,
        book20,
        book21,
      ]
    },
    {
      heading: "Semester 8",
      images: [
        book22,
        book23,
        book24,
      ]
    }
  ];

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Filter cards based on search query
  const filteredCards = cards.filter(card =>
    card.heading.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <BetaNotification />
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-[#37b350]">Here! :)</span>
        </h1>
        <p className="mt-12">
        Explore our comprehensive course sections for semesters 1 through 8. Each card offers a selection of notes and resources tailored to help you succeed in your studies. Dive into a wealth of information designed to enhance your understanding and support your academic journey!
        </p>
        <Link to="/">
          <button className="mt-6 bg-[#692f95] text-white px-4 py-2 border-none rounded-md hover:bg-[#573b7c] duration-300">
            Back
          </button>
        </Link>
      </div>
     

      <div className="mt-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a semester..."
          className="px-4 py-2 border rounded-md w-full dark:text-black"
        />
      </div>

      <div className="app1">
        {/* <h1>My Cool Card Component</h1> */}
        
        <div className="card-container">
  {filteredCards.map((card) => (
    <div className="relative items-center" key={card.heading}>
    <h2 className="text-xl ">{card.heading}
    </h2>
    <Card
      key={card.heading} // Use heading as key for better uniqueness
      heading={card.heading}
      images={card.images}

      
      onClick={() => {
        const semesterNumber = card.heading.split(" ")[1]; // Extract the semester number
        navigate(`/semester${semesterNumber}`); // Navigate to the correct semester
      }
    
    
    } 
    />
    </div>
  ))}
</div>

      </div>

      {filteredCards.length === 0 && (
      <div className="flex justify-center items-center py-4 mt-4 text-gray-500 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      No semesters found.
    </div>
     )}
    </div>
  );
}

export default Course;
