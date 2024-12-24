import axios from 'axios';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Access logged-in user info
  const [food, setFood] = useState({});
  const [purchaseQuantity, setPurchaseQuantity] = useState(); // Default quantity to 1
  const currentDate = new Date();
  const toastShown = useRef(false); // To avoid duplicate toasts

  const {
    name,
    image,
    category,
    quantity: availableQuantity, // Available stock
    price,
    description,
    addBy,
    _id,
  } = food || {};

  useEffect(() => {
    fetchFood();
  }, [id]);

  const fetchFood = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}/food/${id}`,{withCredentials:true});
      setFood(data);

      // Show toast if product is not available and toast hasn't already been shown
      if (data.quantity === 0 && !toastShown.current) {
        toast.error("This product is not available");
        toastShown.current = true; // Mark the toast as shown
      }
    } catch (error) {
      console.error("Failed to fetch food data:", error);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    if (addBy?.addedBy === user?.email) {
      return toast.error("You cannot buy your own food item.");
    }

    if (availableQuantity === 0) {
      return toast.error("This item is not available");
    }

    // Validate purchase quantity
    if (purchaseQuantity > availableQuantity || purchaseQuantity <= 0) {
      return toast.error("Invalid quantity. Please ensure it does not exceed available stock.");
    }

    // Prepare purchase data
    const purchaseData = {
      foodId: _id,
      foodName: name,
      price,
      quantity: purchaseQuantity,
      buyerName: user?.displayName || "Anonymous",
      buyerEmail: user?.email || "No Email",
      buyingDate: currentDate,
      addBy: addBy?.addedBy
    };

    try {
      // Send purchase data to the backend
      await axios.post(`${import.meta.env.VITE_URL}/purchase`, purchaseData,{withCredentials:true});
      toast.success("Purchase successful!");
      navigate('/my-orders');
    } catch (error) {
      console.error("Failed to make purchase:", error);
      toast.error("Something went wrong with your purchase.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      {food && Object.keys(food).length > 0 ? (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Purchase Food</h2>
            <form onSubmit={handlePurchase}>
              {/* Food Name */}
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Food Name</label>
                <input
                  type="text"
                  value={name}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Price</label>
                <input
                  type="text"
                  value={`$${price}`}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              {/* Available Quantity */}
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Available Quantity</label>
                <input
                  type="number"
                  value={availableQuantity}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              {/* Purchase Quantity */}
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Purchase Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={purchaseQuantity}
                  onChange={(e) => setPurchaseQuantity(parseInt(e.target.value))}
                  className="mt-2 p-2 w-full border rounded-lg"
                 required
                />
              </div>

              {/* Buyer Name */}
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Buyer Name</label>
                <input
                  type="text"
                  value={user?.displayName || "Guest"}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              {/* Buyer Email */}
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Buyer Email</label>
                <input
                  type="email"
                  value={user?.email || "No Email"}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              {/* Buying Date */}
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700">Buying Date</label>
                <input
                  type="text"
                  value={currentDate.toLocaleString()}
                  readOnly
                  className="mt-2 p-2 w-full border rounded-lg"
                />
              </div>

              {/* Submit Button */}
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
