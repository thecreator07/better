"use client";
import React from "react";

export default function Srtories() {
  return (
    <div className="h-screen w-full py-20 px-32 flex items-center bg-white">
      <div
        style={{
          backgroundImage: "",
          height: "90%",
          width: "27%",
          border: "1px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div className="flex gap-5 p-5 gradientcolor h-full items-baseline flex-col justify-end">
          <h1 className="text-white font-medium text-lg">
            " The Reason why i decided to go with Better is because after I did
            my research with the other lenders, Better was the ones that
            provided me with the lowest interest rate
          </h1>
          <p className="text-xs">Arian - Better Mortage customer</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
