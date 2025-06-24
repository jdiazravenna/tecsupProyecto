import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );

  useEffect(() => {
    const syncUser = () => {
      setUser(JSON.parse(localStorage.getItem("users")) || null);
    };
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-3 space-y-3 lg:space-y-0">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700 tracking-wide">
          E-Commerce
        </Link>

        {/* Search */}
        <div className="w-full lg:w-1/3">
          <SearchBar />
        </div>

        {/* Links */}
        <ul className="flex flex-wrap items-center gap-4 font-medium text-sm lg:text-base text-gray-800 justify-center lg:justify-end">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allproduct">All Products</Link>
          </li>

          {!user && (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}

          {user?.role === "user" && (
            <>
              <li>
                <Link to="/user-dashboard">Profile</Link>
              </li>
              <li className="relative">
                <Link
                  to="/cart"
                  className="flex items-center gap-1 hover:text-blue-600 transition"
                >
                  <ShoppingCart size={20} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </li>
            </>
          )}

          {user?.role === "admin" && (
            <li>
              <Link to="/admin-dashboard">Admin</Link>
            </li>
          )}

          {user && (
            <li>
              <button
                onClick={logout}
                className="hover:text-red-600 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {!user && (
        <div className="bg-yellow-100 text-yellow-800 text-center py-2 text-sm font-semibold">
          To purchase, please login or create an account.
        </div>
      )}
    </nav>
  );
};

export default Navbar;
