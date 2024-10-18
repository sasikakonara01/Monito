import React from "react";
import banner01 from "../../Assets/banner01.png";
import Button from "../Common/ReUsableButton/Button";

const Banner = () => {
  return (
    <div className="w-full flex rounded-2xl flex-col items-center md:items-end justify-center relative overflow-hidden">
      <img
        className="rounded-2xl w-full h-[60vh] md:h-[70vh] object-cover"
        src={banner01}
        alt="Banner"
      />

      {/* Text and buttons on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end space-y-4 text-center md:text-end px-4 md:px-8 lg:px-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003459]">
          One More Friend
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#003459]">
          Thousands More Fun!
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 max-w-xs md:max-w-lg">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
          <Button variant="outlined" Title="View Intro" icon="true" />
          <Button variant="primary" Title="Explore Now" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
