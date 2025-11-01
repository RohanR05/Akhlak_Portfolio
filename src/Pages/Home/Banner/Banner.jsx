import React from "react";
import Lottie from "lottie-react";
import img from "../../../assets/1.png";
import animi from "../../../assets/HRBanner.json";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-1 py-10">
      {/* Left Side (Logo, Image, and Text) */}
      <div className="flex-1 md:text-left space-y-4">
        {/* Logo / Typewriter Heading */}
        <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold">
          <Typewriter
            words={["MD. AKHLAKH HUZZAMAN..."]}
            loop={0}          // 0 = infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={120}   // typing speed
            deleteSpeed={80}  // deleting speed
            delaySpeed={1500} // delay before deleting
          />
        </h2>

        {/* HR Image on top (Rounded with border) */}
        <div className="flex justify-center md:justify-start">
          <img
            src={img}
            alt="HR Banner"
            className="w-60 md:w-72 lg:w-80 h-60 md:h-72 lg:h-80 rounded-full border-4 border-secondary object-cover mx-auto md:mx-0 shadow-md"
          />
        </div>

        {/* Description */}
        <p className="text-accent max-w-md mx-auto md:mx-0">
          Streamline your HR process, manage your team efficiently, and build a
          better workplace with smart tools.
        </p>

        {/* CTA Button */}
        <button className="btn btn-primary mt-4">Get Started</button>
      </div>

      {/* Right Side (Large Animation) */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <Lottie
          animationData={animi}
          loop
          className="w-[300px] md:w-[450px] lg:w-[650px]"
        />
      </div>
    </div>
  );
};

export default Banner;
