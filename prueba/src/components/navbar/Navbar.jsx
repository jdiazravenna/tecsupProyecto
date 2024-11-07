import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("users"));
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const navList = (
        <ul className="flex flex-col lg:flex-row lg:space-x-5 items-center font-medium text-white lg:space-y-0 space-y-4 lg:pt-0 pt-4">
            <li>
                <Link to="/" className="hover:text-cyan-300">Home</Link>
            </li>
            <li>
                <Link to="/allproduct" className="hover:text-cyan-300">All Products</Link>
            </li>
            {!user && (
                <>
                    <li>
                        <Link to="/signup" className="hover:text-cyan-300">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-cyan-300">Login</Link>
                    </li>
                </>
            )}
            {user?.role === "user" && (
                <li>
                    <Link to="/user-dashboard" className="hover:text-cyan-300">User Dashboard</Link>
                </li>
            )}
            {user?.role === "admin" && (
                <li>
                    <Link to="/admin-dashboard" className="hover:text-cyan-300">Admin Dashboard</Link>
                </li>
            )}
            {user && (
                <li className="cursor-pointer hover:text-cyan-300" onClick={logout}>
                    Logout
                </li>
            )}
            <li className="relative">
                <Link to="/cart" className="flex items-center hover:text-cyan-300">
                    <span className="material-icons text-2xl">shopping_cart</span>
                    {cartItems.length > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                            {cartItems.length}
                        </span>
                    )}
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-cyan-900 sticky top-0 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h2 className="text-white text-2xl font-bold">E-Commerce</h2>
                        </Link>
                    </div>

                    {/* Search Bar (Hidden on mobile) */}
                    <div className="hidden lg:flex lg:flex-1 lg:ml-6">
                        <SearchBar />
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <span className="material-icons">menu</span>
                        </button>
                    </div>

                    {/* Navigation Links (Hidden on mobile, shown on large screens) */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navList}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden   p-4 rounded-md  ">
                        {navList}
                        <div className="mt-4">
                            <SearchBar />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
