// NewsSlider.js
import React from 'react';
import './NewsSlider.css';

const newsItems = [
    "Breaking News: 🚀 Welcome to our website! We are currently in beta. Some features may not be fully functional. Thank you for your patience!",
    
    "🌟 This website was created by Muhammad Khalid Hussain, a student of Software Engineering at Sir Syed University, currently in the 3rd semester.",
    // Add more news items here
];

const NewsSlider = () => {
    return (
        <div className="slider">
            <div className="slider-content">
                {newsItems.map((item, index) => (
                    <div key={index} className="news-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSlider;
