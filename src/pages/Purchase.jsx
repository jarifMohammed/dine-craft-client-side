import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Access logged-in user info
  const [food, setFood] = useState({});
  const [quantity, setQuantity] = useState(1); // Default quantity to 1

  useEffect(() => {
    fetchFood();
  }, [id]);

  const fetchFood = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}/food/${id}`);
      setFood(data);
    } catch (error) {
      console.error("Failed to fetch food data:", error);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    // Prepare purchase data
    const purchaseData = {
      foodId: food._id,
      foodName: food.name,
      price: food.price,
      quantity,
      buyerName: user?.displayName || "Anonymous",
      buyerEmail: user?.email || "No Email",
      buyingDate: Date.now(),
    };

    try {
      // Send purchase data to the backend
      await axios.post(`${import.meta.env.VITE_URL}/purchase`, purchaseData);
      // Show success toast
      alert("Purchase successful!");
      // Redirect to a different page (e.g., the home page or order history)
      navigate('/orders');
    } catch (error) {
      console.error("Failed to make purchase:", error);
      alert("Something went wrong with your purchase.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      {food && Object.keys(food).length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Purchase Food</h2>
            <form onSubmit={handlePurchase}>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Food Name</label>
                <input
                  type="text"
                  value={food.name}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Price</label>
                <input
                  type="text"
                  value={`$${food.price}`}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Buyer Name</label>
                <input
                  type="text"
                  value={user?.displayName || "Guest"}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Buyer Email</label>
                <input
                  type="email"
                  value={user?.email || "No Email"}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading food details...</p>
      )}
    </div>
  );
};

export default Purchase;
