import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // Navigate
  const navigate = useNavigate();

  // User Signup State
  const [userSignup, setUserSignup] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    profile_picture: null, // Para futuras implementaciones de subida de imagen
  });

  /**========================================================================
   *                          User Signup Function
   *========================================================================**/

  const userSignupFunction = async () => {
    // Validación
    if (
      userSignup.username === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userSignup.username,
          email: userSignup.email,
          password: userSignup.password,
          phone_number: userSignup.phone_number,
          address: userSignup.address,
          profile_picture: userSignup.profile_picture,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registro exitoso");
        localStorage.setItem("token", data.access); // Guarda el token JWT en localStorage
        navigate("/login"); // Redirigir a login
      } else {
        toast.error(data.detail || "Error en el registro");
      }
    } catch (error) {
      console.log("Error en el registro:", error);
      toast.error("Registro fallido");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading && <Loader />}

      <div className="bg-white px-10 py-8 border border-gray-200 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Crea tu cuenta
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Únete a nosotros y disfruta de beneficios exclusivos.
        </p>

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Nombre de Usuario
          </label>
          <input
            type="text"
            placeholder="Ej: JuanPerez"
            value={userSignup.username}
            onChange={(e) =>
              setUserSignup({ ...userSignup, username: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={userSignup.email}
            onChange={(e) =>
              setUserSignup({ ...userSignup, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={userSignup.password}
            onChange={(e) =>
              setUserSignup({ ...userSignup, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Número de Teléfono
          </label>
          <input
            type="text"
            placeholder="+51987654321"
            value={userSignup.phone_number}
            onChange={(e) =>
              setUserSignup({ ...userSignup, phone_number: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Address Input */}
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-2">
            Dirección
          </label>
          <input
            type="text"
            placeholder="Av. Siempre Viva 123, Lima, Perú"
            value={userSignup.address}
            onChange={(e) =>
              setUserSignup({ ...userSignup, address: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Signup Button */}
        <button
          type="button"
          onClick={userSignupFunction}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
        >
          Registrarse
        </button>

        {/* Login Link */}
        <div className="text-center mt-6 text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
