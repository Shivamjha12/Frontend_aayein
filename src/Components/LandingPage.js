import React from "react";
import Landingpart1 from "./Landingpart1";
import LandingPart2 from "./LandingPart2";

const LandingPage = () => {
  return (
    <div>
      <div className=" h-[690px] w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:pt-0 pt-52">
        <Landingpart1 />
      </div>

      <div className=" h-[1150px] w-full border-t-2 bg-gradient-to-t from-black via-black to-gray-800 text-white md:pt-0 pt-52">
        <LandingPart2 />
      </div>
    </div>
  );
};

export default LandingPage;
