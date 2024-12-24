import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
  const {
    name,
    image,
    category,
    quantity,
    price,
    addedByName,
    addedByEmail,
    origin,
    description,
    _id
  } = food || {};

  // Shorten description for preview
  const shortDescription = description ? description.substring(0, 100) + '...' : '';

  return (
    <>
    
    <div className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden border border-gray-300">
        
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-medium text-green-600">${price}</span>
          <span className="text-sm text-gray-600">Quantity: {quantity}</span>
        </div>

        <p className="text-sm text-gray-600 mb-3">{shortDescription}</p>

        <div className="border-t border-gray-200 pt-3 mt-4">
          <p className="text-xs text-gray-500">Origin: {origin}</p>
        </div>

        {/* Purchase Button */}
        <div className="mt-4 text-center">
          <Link to={`/food-details/${_id}`} className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Details
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default FoodCard;
