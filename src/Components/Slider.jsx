import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./login.css";

const Slider = () => {
  const slides = [
    { id: 1, content: 'Image 1' },
    { id: 2, content: 'Image 2' },
    { id: 3, content: 'Image 3' }
  ];

  return (
    <Carousel className="mb-4" >
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div className="d-flex justify-content-center align-items-center slider-content">
            <h4>{slide.content}</h4>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;