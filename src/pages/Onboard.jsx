import React from "react";

const Onboard = () => {
  return (
    <>
      <div className="flex h-screen">
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/100')" }}
        ></div>
        <div className="w-1/2 h-full text-center">
          <div>
            <h1>
              Welcome to <br /> Best Edu Advisor
            </h1>
            <p className="text-blue-700">
              Every little step is getting you closer to your Study abroad
              dream.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Onboard;
