import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  /**========================================================================
   *                      🌟 Nueva función de login con Django
   *========================================================================**/
  const userLoginFunction = async () => {
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userLogin.email, // Cambiar email a username si Django lo requiere
          password: userLogin.password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Guardamos tanto el token como la info del usuario en localStorage
        localStorage.setItem("token", data.access);
        localStorage.setItem("users", JSON.stringify(data.user));
  
        toast.success("Login Successfully");
        navigate("/"); // Redirigir según sea necesario
      } else {
        toast.error(data.detail || "Login failed");
      }
    } catch (error) {
      console.log("Error signing in:", error);
      toast.error("Login Failed");
    }
  
    setLoading(false);
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading && <Loader />}
      <div className="bg-white px-10 py-8 border border-gray-300 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Bienvenido de nuevo
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Inicia sesión en tu cuenta
        </p>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Ingresa tu email"
            value={userLogin.email}
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={userLoginFunction}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        >
          Iniciar Sesión
        </button>

        <div className="text-center mt-6 text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
