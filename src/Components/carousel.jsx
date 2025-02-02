import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 3 : 1);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const slides = [
    { id: 1, imageUrl: "https://via.placeholder.com/300x200?text=Card+1", title: "Card 1", description: "Discover the beauty of nature" },
    { id: 2, imageUrl: "https://via.placeholder.com/300x200?text=Card+2", title: "Card 2", description: "Explore the mountains" },
    { id: 3, imageUrl: "https://via.placeholder.com/300x200?text=Card+3", title: "Card 3", description: "Enjoy the adventure" },
    { id: 4, imageUrl: "https://via.placeholder.com/300x200?text=Card+4", title: "Card 4", description: "Experience serenity" },
    { id: 5, imageUrl: "https://via.placeholder.com/300x200?text=Card+5", title: "Card 5", description: "Embrace the culture" },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - slidesPerView : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= slides.length - slidesPerView ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 mt-6 sm:mt-2">
      <h1 className="text-3xl font-bold text-center mb-6">The Golden Memory we have with our people</h1>

      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
        >
          {slides.map((item, index) => (
            <div key={index} className={`flex-shrink-0 px-2 w-full ${slidesPerView === 3 ? "lg:w-1/3" : "w-full"}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white w-10 h-10 rounded-full flex items-center justify-center"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
