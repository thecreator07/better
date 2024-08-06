"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Srtories() {
  return (
    <div className="h-screen w-full py-20 justify-between px-32 flex items-center bg-white">
      <div
        style={{ width: "27%", height: "100%" }}
        className="flex justify-center flex-col gap-5 items-center"
      >
        <div
          style={{
            backgroundImage: "",
            height: "90%",
            width: "100%",
            border: "1px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          className="flex gap-5 p-5 gradientcolor items-baseline flex-col justify-end"
        >
          <h1 className="text-white font-medium text-lg">
            &quot; The Reason why i decided to go with Better is because after I
            did my research with the other lenders, Better was the ones that
            provided me with the lowest interest rate
          </h1>
          <p className="text-xs">Arian - Better Mortage customer</p>
        </div>
        <div className="w-full flex justify-between items-center">
          {["Arian", "Amanda", "Paul"].map((data, i) => (
            <button
              key={i}
              className="text-black text-base font-medium border-[3px] rounded-full py-2.5 px-4 border-slate-100 hover:transition-all hover:duration-300 hover:border-green-500 hover:shadow-green-500 hover:shadow-[0_0_0_3px_inset]"
            >
              {data}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-8">
        <h1 className="text-8xl text-black font-semibold">
          Find out why we’re better.
        </h1>
        <button className="py-5 px-12 text-white text-base bg-green-800 rounded-full w-fit">
          See all our stories
        </button>
        <div className="flex items-center gap-2 text-black">
          <FaStar size={20} color="green" className="-translate-y-1" /> <h1 className="text-black font-medium">Trustpilot</h1> <h1>Excellent</h1>
          <h1> 4.3 out of 5</h1>
        </div>
      </div>
    </div>
  );
}
