
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oo0tHTZ0hgXIfdUjC7TIeTOCXhUpvRBd3g&usqp=CAU",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oo0tHTZ0hgXIfdUjC7TIeTOCXhUpvRBd3g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oo0tHTZ0hgXIfdUjC7TIeTOCXhUpvRBd3g&usqp=CAU",
    // Add more image URLs as needed
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);  


  return (
     <div className='app'>
      <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      </div>
    
      <div className="slider-nav">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentSlide ? "active" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );

}

export default App;
