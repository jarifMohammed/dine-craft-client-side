import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";

const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.foodName.value,
      image: form.foodImage.value,
      category: form.foodCategory.value,
      quantity: parseInt(form.quantity.value, 10),
      price: parseFloat(form.price.value), // Price in USD
      addBy: {
        addedBy: form.addedBy.value,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      origin: form.foodOrigin.value,
      description: form.description.value,
      total_sold: food.total_sold, // Preserve the current total sold
    };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_URL}/update-food/${id}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      form.reset();
      toast.success("Food updated successfully!");
      navigate("/my-foods");
    } catch (error) {
      console.error("Failed to update food:", error);
      toast.error("Failed to update the food item.");
    }
  };

  return (
    <div className="container mt-20 mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Update Food Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-lg">
        {/* Food Name */}
        <div>
          <label htmlFor="foodName" className="block text-lg font-medium mb-2">Food Name</label>
          <input
            id="foodName"
            name="foodName"
            type="text"
            defaultValue={food.name}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Food Image */}
        <div>
          <label htmlFor="foodImage" className="block text-lg font-medium mb-2">Food Image URL</label>
          <input
            id="foodImage"
            name="foodImage"
            type="text"
            defaultValue={food.image}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Food Category */}
        <div>
          <label htmlFor="foodCategory" className="block text-lg font-medium mb-2">Food Category</label>
          <input
            id="foodCategory"
            name="foodCategory"
            type="text"
            defaultValue={food.category}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-lg font-medium mb-2">Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            defaultValue={food.quantity}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-lg font-medium mb-2">Price (USD)</label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            defaultValue={food.price}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Added By */}
        <div>
          <label htmlFor="addedBy" className="block text-lg font-medium mb-2">Added By</label>
          <input
            id="addedBy"
            name="addedBy"
            type="text"
            defaultValue={user?.email || ""}
            disabled
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        {/* Food Origin */}
        <div>
          <label htmlFor="foodOrigin" className="block text-lg font-medium mb-2">Food Origin (Country)</label>
          <input
            id="foodOrigin"
            name="foodOrigin"
            type="text"
            defaultValue={food.origin}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={food.description}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg"
          >
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
