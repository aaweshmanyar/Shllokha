import React from "react";

const ImageGallery = () => {
  const images = [
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-11-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-8-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-2-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-13-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-7-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-14-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-8-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-13-scaled.jpg",
    "https://shlloka.com/wp-content/uploads/2022/11/SHLLOKA-2-scaled.jpg",
  ];

  return (
    <div>
      <h3 className="text-black text-center text-2xl font-bold">Memory Gallery</h3>
      <div className="grid grid-cols-3 px-8 gap-5 mt-[30px]">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src={src}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
