import { useEffect, useState } from "react";
import MyContext from "./myContext";
import toast from "react-hot-toast";

function MyState({ children }) {
  // Loading State
  const [loading, setLoading] = useState(false);

  // Product State
  const [getAllProduct, setGetAllProduct] = useState([]);

  /**========================================================================
   *                          GET All Product Function
   *========================================================================**/
  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/products/");
      const data = await response.json();
      setGetAllProduct(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
    setLoading(false);
  };

  // Order State
  const [getAllOrder, setGetAllOrder] = useState([]);

  /**========================================================================
   *                           GET All Order Function
   *========================================================================**/
  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders/");
      const data = await response.json();
      setGetAllOrder(data);
    } catch (error) {
      console.log("Error fetching orders:", error);
    }
    setLoading(false);
  };

  // Delete Order Function
  const orderDelete = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/orders/${id}/`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("Order Deleted successfully");
        getAllOrderFunction();
      } else {
        toast.error("Failed to delete order");
      }
    } catch (error) {
      console.log("Error deleting order:", error);
    }
    setLoading(false);
  };

  // User State
  const [getAllUser, setGetAllUser] = useState([]);

  /**========================================================================
   *                           GET All User Function
   *========================================================================**/
  const getAllUserFunction = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch("http://127.0.0.1:8000/api/auth/users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Aquí asegúrate de que está bien escrito
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setGetAllUser(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFunction();
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        getAllProductFunction,
        getAllOrder,
        orderDelete,
        getAllUser,
        getAllUserFunction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
