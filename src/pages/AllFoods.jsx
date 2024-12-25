import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import axios from 'axios';

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState('');
  
  // Fetch foods based on search query
  useEffect(() => {
    const fetchAllFoods = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_URL}/foods?search=${search}`
        );
        setFoods(data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };
    
    fetchAllFoods();
  }, [search]); // Trigger fetching whenever search query changes

  const handleReset = () => {
    setSearch('');
  };

  return (
    <>
      <div className="flex-1 mt-20 py-8">
        <h2 className="text-center text-4xl text-yellow-600 font-semibold mb-8">
          All Foods
        </h2>

        <div className="flex justify-center gap-4 p-4">
          {/* Search Input */}
          <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)} // Update search state
              value={search}
              placeholder="Enter Food Name"
              aria-label="Enter Food Name"
            />
            <button
              className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
            >
              Search
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="btn px-4 py-2  bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        {/* Grid layout for the food cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
          {foods.length > 0 ? (
            foods.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))
          ) : (
            <p className='text-center text-4xl'>No foods found</p> // Display message if no foods are found
          )}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
