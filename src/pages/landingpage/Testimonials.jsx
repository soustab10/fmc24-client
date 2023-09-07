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

const Testimonials = () => {
  return (
    <div style={topSectionPadding}>
      <center>
        <div style={bottomPadding}>
          <Marquee gradient={false} speed={50}>
            <div style={filledTextStyle}>TESTIMONIALS</div>
            <div style={strokeTextStyle}>TESTIMONIALS</div>
            <div style={filledTextStyle}>TESTIMONIALS</div>
            <div style={strokeTextStyle}>TESTIMONIALS</div>
            <div style={filledTextStyle}>TESTIMONIALS</div>
            <div style={strokeTextStyle}>TESTIMONIALS</div>
            <div style={filledTextStyle}>TESTIMONIALS</div>
            <div style={strokeTextStyle}>TESTIMONIALS</div>
            <div style={filledTextStyle}>TESTIMONIALS</div>
            <div style={strokeTextStyle}>TESTIMONIALS</div>
          </Marquee>
        </div>
      </center>
    </div>
  );
};

export default Testimonials;
