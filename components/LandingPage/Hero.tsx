"use client";
import React from "react";
import { IoMdStopwatch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaStar, FaStarHalf } from "react-icons/fa";
export default function Hero() {
  return (
    <div className="h-screen flex flex-col gap-40 pt-[10vh] items-center w-full justify-center bg-[#004733d8]">
      <h1 className="text-9xl font-semibold  w-1/2 text-center text-[#1ee07f]">
        Mortgages made&nbsp;simple
      </h1>
      <div className="flex justify-between w-2/3">
        <div className="flex items-center flex-col gap-4">
          <button className="py-4 px-10  bg-[#1ee07f] text-black font-medium rounded-full ">
            Start my approval
          </button>
          <div className="flex items-center gap-3 text-sm">
            <IoMdStopwatch /> <h1>3 min | No credit impact</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-yellow-300 text-[25px]">
            <FcGoogle size={37} />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </div>
          <h1 className="text-xs">4.6 Stars | 3177 Google reviews</h1>
        </div>
      </div>
    </div>
  );
}
