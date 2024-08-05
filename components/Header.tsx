import React from "react";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";

function Header() {
  return (
    <>
      <div
        // ref={navbarRef}
        className={`flex w-full  text-white bg-[#004733d8] p-5 sm:bg-opacity-35 sm:backdrop-blur-2xl fixed top-0 md:px-20 px-1 justify-between items-center
        }`}
        style={{ zIndex: 1000 }} // Ensure navbar appears above other content
      >
        <div className="flex gap-12 ">
          <Link
            href={"/"}
            className="font-bold text-xl  md:mx-0 flex justify-center items-center"
          >
            Better
          </Link>
          <div className="flex gap-12">
            <h1 className="hover:transition-all hover:duration-300 bg-transparent text-white hover:bg-white hover:text-black p-2.5 rounded-full ">
              <Link href={"/"}>Buy</Link>
            </h1>
            <h1 className="hover:transition-all hover:duration-300 bg-transparent text-white hover:bg-white hover:text-black p-2.5 rounded-full ">
              <Link href={"/our-projects"}>Refinance</Link>
            </h1>
            <h1 className="hover:transition-all hover:duration-300 bg-transparent text-white hover:bg-white hover:text-black p-2.5 rounded-full ">
              <Link href={"/our-blogs"}>HELOC</Link>
            </h1>
            <h1 className="hover:transition-all hover:duration-300 bg-transparent text-white hover:bg-white hover:text-black p-2.5 rounded-full ">
              <Link href={"/our-blogs"}>Rates</Link>
            </h1>
            <h1 className="hover:transition-all hover:duration-300 bg-transparent text-white hover:bg-white hover:text-black p-2.5 rounded-full ">
              <Link href={"/our-blogs"}>Better+</Link>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="p-2.5 border rounded-full">
            <IoMdCall size={25} />
          </div>
          <Link href={"/contact-us"} className="tracking-tight font-semibold">
          <button className="hover:transition-all hover:duration-300 bg-transparent text-white hover:bg-white hover:text-black p-2.5 rounded-full ">
          Sign in            </button>
          </Link>
        </div>
      </div>
      <div className="block md:hidden mx-4 md:mx-0">{/* <SideBar /> */}</div>
    </>
  );
}

export default Header;
