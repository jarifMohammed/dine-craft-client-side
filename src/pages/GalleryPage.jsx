import React, { useState } from "react";
import FsLightbox from "fslightbox-react"; // Import FsLightbox for the lightbox functionality

function GalleryPage() {
  // State to handle the toggling of the lightbox
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Store the current image index

  // Array of image sources for the gallery
  const images = [
    "https://i.ibb.co.com/bW573tS/carousel1.jpg", // Image 1
    "https://i.ibb.co.com/hVY3TqP/carousel2.jpg", // Image 2
    "https://i.ibb.co.com/c3DwZ6L/carousel3.jpg", // Image 3
    "https://i.ibb.co.com/5rzySHQ/3185.jpg",
    "https://i.ibb.co.com/5RW2wtP/6974.jpg",
    "https://i.ibb.co.com/z735J86/10126.jpg",
    "https://i.ibb.co.com/hVY3TqP/carousel2.jpg", // Image 2
    "https://i.ibb.co.com/c3DwZ6L/carousel3.jpg",
  
    "https://i.ibb.co.com/bW573tS/carousel1.jpg",
    "https://i.ibb.co.com/z735J86/10126.jpg"
     
  ];

  // Handle image click event
  const handleImageClick = (index) => {
    setCurrentIndex(index); // Set the current image index to the clicked image
    setToggler(true); // Open the lightbox
  };

  // Handle lightbox close
  const handleCloseLightbox = () => {
    setToggler(false); // Close the lightbox
  };

  // Handle next image
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous image
  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto p-10 mt-10  px-4">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold ">Gallery Page</h1>
        <p className="text-lg  mt-2">Click an image to view in full-screen lightbox and navigate through them.</p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((imageSrc, index) => (
          <div key={index} className="relative group cursor-pointer">
            <img
              src={imageSrc}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
              onClick={() => handleImageClick(index)} // Handle image click
            />
          </div>
        ))}
      </div>

      {/* FsLightbox component for lightbox functionality */}
      <FsLightbox
        toggler={toggler}
        sources={images} // Pass all images to the lightbox
        currentIndex={currentIndex} // Pass the current image index to the lightbox
        onClose={handleCloseLightbox} // Close lightbox without reloading page
        onNext={handleNextImage} // Enable next image functionality
        onPrev={handlePrevImage} // Enable previous image functionality
      />
    </div>
  );
}

export default GalleryPage;
