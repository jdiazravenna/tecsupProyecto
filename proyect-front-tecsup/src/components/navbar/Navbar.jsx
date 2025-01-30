import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = () => {
    const navigate = useNavigate();

    // Estado del usuario
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("users")) || null);

    // Monitorear cambios en localStorage
    useEffect(() => {
        const checkUser = () => {
            setUser(JSON.parse(localStorage.getItem("users")) || null);
        };
        window.addEventListener("storage", checkUser);
        return () => window.removeEventListener("storage", checkUser);
    }, []);

    const logout = () => {
        localStorage.clear();
        setUser(null); // Actualiza el estado al hacer logout
        navigate("/");
    };

    const cartItems = useSelector((state) => state.cart);

    return (
        <nav className="bg-cyan-900 sticky top-0">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-2xl text-center">E-Commerce</h2>
                    </Link>
                </div>

                <div className="right flex justify-center mb-4 lg:mb-0">
                    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/allproduct'}>All Product</Link></li>

                        {!user && (
                            <>
                                <li><Link to={'/signup'}>Signup</Link></li>
                                <li><Link to={'/login'}>Login</Link></li>
                            </>
                        )}

                        {user?.role === "user" && <li><Link to={'/user-dashboard'}>User</Link></li>}
                        {user?.role === "admin" && <li><Link to={'/admin-dashboard'}>Admin</Link></li>}

                        {user && <li className="cursor-pointer" onClick={logout}>Logout</li>}

                        {user?.role === "user" && (
                            <li><Link to={'/cart'}>Cart({cartItems.length})</Link></li>
                        )}

                        {!user && (
                            <li>
                                <span className="text-red-300 font-extrabold">
                                    To purchase, login or create an account
                                </span>
                            </li>
                        )}
                    </ul>
                </div>

                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
