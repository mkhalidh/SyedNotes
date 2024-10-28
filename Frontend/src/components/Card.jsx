import React, { useState, useEffect } from 'react';
import './Card.css'; 

const Card = ({ heading, images, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Card visual ${index}`}
            className={`card-image ${index === currentImageIndex ? 'fade-in' : 'fade-out'}`}
          />
        ))}
      </div>
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
      </div>
    </div>
  );
};

export default Card;
