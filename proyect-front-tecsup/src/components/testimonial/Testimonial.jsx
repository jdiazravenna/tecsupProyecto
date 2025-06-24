const Testimonial = () => {
  return (
    <section className="bg-white py-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          ¿Qué opinan nuestros clientes?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              name: "Lucía R.",
              feedback:
                "Me encantó el vestido que compré. La calidad es excelente y llegó súper rápido.",
              role: "Compradora verificada",
            },
            {
              name: "Carlos M.",
              feedback:
                "Muy buena atención y los precios son competitivos. Volveré a comprar.",
              role: "Comprador frecuente",
            },
            {
              name: "Valeria Z.",
              feedback:
                "Excelente plataforma. Muy intuitiva y fácil de usar. Recomendadísima.",
              role: "Compradora reciente",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 shadow">
              <p className="text-sm text-gray-700 mb-4">"{item.feedback}"</p>
              <h4 className="font-semibold text-gray-800">{item.name}</h4>
              <span className="text-xs text-gray-500">{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
