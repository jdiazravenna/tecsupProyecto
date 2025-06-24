import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        {/* Logo y marca */}
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <Link to="/" className="text-xl font-bold text-blue-700">
            E-Commerce
          </Link>
        </div>

        {/* Enlaces legales */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link to="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <Link to="/allproduct" className="hover:text-blue-600 transition">
            Productos
          </Link>
          <a
            href="mailto:soporte@tomychanelotech.com.pe"
            className="hover:text-blue-600 transition"
          >
            Soporte
          </a>
        </div>

        {/* Redes */}
        <div className="mt-4 md:mt-0 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-2 border-t">
        © {new Date().getFullYear()} TomyChaneloTech.com.pe — Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
