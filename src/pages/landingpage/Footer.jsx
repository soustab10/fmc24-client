import React from 'react'
import React, { useState } from "react";

const Footer = () => {
  function IconButton({ src, alt, iconClassName }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    const backgroundColor = isClicked
      ? "#A782FF"
      : isHovered
      ? "#A782FF"
      : "#E4B5FF";

    return (
      <div
        className="flex flex-col mr-0 shrink-0 h-8 w-8 items-center justify-center pt-1 pb-2 rounded-full"
        style={{ backgroundColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src={src} className={iconClassName} alt={alt} />
      </div>
    );
  }

  return (
    <>

    <div>
        <></>
    </div>
     

      <div
        className="flex flex-col justify-end h-[400px]"
        id="NewRootRoot"
        style={{
          background:
            "url(https://file.rendit.io/n/5jCD3nM2jBEv4WYPmWC9.svg) no-repeat center center / cover",
        }}
      >
        <div className="flex flex-col justify-between h-[377px] mb-0 mx-auto pt-12 pb-16">
          <img
            src="https://file.rendit.io/n/P5IGsXiN0h2qCAKmXvv6.png"
            className="h-[69.5px] w-[506px] mb-20 "
            id="FMClogowhite"
            style={{ display: "block", margin: "0 auto" }}
            alt="Footer Logo"
          />
          <div
            className="flex flex-row pl-12 gap-24 w-1/2 items-center justify-center"
            style={{ margin: "0 auto" }}
          >
            <IconButton
              src="https://file.rendit.io/n/uKxRuGH1UWBIGR75AqNQ.svg"
              alt="Icon 1"
              iconClassName={"w-5 pt-0.5"}
            />
            <IconButton
              src="https://file.rendit.io/n/MlPny4TVSCpliadYV6nz.svg"
              alt="Icon 2"
              iconClassName={"w-3 pt-1"}
            />
            <IconButton
              src="https://file.rendit.io/n/2oeO2KjXduF5dsSEPQKa.svg"
              alt="Icon 3"
              iconClassName={"w-6 pt-0.5"}
            />
            <IconButton
              src="https://file.rendit.io/n/dptVu7QoH0WOlCl9lM3e.svg"
              alt="Icon 4"
              iconClassName={"w-6 pt-0.5"}
            />
          </div>
        </div>
        
        <div className="flex flex-col items-start text-2xl absolute pb-[108px] ml-[107px] left-[20px] text-black">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund & Cancellation</a>
          <a href="#">Online Registration</a>
          <a href="#">Contact Us</a>
        </div>
        
        <div className="text-center text-2xl absolute pb-[240px] right-[198px] pr-4 text-black">
          PUBLI HEAD
        </div>
        <div className="text-center text-2xl absolute pb-[207px] right-[206px] text-black">
          Lorem Ipsum
        </div>
        <div className="text-center text-2xl absolute pb-[174px] right-[212px] text-black">
          9999988888
        </div>
        <div className="text-center text-2xl absolute pb-[132px] right-[146px] text-black">
          MARKETING HEAD
        </div>
        <div className="text-center text-2xl absolute pb-[99px] right-[206px] text-black">
          Lorem Ipsum
        </div>
        <div className="text-center text-2xl absolute pb-[66px] right-[212px] text-black">
          9999988888
        </div>
      </div>

    </>
  );
};

export default Footer;


