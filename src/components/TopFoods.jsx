import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    const fetchTopFoods = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/top-foods`);
        setTopFoods(response.data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching top foods:", error);
      }
    };

    fetchTopFoods();
  }, []);

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Top Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topFoods.map((food) => (
          <div
            key={food._id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{food.name}</h3>
            <p className="text-gray-600 mb-2">Category: {food.category}</p>
            <p className="text-gray-600 mb-2">Price: ${food.price}</p>
            <p className="text-gray-600 mb-4">Purchased: {food.total_sold} times</p>

            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => navigate(`/food-details/${food._id}`)} // Redirect to single food page
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopFoods;
