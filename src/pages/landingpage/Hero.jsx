import React, { useState, useEffect } from "react";
import Classes from "./styles/Hero.module.css";
// import "@/styles/globals.css";
// import '@/styles/customfont.css';
import Design from "./hoverDesign/design";
import Header from "./Header";
import Marquee from "react-fast-marquee";
const strokeTextStyle = {
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "2px",
  WebkitTextStrokeColor: "white",
  paddingRight: "36px",
};
const filledTextStyle = {
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  color: "white",
  paddingRight: "36px",
};

const aboutusdiv = {
  marginTop: "-250px",
  paddingBottom: "100px",
};
const aboutusdivm = {
  marginTop: "-175px",
  paddingBottom: "100px",
};
const VideoWithText = () => {
  const [isMobile, setIsMobile] = useState("https://res.cloudinary.com/dnmu26tku/video/upload/v1697042341/fmc/public/q87jwacn8qw3pbrrxdhj.mp4");

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth <= 768) setIsMobile("https://res.cloudinary.com/dnmu26tku/video/upload/v1697042341/fmc/public/q87jwacn8qw3pbrrxdhj.mp4");
      else if (window.innerWidth > 768) setIsMobile("https://res.cloudinary.com/dnmu26tku/video/upload/v1697042326/fmc/public/dbe9j6ucksdr3ue9jxrc.mp4");
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <>
      {/* {isMobile ? ( */}
        <>
          <div className={Classes.videoContainer}>
            <video autoPlay={true} loop={true} controls={false} muted className={Classes.video} key={isMobile}>
              <source src={isMobile} type="video/mp4" />
            </video>
          </div>
          <div style={aboutusdivm}>
            <Marquee gradient={false} speed={50} direction="right">
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
            </Marquee>
          </div>
        </>
      {/* ) : ( */}
        {/* <>
          <div className={Classes.videoContainer}>
            <video autoPlay loop muted className={Classes.video}>
              <source src={isMobile} type="video/mp4" />
            </video>
          </div>
          <div style={aboutusdiv}>
            <Marquee gradient={false} speed={50} direction="right">
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
              <div style={filledTextStyle}>ABOUT US</div>
              <div style={strokeTextStyle}>ABOUT US</div>
            </Marquee>
          </div>
        </>
      )} */}
    </>
  );
};
const Hero = () => {
  return (
    <>
      <div className={Classes.hero_text}>
        {/* <Header/> */}
        <VideoWithText />
      </div>
    </>
  );
};

export default Hero;
