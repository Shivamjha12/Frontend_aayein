import React from "react";
import Header from "./Header";

const Landingpart1 = () => {
  return (
    <div>
      <div className="">
        <div>
        </div>
        <div className="flex ">
          <div className="w-[900px] p-4 flex flex-col pl-52  mt-24 margin-50">
            <div>
              <h1 className="text-5xl font-bold inline-flex">
                Made for people.
              </h1>
            </div>
            <div>
              <h1 className="text-5xl text-yellow-500 font-bold inline-flex ">
                Built for productivity.
              </h1>
            </div>

            <div className="w-[450px] mt-2">
              <h1 className="text-lg inline-flex">
                Connect the right people, find anything that you need and
                automate the rest. That’s work in Aayein, your productivity
                platform.
              </h1>
            </div>

            <div className="flex gap-4">
              <div className="font-semibold mt-2 flex">
                <button className="border-2 p-2 ">
                  SIGN UP WITH EMAIL ADDRESS
                </button>
              </div>

              <div className="font-semibold mt-2">
                <button className="border-2 p-2 bg-gray-800 ">
                  SIGN UP WITH GOOGLE
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <div className="mt-4 mr-16">
              <img
                className="h-[450px] rounded-xl"
                src="https://imgs.search.brave.com/E1ZE4l5C2AUTZZD0lmXu7H4gXf4yoCTAZj-nYBSTp-8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Y3V0ZS1ib3ktcGxh/eWluZy12ci1nYW1l/LXdpdGgtcm9ib3Qt/Y2FydG9vbi12ZWN0/b3ItaWNvbi1pbGx1/c3RyYXRpb24tcGVv/cGxlLXRlY2hub2xv/Z3ktaXNvbGF0ZWRf/MTM4Njc2LTU2OTEu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpart1;
