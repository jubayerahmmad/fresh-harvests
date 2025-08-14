import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="container max-w-[1015px] mx-auto my-16 md:my-35 ">
      <header className="text-center flex flex-col justify-center space-y-5">
        <h5 className="section-badge mx-auto">Testimonial</h5>
        <h2 className="text-2xl lg:text-4xl font-bold">
          What Our Customers Say
        </h2>
        <p className="text-sm max-w-sm mx-auto">
          Don‘t just take our word for it—here‘s what some of our customers have
          to say about their experience with Fresh Harvest:
        </p>
      </header>
      <div className="max-w-6xl mx-auto flex flex-col lg:grid grid-cols-5 items-center  gap-5 lg:space-y-0  mt-8 ">
        {/* Left Side */}
        <div className="flex-shrink-0 lg:col-span-2">
          <Image
            src="/images/testimonial-1.jpg"
            alt="Customer Feedback"
            width={500}
            height={500}
            className="w-[204px] md:w-full  max-w-[335px] rounded-full shadow-lg"
          />
        </div>

        {/* Right Side - Details */}
        <div className=" lg:text-left space-y-4 lg:col-span-3  bg-[#F4F6F6] p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-600 italic">
            I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It is always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.
          </p>
          <h4 className="text-xl font-bold text-gray-800">
            Jane Doe --{" "}
            <span className="text-sm text-gray-500">Professional chef</span>
          </h4>
        </div>
      </div>
      <div className="flex gap-5 justify-center mt-16">
        <div className="w-4 h-4  bg-[#749B3F] rounded-full"></div>
        <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default Testimonial;
