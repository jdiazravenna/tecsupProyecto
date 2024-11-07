const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-center text-3xl font-bold text-black">
            Meet the Developers
          </h1>
          <h2 className="text-center text-2xl font-semibold mb-10">
            The team behind <span className="text-pink-500">our success</span>
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Francesca's Testimonial */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://via.placeholder.com/80"
                />
                <p className="leading-relaxed">
                  Francesca Rezza is a passionate technology enthusiast and a
                  dedicated student of Systems Engineering. She is on a journey
                  to become a skilled Full Stack Developer, with a keen interest
                  in constantly learning and embracing new challenges. Francesca
                  aims to create impactful solutions and contribute to the tech
                  world.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm capitalize">
                  Francesca Rezza
                </h2>
                <p className="text-gray-500">Systems Engineering Student</p>
              </div>
            </div>

            {/* Placeholder Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ecommerce-sk.vercel.app/img/kamal.png"
                />
                <p className="leading-relaxed">
                Senior programmer, trained in Python, Java, React, Javascript, Tailwind, Firebase, with 6 years of experience, has managed to create this ecommerce, along with the team made up of great professionals dedicated to their passion, programming.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm capitalize">
                  Juan Díaz Ravenna
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            {/* Placeholder Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
              <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ecommerce-sk.vercel.app/img/kamal.png"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm capitalize">
                  Joao Díaz Ravenna
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
