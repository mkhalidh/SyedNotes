import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import '../../Course.css'; 
import Card from "../../Card";  // Ensure this matches the name of your actual card component
import book1 from "../../../../public/books/book1.jpg"
import  book2 from "../../../../public/books/book2.jpg"
import   book3 from "../../../../public/books/book3.jpg"
import book4 from "../../../../public/books/book4.jpg"
import book5 from "../../../../public/books/book5.jpg"
import book6 from "../../../../public/books/book6.jpg"
import book7 from "../../../../public/books/book7.jpg"


function Semester3() {
  const navigate = useNavigate();  // Define the navigate function

  const cards = [
    {
      heading: "Student Notes",
      images: [
        book1, book2, book3, 
      ]
    },
    // {
    //   heading: "Teacher Material",
    //   images: [
    //     "https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0",
    //     "https://miro.medium.com/v2/resize:fit:1080/1*8DDN_DRuSBlM74dVYUjR9Q.png",
    //     "https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg",
    //   ]
    // },
    {
      heading: "Past Papers",
      images: [
        book4, book5, book6, book7,   
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
              onClick={() => navigate(`/semester3/student${index + 1}`)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Semester3;
