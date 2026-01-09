import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useCallback } from 'react';

const carouselImages = [
  "/images/ai-for-all.jpeg",
  "/images/ai-and-me-flyer.png",
  "/images/event-schedule.jpeg",
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  useEffect(() => {
    // Only auto-slide if not hovered
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handleDotClick = (i) => setIndex(i);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-0">
      <div
        className="relative w-[400px] h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        {carouselImages.map((imgSrc, i) => (
          <div
            key={`${imgSrc}-${i}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 ease-in-out ${
              i === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <img
              src={process.env.PUBLIC_URL + imgSrc}
              alt={`carousel-image-${i}`}
              className="w-full h-full object-contain"
              loading={i === index ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots and Arrows */}
      <div className="flex items-center justify-center mt-2 lg:mt-2">
        <button
          onClick={handlePrev}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-white"
          aria-label="Previous image"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="flex items-center mx-2">
          {carouselImages.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                index === i ? 'bg-white' : 'bg-gray-400'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-white"
          aria-label="Next image"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;