import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="header flex-col md:flex-row shadow-md">
      <div className="text-center md:text-left">
        <Image
          src="/assets/images/nasa-logo.svg"
          alt="Nasa"
          height={80}
          width={80}
        />
      </div>
      <div className="">
        <h1 className="text-xl text-center md:text-right md:text-3xl font-bold uppercase text-red-400">
          Astronomy Picture <br />
          of the Day
        </h1>
      </div>
    </div>
  );
};

export default Header;
