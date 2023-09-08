import React from "react";
import Image from "next/image";
// import Classes from "./styles/awardSection.module.css";
import Marquee from "react-fast-marquee";
import {} from "@next/font/google";
const textStyleBold = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "72px",
  fontStyle: "normal",
  fontWeight: "700",
};
const textStyle = {
  textAlign: "center",
  color: "#FFF",
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "400",
};

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

const topSectionPadding = {
  paddingTop: "200px",
  paddingBottom: "100px",
};

const bottomPadding = {
  paddingBottom: "75px",
};
const awardSection = () => {
  const text1 = "Unleash Your Potential Through";
  const text2 = "Thrilling Competitive Events!";
  const text3 =
    "Showcase Your Skills and Win Big in Our Prestigious and Thrilling";
  const text4 = "Competitive Challenges and Contests!";
  const text5 = "Explore More!";
  return (
    <div style={topSectionPadding}>
      <center>
        <div style={bottomPadding}>
          <Marquee gradient={false} speed={50}>
            <div style={filledTextStyle}>EVENTS</div>
            <div style={strokeTextStyle}>EVENTS</div>
            <div style={filledTextStyle}>EVENTS</div>
            <div style={strokeTextStyle}>EVENTS</div>
            <div style={filledTextStyle}>EVENTS</div>
            <div style={strokeTextStyle}>EVENTS</div>
            <div style={filledTextStyle}>EVENTS</div>
            <div style={strokeTextStyle}>EVENTS</div>
            <div style={filledTextStyle}>EVENTS</div>
            <div style={strokeTextStyle}>EVENTS</div>
          </Marquee>
        </div>

        <div style={textStyleBold}>
          {text1}
          <br />
          {text2}
        </div>
        <div style={textStyle}>
          {text3}
          <br />
          {text4}

          <center>
            <br />

            <button className="border-solid border-2 mt-6 text-white rounded-3xl h-10 w-48 text-lg transition duration-300 transform  hover:shadow-xl hover:text-blue-950 bg-transparent hover:bg-white">
              {text5}
            </button>
          </center>
        </div>
        <br />
        <Image
          src="/Frame29.svg"
          alt="frame29"
          width={100}
          height={100}
          style={{}}
        />
      </center>
    </div>
  );
};

export default awardSection;
