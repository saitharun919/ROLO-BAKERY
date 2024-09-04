import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import './curosel.css'; // Import the external CSS file
import image1 from './Image/image1.jpg';
import image2 from './Image/image2.jpg';
import image3 from './Image/image3.jpg';
import background from './Image/background.jpg'

const images = [
  {
    src: background,
    alt: 'Image',
    text: 'Annual Sports Day - Celebrating Excellence in Sports',
  },
  {
    src: image2,
    alt: 'Image 2',
    text: 'Science Exhibition - Showcasing Student Innovations',
  },
  {
    src: image3,
    alt: 'Image 3',
    text: 'Cultural Fest - Embracing Diversity and Creativity',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSelectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <ResponsiveCarousel
        selectedItem={currentIndex}
        onChange={handleSelectSlide}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="carousel-arrow carousel-arrow-prev"
            >
              &lt;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="carousel-arrow carousel-arrow-next"
            >
              &gt;
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image.src}
              alt={image.alt}
              className="carousel-image"
            />
            {/* <div className="carousel-caption">
              <p>{image.text}</p>
            </div> */}
          </div>
        ))}
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;