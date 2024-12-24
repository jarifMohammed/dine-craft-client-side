import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const AllOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [orderCount, setOrderCount] = useState(0); // State to hold the order count

    useEffect(() => {
        if (user?.email) {
            fetchAllOrders();
        }
    }, [user]);

    const fetchAllOrders = async () => {
        try {
            const { data } = await axios.get(
                `${import.meta.env.VITE_URL}/all-orders/${user?.email}`,
                {withCredentials:true}
            );
            setOrders(data);
            setOrderCount(data.length); // Set the count of orders
        } catch (error) {
            console.error("Error fetching orders:", error);
            toast.error("Failed to fetch orders.");
        }
    };

    return (
        <section className="container px-4 mx-auto pt-12">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800">All Orders</h2>
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
                    {orderCount} Orders
                </span>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3.5 px-4 text-sm font-normal text-gray-500 text-left">
                                            Food Name
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-gray-500 text-left">
                                            Price
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-gray-500 text-left">
                                            Quantity
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-gray-500 text-left">
                                            Buyer Name
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-gray-500 text-left">
                                            Buyer Email
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-gray-500 text-left">
                                            Buying Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {orders.map((order) => (
                                        <tr key={order._id}>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                {order.foodName}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                ${order.price}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                {order.quantity}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                {order.buyerName}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                {order.buyerEmail}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-700">
                                                {new Date(order.buyingDate).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                    {orders.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="px-4 py-4 text-center text-sm text-gray-500"
                                            >
                                                No orders found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllOrders;
