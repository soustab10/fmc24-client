import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Classes from "@/styles/Sponsor.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/legacy/image";
import "react-multi-carousel/lib/styles.css";
const Sponsors = () => {
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
    paddingBottom: "20px",
  };

  const carouselItem = {
    paddingRight: "10px",
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 681 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 680, min: 0 },
      items: 1,
      
    },
  };
  return (
    <>
      <section
        className={Classes.sponsor}
        style={topSectionPadding}
        id="sponsors"
      >
        <div style={bottomPadding}>
          <Marquee gradient={false} speed={50} direction="right">
            <div style={filledTextStyle}>PREVIOUS SPONSORS</div>
            <div style={strokeTextStyle}>PREVIOUS SPONSORS</div>
            <div style={filledTextStyle}>PREVIOUS SPONSORS</div>
            <div style={strokeTextStyle}>PREVIOUS SPONSORS</div>
            <div style={filledTextStyle}>PREVIOUS SPONSORS</div>
            <div style={strokeTextStyle}>PREVIOUS SPONSORS</div>
            <div style={filledTextStyle}>PREVIOUS SPONSORS</div>
            <div style={strokeTextStyle}>PREVIOUS SPONSORS</div>
            <div style={filledTextStyle}>PREVIOUS SPONSORS</div>
            <div style={strokeTextStyle}>PREVIOUS SPONSORS</div>
          </Marquee>
        </div>
        <Container>
          <div className={Classes.sponsor_bx}>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              className="slider"
            >
              <div style = {carouselItem}>
                <Image
                  src="/canon.png"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div style = {carouselItem}>
                <Image
                  src="/fujisq.png"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div style = {carouselItem}>
                <Image
                  src="/huion-01.png"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div style = {carouselItem}>
                <Image
                  src="/kalkaari.jpg"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div style = {carouselItem}>
                <Image
                  src="/ifp.jpg"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div style = {carouselItem}>
                <Image
                  src="/redfm.jpg"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div style = {carouselItem}>
                <Image
                  src="/redbull.png"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
            </Carousel>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Sponsors;
