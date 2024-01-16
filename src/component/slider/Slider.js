import React, { useState } from 'react';
import Slide from './Slide';
import './Slider.css';

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  

  return (
    <div className="slider-container">
    <div
      className="slider"
      style={{
        transform: `translateX(-${currentSlide * 33.33}%)`, // 100 / 3
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      {slides.map((slide, index) => (
        <Slide
          key={index}
          content={slide}
          background={
            index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
          }
        />
      ))}
    </div>
    <div className="controls">
      <button onClick={prevSlide} className="prev-button">
        Prev
      </button>
      <button onClick={nextSlide} className="next-button">
        Next
      </button>
    </div>
  </div>
  )
}
