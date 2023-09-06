import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Classes from "@/styles/Sponsor.module.css";
import Image from "next/image";
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
const Guests = () => {
    const text1 = "Explore, Learn, and Grow"
    const text2 = " in Our Workshops!"
    const text3 = "Discover Innovative Techniques and Gain Valuable Insights in Our"
    const text4 = "Inspiring and Interactive Workshops Today!"
    const responsive = {
        superLargeDesktop: {
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
            <center>
                <div style={textStyleBold}>
                    {text1}
                    <br />
                    {text2}
                </div>
                <div style={textStyle}>
                    {text3}
                    <br />
                    {text4}
                </div>
                <br />
            </center>
            <section className={Classes.sponsor} id="sponsors">
                <Container>
                    <div className={Classes.sponsor_bx}>
                        <h2 className={Classes.heading} style={{ fontSize: "32px" }}>Our Previous Guest</h2>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            className="slider"
                        >
                            <div className={Classes.guest}>
                                <Image
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                                    alt="Rectangle"
                                    width={100}
                                    height={100}
                                />
                                <div className={Classes.overlayText}>
                                  <h1>JULES</h1>
                                  <br/>
                                 <p>{"She is portrayed by Hunter Schafer, while her 11-year-old counterpart is portrayed by Clark Furlong. Eclectic, free-spirited, chaotic and kind, Jules is a new girl in town, who quickly catches attention."} </p> 
                                </div>
                            </div>

                            <div className={Classes.guest}>
                                <Image
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                                    alt="Rectangle"
                                    width={100}
                                    height={100}
                                />
                                <div className={Classes.overlayText}>
                                  <h1>JULES</h1>
                                  <br/>
                                 <p>{"She is portrayed by Hunter Schafer, while her 11-year-old counterpart is portrayed by Clark Furlong. Eclectic, free-spirited, chaotic and kind, Jules is a new girl in town, who quickly catches attention."} </p> 
                                </div>
                            </div>
                            <div className={Classes.guest}>
                                <Image
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                                    alt="Rectangle"
                                    width={100}
                                    height={100}
                                />
                                <div className={Classes.overlayText}>
                                  <h1>JULES</h1>
                                  <br/>
                                 <p>{"She is portrayed by Hunter Schafer, while her 11-year-old counterpart is portrayed by Clark Furlong. Eclectic, free-spirited, chaotic and kind, Jules is a new girl in town, who quickly catches attention."} </p> 
                                </div>
                            </div>
                            <div className={Classes.guest}>
                                <Image
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                                    alt="Rectangle"
                                    width={100}
                                    height={100}
                                />
                                <div className={Classes.overlayText}>
                                  <h1>JULES</h1>
                                  <br/>
                                 <p>{"She is portrayed by Hunter Schafer, while her 11-year-old counterpart is portrayed by Clark Furlong. Eclectic, free-spirited, chaotic and kind, Jules is a new girl in town, who quickly catches attention."} </p> 
                                </div>
                            </div>
                            <div className={Classes.guest}>
                                <Image
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
                                    alt="Rectangle"
                                    width={100}
                                    height={100}
                                />
                                <div className={Classes.overlayText}>
                                  <h1>JULES</h1>
                                  <br/>
                                 <p>{"She is portrayed by Hunter Schafer, while her 11-year-old counterpart is portrayed by Clark Furlong. Eclectic, free-spirited, chaotic and kind, Jules is a new girl in town, who quickly catches attention."} </p> 
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Guests
