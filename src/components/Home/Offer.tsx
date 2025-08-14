import Image from "next/image";

const Offer = () => {
  return (
    <section className="bg-[url(/images/bg-special-offer.jpg)] bg-cover">
      <div className="container mx-auto relative flex items-center py-24">
        <div>
          <div className="text-center lg:text-left space-y-3">
            <h5 className="section-badge mx-auto lg:mx-0">Special Offer</h5>
            <h1 className="text-4xl lg:text-7xl font-semibold">
              Seasonal Fruit Bundle
            </h1>
            <h2 className="text-2xl lg:text-5xl">
              Discount Up To <span className="text-orange-500">80% OFF</span>
            </h2>
            <div className="mt-8 flex justify-center space-x-4 lg:justify-start lg:space-x-6">
              <div className="flex min-w-[72px] flex-col items-center rounded-xl bg-white px-5 pb-2.5 pt-5">
                <span className="text-3xl lg:text-5xl">03</span>
                <span className="text-lg">Days</span>
              </div>

              <div className="flex min-w-[72px] flex-col items-center rounded-xl bg-white px-5 pb-2.5 pt-5">
                {" "}
                <span className="text-3xl lg:text-5xl">23</span>
                <span className="text-lg">Hours</span>
              </div>

              <div className="flex min-w-[72px] flex-col items-center rounded-xl bg-white px-5 pb-2.5 pt-5">
                {" "}
                <span className="text-3xl lg:text-5xl">45</span>
                <span className="text-lg">Minutes</span>
              </div>

              <div className="flex min-w-[72px] flex-col items-center rounded-xl bg-white px-5 pb-2.5 pt-5">
                {" "}
                <span className="text-3xl lg:text-5xl">43</span>
                <span className="text-lg">Seconds</span>
              </div>
            </div>

            <div className="lg:text-2xl text-lg mx-auto mt-8 w-fit rounded-full bg-[#176D38] px-8 py-4 text-white font-bold lg:mx-0">
              CODE : <span className="text-[#FAC714]">FRUIT28</span>
            </div>
          </div>
        </div>
        <Image
          src="/images/fruits.webp"
          alt="fruits"
          height={620}
          width={940}
          loading="lazy"
          className="absolute right-0 hidden h-fit lg:block lg:w-1/2"
        />
      </div>
    </section>
  );
};

export default Offer;
