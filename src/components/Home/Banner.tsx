"use client";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[url(/images/bg-hero-1.jpg)] bg-cover">
      <div className="absolute hidden h-full w-full bg-[url(/images/bg-hero-3.png)] bg-cover bg-no-repeat lg:block"></div>
      <div
        className="absolute right-0 h-full bg-[url(/images/bg-hero-2.jpg)] bg-cover bg-no-repeat"
        style={{ width: "calc(184.5px + 10rem)" }}
      ></div>

      <div className="container mx-auto relative h-screen">
        <div className="flex h-full flex-col justify-between pb-[107px] pt-[120px] md:pt-[185px] lg:space-y-20 lg:pt-[107px]">
          <div className="z-10 px-3">
            <h5 className="section-badge">Welcome to Fresh Harvest</h5>

            <h1 className="text-5xl lg:text-8xl mt-2 max-w-[345px] lg:max-w-2xl lg:leading-[94px] 2xl:mt-4">
              Fresh Fruits and Vegetables
            </h1>

            <p className="lg:text-lg mt-4 max-w-[345px] lg:max-w-md">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables
            </p>

            <Link
              href="/"
              className="lg:text-lg mt-2 block w-fit rounded-lg border-2 border-orange-500 bg-orange-500 px-6 py-3 text-black transition-colors duration-200 hover:bg-white hover:text-orange-500 2xl:mt-4"
            >
              Shop Now
            </Link>

            {/* Special Offer Card */}
            <div className="relative md:left-32 lg:left-40 xl:left-48 w-[182px] md:w-[215px] lg:w-[322px] flex border-2 border-[#749B3F] rounded-lg bg-[#EBEBEB] p-1 mt-8">
              <div className="lg:p-1">
                <h4 className="font-medium text-[8px] md:text-[11px] lg:text-[14px] text-[#176D38]">
                  Special Offer
                </h4>
                <h1 className="text-[16px] md:text-xl lg:text-3xl font-medium">
                  Fresh Salad
                </h1>
                <p className="text-[#176D38] text-[9px] lg:text-[16px] font-semibold">
                  Up to{" "}
                  <span className="text-black text-[11px] lg:text-xl font-semibold border rounded-full border-red-500">
                    {" "}
                    70%
                  </span>{" "}
                  <span className="text-black">off</span>
                </p>
                <button className="text-[9px] lg:text-[12px] font-semibold px-1 rounded-full border bg-[#176D38] text-white">
                  CODE : <span className="text-[#FAC714]">FRESH25</span>{" "}
                </button>
              </div>
              <Image
                src="/images/food.webp"
                alt="Banner"
                width={200}
                height={200}
                className="w-[86px] lg:w-[150px] h-[84px] lg:h-[150px]"
              />
            </div>

            {/* App Download */}
            <div className="relative top-24 lg:top-1 space-y-2 pb-4">
              <p>Download App :</p>
              <figure className="flex gap-2 lg:gap-4">
                <Image
                  src="/images/google_play.webp"
                  alt="Download on Google Play"
                  width={500}
                  height={500}
                  className="w-34 h-full"
                />
                <Image
                  src="/images/google_play.webp"
                  alt="Download on App Store"
                  width={500}
                  height={500}
                  className="w-34 h-full"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Hero Kid Image */}
        <Image
          src="/images/hero-kid.webp"
          alt="Logo"
          width={1043}
          height={1137}
          className="absolute -right-40 bottom-0 w-[695px] lg:right-0 2xl:w-[1000px]"
        />
      </div>
    </section>
  );
};

export default Banner;
