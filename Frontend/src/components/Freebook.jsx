import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
// import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Freebook.css"; // Ensure this file contains the corrected CSS

// Custom arrow component
const CustomArrow = ({ type, onClick }) => (
  <div
    className={`custom-arrow custom-arrow-${type}`}
    onClick={onClick}
  >
    {type === "prev" ? "<" : ">"}
  </div>
);

function Freebook({ searchQuery }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((book) => book.category === "Free");
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  // Filter books based on searchQuery
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: true,
    prevArrow: <CustomArrow type="prev" />,
    nextArrow: <CustomArrow type="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col">
        <div>
          <h1 className="font-semibold text-3xl pb-2"><b>Top News!!</b></h1>
          <Slider {...sliderSettings}>
            {/* Add any default slides or images here if needed */}
            <div className="slider-slide md:ml-[70px]">
              <img src="../../poster1(3).png" alt="Slide 1" />
              <div className="slider-caption">Slide 1</div>
            </div>
            <div className="slider-slide md:ml-[70px]">
              <img src="../../poster2.png" alt="Slide 2" />
              <div className="slider-caption">Slide 2</div>
            </div>
            <div className="slider-slide md:ml-[70px]">
              <img src="../../poster3.png" alt="Slide 3" />
              <div className="slider-caption">Slide 3</div>
            </div>
            <div className="slider-slide md:ml-[70px]">
              <img src="../../poster4.png" alt="Slide 4" />
              <div className="slider-caption">Slide 4</div>
            </div>
          </Slider>
          <p className="slider-slide md:ml-[70px] mt-8">
          Stay updated with the latest headlines and important stories. From school events to academic achievements, we bring you the news that matters to our student community
          </p>
        </div>

        {/* <div className="mt-8">
          <h2 className="font-semibold text-xl pb-2">Explore More Books</h2>
          {filteredBooks.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Freebook;
