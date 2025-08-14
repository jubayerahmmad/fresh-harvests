import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="container mx-auto h-full md:h-[650px] mt-16  flex flex-col md:flex-row  md:items-start gap-6 bg-white">
      {/* Left Side */}
      <div className="w-full h-full ">
        <Image
          src="/images/about-us.webp"
          alt="About Fresh Harvest"
          width={500}
          height={500}
          className="w-full lg:w-[686px]"
        />
      </div>

      {/* Right Side*/}
      <div className="w-full h-full md:flex flex-col justify-center items-start p-4 md:p-0 ">
        <div className="lg:w-[470px] space-y-2 md:space-y-4">
          <div className="section-badge">About us</div>
          <h2 className="text-4xl md:text-7xl font-semibold text-gray-800">
            About Fresh Harvest
          </h2>
          <p className="text-gray-600 text-[13px] md:text-[14px]">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <Link href="/about">
            <button className="btn-orange">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
