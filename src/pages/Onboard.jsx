import React from "react";
import flagOfSlovenia from "../assets/Flag_of_Slovenia.png";
import flagOfItaly from "../assets/Flag_of_Italy.png";
import flagOfAustria from "../assets/Flag_of_Austria.png";
import flagOfCroatia from "../assets/Flag_of_Croatia.png";
import flagOfHungary from "../assets/Flag_of_Hungary.png";

const Onboard = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left side starts here*/}
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/1000')" }}
        ></div>

        {/* Right side starts here */}
        <div className="w-1/2 h-full text-center flex flex-col items-center justify-center">
          <div>
            <h1 className="">
              Welcome to <br />{" "}
              <span className="font-fontPrimary font-bold text-2xl">
                Best Edu Advisor
              </span>
            </h1>
            <p className="">
              Every little step is getting you closer to your Study abroad
              dream.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <p>Select your destination</p>
            {/* Radio Button for selecting countries */}

            <fieldset className="grid grid-cols-2 gap-4">
              <legend className="sr-only">Delivery</legend>

              {/* Slovenia */}
              <div>
                <label
                  htmlFor="DeliveryStandard"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                >
                  <div>
                    <img
                      src={flagOfSlovenia}
                      alt="Flag"
                      className="bg-cover bg-center h-10"
                    />
                    <p className="font-fontPrimary text-lg">Slovenia</p>
                  </div>

                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    id="DeliveryStandard"
                    className="size-5 border-gray-300 text-blue-500"
                    checked
                  />
                </label>
              </div>

              {/* Italy */}
              <div>
                <label
                  htmlFor="DeliveryStandard"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                >
                  <div>
                    <img
                      src={flagOfItaly}
                      alt="Flag"
                      className="bg-cover bg-center h-10"
                    />
                    <p className="font-fontPrimary text-lg">Italy</p>
                  </div>

                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    id="DeliveryStandard"
                    className="size-5 border-gray-300 text-blue-500"
                    checked
                  />
                </label>
              </div>

              {/* Austria */}
              <div>
                <label
                  htmlFor="DeliveryStandard"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                >
                  <div>
                    <img
                      src={flagOfAustria}
                      alt="Flag"
                      className="bg-cover bg-center h-10"
                    />
                    <p className="font-fontPrimary text-lg">Austria</p>
                  </div>

                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    id="DeliveryStandard"
                    className="size-5 border-gray-300 text-blue-500"
                    checked
                  />
                </label>
              </div>

              {/* Croatia */}
              <div>
                <label
                  htmlFor="DeliveryStandard"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                >
                  <div>
                    <img
                      src={flagOfCroatia}
                      alt="Flag"
                      className="bg-cover bg-center h-10"
                    />
                    <p className="font-fontPrimary text-lg">Croatia</p>
                  </div>

                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    id="DeliveryStandard"
                    className="size-5 border-gray-300 text-blue-500"
                    checked
                  />
                </label>
              </div>

              {/* Hungary */}
              <div>
                <label
                  htmlFor="DeliveryStandard"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                >
                  <div>
                    <img
                      src={flagOfHungary}
                      alt="Flag"
                      className="bg-cover bg-center h-10"
                    />
                    <p className="font-fontPrimary text-lg">Hungary</p>
                  </div>

                  <input
                    type="radio"
                    name="DeliveryOption"
                    value="DeliveryStandard"
                    id="DeliveryStandard"
                    className="size-5 border-gray-300 text-blue-500"
                    checked
                  />
                </label>
              </div>
            </fieldset>

            <button className="rounded-sm w-[80%] p-4 bg-slate-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboard;
