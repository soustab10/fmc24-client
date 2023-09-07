import React from "react";
import Image from "next/image";
import Classes from "./styles/awardSection.module.css";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="159"
            height="38"
            viewBox="0 0 159 38"
            fill="none"
          >
            <rect
              x="0.95"
              y="0.95"
              width="157.1"
              height="35.2815"
              rx="17.6408"
              stroke="white"
              stroke-width="1.9"
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontFamily="Work Sans"
            >
              Explore More{" "}
            </text>
          </svg>
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
