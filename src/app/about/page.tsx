const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center mt-10 lg:mt-0">
      <div className=" bg-white py-12 px-6 md:px-12 lg:px-24 xl:px-36">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-6">
            About Fresh Harvest
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            At Fresh Harvest, we are committed to delivering the freshest and
            highest-quality food directly from farms to your table. Our mission
            is to support sustainable farming practices while ensuring that you
            and your family enjoy nutritious and delicious meals every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We partner with local farmers who use eco-friendly methods to
                grow fresh produce, ensuring a healthier planet for future
                generations.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Every product we deliver is carefully inspected to meet the
                highest standards of quality and freshness.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Community Support
              </h3>
              <p className="text-gray-600">
                By choosing Fresh Harvest, you are supporting local farmers and
                contributing to the growth of your community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
