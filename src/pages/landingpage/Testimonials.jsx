import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Classes from "./styles/Testimonials.module.css";
import {} from "@next/font/google";
import styles from "./styles/Testimonial.module.css";
import { useState, useEffect, useRef } from "react";
const images = [
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18126082/pexels-photo-18126082/free-photo-of-close-up-of-chipmunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const carouselRef = useRef(null);

  const handleSwipeStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleSwipeEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      // Swipe right
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    } else if (deltaX < -50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change images every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const getVisibleIndices = (currentIndex) => {
    const centerIndex = currentIndex % images.length;
    const leftIndex = (centerIndex - 1 + images.length) % images.length;
    const rightIndex = (centerIndex + 1) % images.length;
    return [leftIndex, centerIndex, rightIndex];
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);



  return (
    <>
      {isMobile ? (
        <>
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
        <div
          className={styles.carousel}
          onTouchStart={handleSwipeStart}
          onTouchEnd={handleSwipeEnd}
          ref={carouselRef}
        >
          <div className={styles["carousel-inner"]}>
            {getVisibleIndices(currentIndex).map((index) => (
              <>
                <img
                  key={index}
                  src={images[index]}
                  alt={`Animal ${index + 1}`}
                  className={`${styles.slide} ${
                    index === currentIndex % images.length ? styles.active : ""
                  }`}
                />
              </>
            ))}
          </div>
        </div>
      </center>
    </div>
        </>
      ) : (
        <>
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
        <div
          className={styles.carousel}
          onTouchStart={handleSwipeStart}
          onTouchEnd={handleSwipeEnd}
          ref={carouselRef}
        >
          <div className={styles["carousel-inner"]}>
            {getVisibleIndices(currentIndex).map((index) => (
              <>
                <img
                  key={index}
                  src={images[index]}
                  alt={`Animal ${index + 1}`}
                  className={`${styles.slide} ${
                    index === currentIndex % images.length ? styles.active : ""
                  }`}
                />
              </>
            ))}
          </div>
        </div>
      </center>
    </div>
        </>
      )}
    </>

    
  );
};

export default Testimonials;
