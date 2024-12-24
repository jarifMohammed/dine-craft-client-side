import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';
import axios from 'axios';

const AllFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchAllFoods();
  }, []);

  const fetchAllFoods = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_URL}/foods`);
    setFoods(data);
  };

  return (
    <>
    
    <div className="flex-1 bg-gray-100 py-8">
        
      <h2 className="text-center text-4xl text-yellow-600 font-semibold mb-8">
        All Foods
      </h2>

      <div className='flex justify-center p-4'>
      <form>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
      </div>

      {/* Flex or Grid layout for the food cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
    </>
    
  );
};

export default AllFoods;
