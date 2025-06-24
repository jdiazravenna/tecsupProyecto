const Features = () => {
  return (
    <section className="bg-white py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          ¿Por qué comprar con nosotros?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <svg
              className="w-10 h-10 mx-auto text-blue-600 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c1.5 0 3.5 1.12 4.6 2.75 1.1 1.6 1.4 3.5.6 5.25-.9 1.8-2.7 3-5.2 3s-4.3-1.2-5.2-3c-.8-1.75-.5-3.65.6-5.25C8.5 9.12 10.5 8 12 8z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Calidad Garantizada</h3>
            <p className="text-sm text-gray-600">
              Trabajamos con proveedores verificados para ofrecerte lo mejor del
              mercado.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <svg
              className="w-10 h-10 mx-auto text-green-600 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h2l1 2h13l1-2h2M5 18h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Envíos Rápidos</h3>
            <p className="text-sm text-gray-600">
              Recibe tu producto en 24 a 48 horas según tu ubicación.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <svg
              className="w-10 h-10 mx-auto text-yellow-600 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m2-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Pago Seguro</h3>
            <p className="text-sm text-gray-600">
              Tus datos están protegidos con encriptación SSL y pasarelas
              certificadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
