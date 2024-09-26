import React from "react";
import starGroup from "./starGroup.png";
import right from "./right.svg";
import avatar from "./avatar.png";
export default function Price() {
  return (
    <div className=" mt-8  pt-8     w-[1160px] mx-auto ">
      <div
        style={{ border: "1px solid #E4EAF8" }}
        className="w-[409px] flex items-center justify-evenly  h-[83px] bg-white dark:bg-black border dark:border-red-600 mx-auto text-center rounded-3xl "
      >

<div>  <img src={`${avatar}`} alt="" /></div>


        <p className="">
        
          <b className="dark:text-white">5.0</b>
          <span className="text-[#8987A1] dark:text-white    ]">
            {" "}
            Based On{" "}
          </span>{" "}
          <b className="dark:text-white">145 </b>{" "}
          <span className="text-[#8987A1] dark:text-white  ">Reviews </span>{" "}
          <img className="d-block ms-9" src={`${starGroup}`} alt="" />
        </p>
      </div>

      {/* Section Container */}
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Title and Description */}

        {/* Main Content */}
        <div className="grid  ms-10 md:grid-cols-3 gap-28 mt-16">
          {/* Schedule a Meeting */}

          <div>
            <div className="text-center">
              <h2 className="text-5xl text-start font-bold text-gray-800 dark:text-white ">Pricing</h2>
              <p className=" dark:text-white   text-start text-gray-500 mt-6">
                Take a look at some of our recent projects to see how we've
                helped businesses like yours succeed online.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-gradient   w-[387px] h-[238px] p-8 mt-20 rounded-2xl shadow-lg space-y-6">
              <h3 className="text-2xl dark:text-white  text-start  font-bold text-gray-800">
                Let's Schedule <br />a Meeting
              </h3>
              <button className="bg-[#4E47FF]  text-white py-2  px-8 rounded-lg">
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Unlimited Services */}
          <div className="bg-white dark:bg-[#4E47FF]  p-8  w-[624px] h-[497px] rounded-2xl shadow-lg col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Unlimited Services
            </h3>
            <p className="text-[#8987A1] text-start">
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* Services List */}
              <ul className="space-y-4 bg:text-white">
                <li className="flex items-center">
                  <span className="w-[24px] h-[24px] flex items-center justify-center border border-black rounded-full mr-2">
                    <img
                      src={`${right}`}
                      alt="Right Icon"
                      className="w-[16px] h-[16px]"
                    />
                  </span>
                  Unlimited requests
                </li>
                <li className="flex items-center">
                  <span className="w-[24px] h-[24px] flex items-center justify-center border border-black rounded-full mr-2">
                    <img
                      src={`${right}`}
                      alt="Right Icon"
                      className="w-[16px] h-[16px]"
                    />
                  </span>
                  Unlimited requests
                </li>
                <li className="flex items-center">
                  <span className="w-[24px] h-[24px] flex items-center justify-center border border-black rounded-full mr-2">
                    <img
                      src={`${right}`}
                      alt="Right Icon"
                      className="w-[16px] h-[16px]"
                    />
                  </span>
                  Unlimited requests
                </li>
              </ul>

              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-[24px] h-[24px] flex items-center justify-center border border-black rounded-full mr-2">
                    <img
                      src={`${right}`}
                      alt="Right Icon"
                      className="w-[16px] h-[16px] "
                    />
                  </span>
                  Unlimited requests
                </li>
                <li className="flex items-center">
                  <span className="w-[24px] h-[24px] flex items-center justify-center border border-black rounded-full mr-2">
                    <img
                      src={`${right}`}
                      alt="Right Icon"
                      className="w-[16px] h-[16px]"
                    />
                  </span>
                  Unlimited requests
                </li>
                <li className="flex items-center">
                  <span className="w-[24px] h-[24px] flex items-center justify-center border border-black rounded-full mr-2">
                    <img
                      src={`${right}`}
                      alt="Right Icon"
                      className="w-[16px] h-[16px]"
                    />
                  </span>
                  Unlimited requests
                </li>
              </ul>
            </div>

            {/* Price and CTA */}
            <div className="flex justify-between items-center bg-gray-100 dark:bg-dark-gradient p-6 rounded-lg">
              <div
                className="text-4xl h-[42px]  text-start 
              w-[383px] font-bold  font-raleway text-gray-800 dark:text-white "
              >
                $3,250{" "}
                <span className="text-lg font-normal text-[#8987A1] dark:text-white ">/mo</span>
              </div>
              <button className="text-black text-3xl">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
