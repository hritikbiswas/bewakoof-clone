import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

function Slider() {
  const { sliders } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliders.length;
  const visibleSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleSlides = () => {
    let slides = [];
    for (let i = 0; i < visibleSlides; i++) {
      const slideIndex = (currentIndex + i) % totalSlides;
      slides.push(sliders[slideIndex]);
    }
    return slides;
  };

  return (
    <div className="w-full">
      <div className="flex overflow-hidden gap-3">
        {getVisibleSlides().map(slide => (
          <div key={slide.id} className="w-1/3 flex-shrink-0 transition-transform duration-500 ease-in-out">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      {/* Dots beneath the slider */}
      <div className="flex justify-center mt-4">
        {sliders.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-2 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;