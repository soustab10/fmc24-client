import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Classes from "@/styles/Sponsor.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";
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
      <section className={Classes.sponsor} id="sponsors">
      <div style={bottomPadding}>
              <Marquee gradient={false} speed={50} direction="right">
                <div style={filledTextStyle}>SPONSORS</div>
                <div style={strokeTextStyle}>SPONSORS</div>
                <div style={filledTextStyle}>SPONSORS</div>
                <div style={strokeTextStyle}>SPONSORS</div>
                <div style={filledTextStyle}>SPONSORS</div>
                <div style={strokeTextStyle}>SPONSORS</div>
                <div style={filledTextStyle}>SPONSORS</div>
                <div style={strokeTextStyle}>SPONSORS</div>
                <div style={filledTextStyle}>SPONSORS</div>
                <div style={strokeTextStyle}>SPONSORS</div>
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
              <div className={Classes.item}>
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div className={Classes.item}>
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div className={Classes.item}>
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div className={Classes.item}>
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                  alt="Rectangle"
                  width={100}
                  height={100}
                />
              </div>
              <div className={Classes.item}>
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
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
