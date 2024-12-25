import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Grid, Paper, Typography, Button, IconButton } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetchAllOrders();
    }
  }, [user]);

  const fetchAllOrders = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_URL}/orders/${user?.email}`, { withCredentials: true }
      );
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch your orders.");
    }
  };

  // Delete order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_URL}/orders/${id}`);
      toast.success("Order deleted successfully!");
      fetchAllOrders(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Failed to delete the order.");
    }
  };

  return (
    <section className="container px-4 mx-auto mb-12 pt-5">
      <div className="flex items-center gap-x-3">
        <Typography variant="h6">My Orders</Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: 12,
            padding: '4px 12px',
          }}
        >
          {orders.length}
        </Typography>
      </div>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        {orders.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="body1" align="center" color="textSecondary">
              No orders found.
            </Typography>
          </Grid>
        ) : (
          orders.map((order) => (
            <Grid item xs={12} sm={6} md={4} key={order._id}>
              <Paper sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <img
                      src={order.image || "default-image.jpg"} // Use a default image if imageUrl is not available
                      alt={order.foodName}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: 8,
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6" component="div" gutterBottom>
                      {order.foodName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Price:</strong> ${order.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Quantity:</strong> {order.quantity}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Buyer:</strong> {order.buyerName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Ordered On:</strong> {new Date(order.buyingDate).toLocaleDateString()}
                    </Typography>
                    <div style={{ marginTop: '16px' }}>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDelete(order._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <Link  to="#" style={{ textDecoration: 'none' }}>
                        <IconButton color="primary">
                          <EditIcon />
                        </IconButton>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </section>
  );
};

export default MyOrders;
