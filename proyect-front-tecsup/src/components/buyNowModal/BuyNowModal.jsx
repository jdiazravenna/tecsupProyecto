import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { clearCart } from "../../redux/cartSlice"; // ajusta la ruta si es distinta
const BuyNowModal = ({ addressInfo, setAddressInfo }) => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null); // <-- Nuevo estado para el ID del usuario
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.id); // <-- Guardamos el ID dinámicamente
    }
  }, []);

  const handleOpen = () => setOpen(!open);

  const buyNowFunction = async () => {
    if (!cart.length) {
      Swal.fire("Error", "No items in the cart!", "error");
      return;
    }

    if (!userId) {
      Swal.fire("Error", "User not logged in!", "error");
      return;
    }

    const orders = cart.map((item) => ({
      user: userId,
      product: item.id,
      quantity: 1,
      total_price: item.price,
      status: "pending",
    }));

    try {
      const responses = await Promise.all(
        orders.map((order) =>
          fetch("http://127.0.0.1:8000/api/orders/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          })
        )
      );

      const results = await Promise.all(responses.map((res) => res.json()));
      console.log("Order results:", results);

      Swal.fire({
        title: "Success",
        text: "Orders placed successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        localStorage.removeItem("cart");
        setCart([]);
        dispatch(clearCart());
        navigate("/");
      });

      handleOpen();
    } catch (error) {
      console.error("Error placing order:", error);
      Swal.fire("Error", "Failed to place order. Try again.", "error");
    }
  };

  return (
    <>
      <main open={open} handler={handleOpen} className="bg-gray-200 w-full">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={addressInfo.name}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, name: e.target.value })
            }
            placeholder="Enter your name"
            className="bg-gray-200 border border-black px-2 py-2 w-full rounded-md outline-none text-black placeholder-gray-700"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="address"
            value={addressInfo.address}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, address: e.target.value })
            }
            placeholder="Enter your address"
            className="bg-gray-200 border border-black px-2 py-2 w-full rounded-md outline-none text-black placeholder-gray-700"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="mobileNumber"
            value={addressInfo.mobileNumber}
            onChange={(e) =>
              setAddressInfo({
                ...addressInfo,
                mobileNumber: e.target.value,
              })
            }
            placeholder="Enter your mobile number"
            className="bg-gray-200 border border-black px-2 py-2 w-full rounded-md outline-none text-black placeholder-gray-700"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={buyNowFunction}
            className="w-full px-4 py-3 text-center text-gray-100 bg-green-800 border border-transparent dark:border-gray-700 rounded-lg"
          >
            Buy now
          </button>
        </div>
      </main>
    </>
  );
};

export default BuyNowModal;
