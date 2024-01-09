import React from "react";

const Footer = () => {
  return (
    <div className=" h-[610px] w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:pt-0 pt-52">
      <div className="flex flex-col justify-center items-center  border-t-2 ">
        <div className=" pt-20">
          <h1 className="text-3xl font-bold ">
            See all that you can accomplish with Aayein.
          </h1>
        </div>
        <div className="flex gap-7 mt-6">
          <div className="font-semibold">
            <button className="border-2 p-2 ">Sign Up</button>
          </div>
          <div className="font-semibold">
            <button className="border-2 p-2 bg-white text-black">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center">
        <div className="flex   gap-40">
          <div>
            <h1 className="text-lg font-semibold">Why Aayein?</h1>
            <p className="text-gray-400">Channels</p>
            <p className="text-gray-400">Engagement</p>
            <p className="text-gray-400">Scale</p>
            <p className="text-gray-400">Watch demo</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Product</h1>
            <p className="text-gray-400">Features</p>
            <p className="text-gray-400">Integration</p>
            <p className="text-gray-400">Enterprise</p>
            <p className="text-gray-400">Solutions</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Price</h1>
            <p className="text-gray-400">Subscriptions</p>
            <p className="text-gray-400">Paid Vs Free</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Resources</h1>
            <p className="text-gray-400">Partners</p>
            <p className="text-gray-400">Developers</p>
            <p className="text-gray-400">Community</p>
            <p className="text-gray-400">Apps</p>
            <p className="text-gray-400">Blog</p>
            <p className="text-gray-400">Help center</p>
            <p className="text-gray-400">Events</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Company</h1>
            <p className="text-gray-400">About us</p>
            <p className="text-gray-400">Leadership</p>
            <p className="text-gray-400">News</p>
            <p className="text-gray-400">Media kit</p>
            <p className="text-gray-400">Careers</p>
            <p className="text-gray-400">Aayein shop</p>
          </div>
        </div>
      </div>

      <div className="mt-32 flex justify-center items-center">
        <p className="text-sm ">©2024 Aayein, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
      </div>
    </div>
  );
};

export default Footer;
