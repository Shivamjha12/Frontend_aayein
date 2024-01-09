import React from "react";

const LandingPart2 = () => {
  return (
    <div className="flex flex-col gap-40 justify-center items-center pt-20">
      <div className="flex gap-60">
        <div className="flex justify-center items-center">
          <video
            className="w-[400px] rounded-xl"
            autoPlay=""
            controls=""
            src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/speed.IN.mp4"
          ></video>
        </div>

        <div>
          <div className="">
            <h1 className="text-5xl font-bold inline-flex">
              Move faster with your
            </h1>
            <h1 className="text-5xl font-bold">tools in one place.</h1>
          </div>
          <div className="mt-4 text-gray-500">
            <p className="w-[480px] text-base font-semibold">
              Automate away routine tasks with the power of generative AI and
              simplify your workflow with all your favourite apps ready to go in
              Aayein.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-60">
        <div>
          <div className="">
            <h1 className="text-5xl font-bold inline-flex">Choose how you</h1>
            <h1 className="text-5xl font-bold">want to work.</h1>
          </div>
          <div className="mt-4 text-gray-500">
            <p className="w-[480px] text-base font-semibold">
              In Aayein, you’ve got all the flexibility to work when, where and
              how it’s best for you. You can easily chat, send audio and video
              clips, or join a huddle to talk things through live.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <video
            className="w-[400px] rounded-xl"
            autoPlay=""
            controls=""
            src="https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.IN.webm"
          ></video>
        </div>
      </div>

      <div className="flex gap-60">
        <div className="flex justify-center items-center">
          <video
            className="w-[400px] rounded-xl"
            autoPlay=""
            controls=""
            src="https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.IN.webm"
          ></video>
        </div>

        <div>
          <div className="">
            <h1 className="text-5xl font-bold inline-flex">
            Bring your team 
            </h1>
            <h1 className="text-5xl font-bold">together.</h1>
          </div>
          <div className="mt-4 text-gray-500">
            <p className="w-[480px] text-base font-semibold">
            At the heart of Aayein are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.
            </p>
          </div>
        </div>
      </div>


      

    </div>
  );
};

export default LandingPart2;
