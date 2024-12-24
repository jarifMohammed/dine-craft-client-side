import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});

  const {
    name,
    image,
    category,
    quantity,
    price,
    addBy,
    origin,
    description,
    total_sold,
    _id
  } = food || {};

  useEffect(() => {
    fetchFood();
  }, [id]);

  const fetchFood = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/food/${id}`);
      const data = await response.json();
      setFood(data);
    } catch (error) {
      console.error("Failed to fetch food data:", error);
    }
  };

  const handlePurchase = () => {
    // Placeholder for purchase functionality (e.g., add to cart)
    alert(`You have purchased ${name}!`);
  };

  return (
    <div className="container mx-auto p-8">
      {Object.keys(food).length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center pt-8">
            <img
              src={image}
              alt={name}
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-md"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700 rounded">
                Category: {category}
              </span>
            </div>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold">Price:</span> ${price}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Quantity Available:</span> {quantity}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Total Sold:</span> {total_sold || 0}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Origin:</span> {origin}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Added By:</span> {addBy?.name || "Unknown"} (
                {addBy?.addedBy || "No Email"})
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to={`/purchase/${_id}`}
                
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Purchase
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading food details...</p>
      )}
    </div>
  );
};

export default FoodDetails;