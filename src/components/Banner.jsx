import React from "react";
import { Link, useNavigate } from "react-router-dom";



const Banner = () => {
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate("/all-foods");
//   };

  return (
    <div className="relative h-[500px]">
      <img
        src="https://i.ibb.co.com/bW573tS/carousel1.jpg"  // Use imported image here
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white py-4 px-4">
        <div>
          <h1 className="text-6xl font-bold mb-4">Welcome to Dine Craft</h1>
          <p className="text-2xl mb-6">Experience the best food crafted just for you.</p>
          <Link to={'/all-foods'}
          
            
            className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Explore All Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
