import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    [
      {
        id: 1,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+1",
        title: "Card 1",
        description: "Discover the beauty of nature",
      },
      {
        id: 2,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+2",
        title: "Card 2",
        description: "Explore the mountains",
      },
      {
        id: 3,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+3",
        title: "Card 3",
        description: "Enjoy the adventure",
      },
    ],
    [
      {
        id: 4,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+4",
        title: "Card 4",
        description: "Experience serenity",
      },
      {
        id: 5,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+5",
        title: "Card 5",
        description: "Embrace the culture",
      },
      {
        id: 6,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+6",
        title: "Card 6",
        description: "Feel the excitement",
      },
    ],
    [
      {
        id: 7,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+7",
        title: "Card 7",
        description: "Relax in the countryside",
      },
      {
        id: 8,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+8",
        title: "Card 8",
        description: "Find your adventure",
      },
      {
        id: 9,
        imageUrl: "https://via.placeholder.com/300x200?text=Card+9",
        title: "Card 9",
        description: "Capture the moment",
      },
    ],
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 mt-[-50px]">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        The Golden Memory we have with our people 
      </h1>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {slide.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        &#8594;
      </button>

      {/* Dots for Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
