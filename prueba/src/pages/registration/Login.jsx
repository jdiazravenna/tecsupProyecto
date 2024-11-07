import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  /**========================================================================
   *                          User Login Function
   *========================================================================**/

  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
      return; // Detenemos la ejecución si los campos están vacíos
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      console.log(users, "users");
      console.log("User UID:", users.user.uid);
      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users.user.uid)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          console.log("No documents found with this UID.");
        } else {
          querySnapshot.forEach((doc) => {
            console.log("Document data:", doc.data());
          });
        }
        const data = onSnapshot(q, (QuerySnapshot) => {
          console.log("Snapshot triggered");
          if (QuerySnapshot.empty) {
            console.log("No documents found.");
            return;
          }

          let user = null;
          QuerySnapshot.forEach((doc) => {
            console.log("Document data:", doc.data());
            user = doc.data();
          });
          console.log("User data after loop:", user);

          if (user) {
            localStorage.setItem("users", JSON.stringify(user));
            setUserLogin({
              email: "",
              password: "",
            });
            toast.success("Login Successfully");
            setLoading(false);

            if (user.role === "user") {
              navigate("/");
            } else if (user.role === "admin") {
              navigate("/admin-dashboard");
            } else {
              toast.error("User role is undefined");
            }
          } else {
            console.log("No user document found.");
            toast.error("User not found in database");
            setLoading(false);
          }
        });

        return () => data();
      } catch (error) {
        console.log("Error fetching user data:", error);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error signing in:", error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading && <Loader />}

      <div className="bg-white px-10 py-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please login to your account
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={userLogin.email}
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={userLoginFunction}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        >
          Login
        </button>

        {/* Signup Link */}
        <div className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
