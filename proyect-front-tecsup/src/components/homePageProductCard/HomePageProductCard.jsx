import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Removed from cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-10">
            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">Bestselling Products</h1>
            </div>

            {/* Main Container */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex justify-center">{loading && <Loader />}</div>
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 8).map((item, index) => {
                            const { id, name, price, image } = item;
                            return (
                                <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/4">
                                    <div className="h-full border border-gray-200 rounded-lg shadow-sm transition-transform transform hover:scale-105 cursor-pointer overflow-hidden">
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="h-64 w-full object-cover"
                                            src={image}
                                            alt="Product"
                                        />
                                        <div className="p-6">
                                            <h2 className="text-sm font-light text-gray-500 mb-1">
                                                E-Commerce
                                            </h2>
                                            <h1 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                                                {name}
                                            </h1>
                                            <h1 className="text-lg font-semibold text-green-700 mb-4">
                                                S/ {price}
                                            </h1>

                                            <div className="flex justify-center">
                                                {cartItems.some((p) => p.id === item.id) ? (
                                                    <button
                                                        onClick={() => deleteCart(item)}
                                                        className="w-full text-sm py-2 rounded-lg font-semibold bg-red-500 hover:bg-red-700 text-white transition-colors">
                                                        Remove from Cart
                                                    </button>
                                                ) : (
                                                    <button
                                            
                                                        onClick={() => addCart(item)}
                                                        className="w-full text-sm py-2 rounded-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white transition-colors">
                                                        Add to Cart
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageProductCard;
