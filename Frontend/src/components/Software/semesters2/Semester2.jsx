import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; ; 
import Card from "../../Card";  // Ensure this matches the name of your actual card component
import book1 from "../../../../public/books/book1.jpg"
import  book2 from "../../../../public/books/book2.jpg"
import   book3 from "../../../../public/books/book3.jpg"
import book4 from "../../../../public/books/book4.jpg"
import book5 from "../../../../public/books/book5.jpg"
import book6 from "../../../../public/books/book6.jpg"
import book7 from "../../../../public/books/book7.jpg"
import book8 from "../../../../public/books/book8.jpg"
import book9 from "../../../../public/books/book9.jpg"

import book10 from "../../../../public/books/book10.jpg"
import book11 from "../../../../public/books/book11.jpg"
import book12 from "../../../../public/books/book12.jpg"


function Semester2() {
  const navigate = useNavigate();  // Define the navigate function

  const cards = [
    {
      heading: "Student Notes",
      images: [

        book1,
        book2,
        book3,
    
      ]
    },
    {
      heading: "Teacher Material",
      images: [
        book4,
        book5,
        book6,
      
      ]
    },
    {
      heading: "Past Papers",
      images: [
        book7,
        book8,
        book9,
      
      ]
    },
    {
      heading: "Videos",
      images: [
        book10,
        book11,
        book12,
      ]
    },
    // Add more card objects as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="mt-[100px] app1">
        <div className="card-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              heading={card.heading}
              images={card.images}
              onClick={() => navigate(`/semester2/student${index + 1}`)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Semester2;
