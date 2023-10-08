import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import Classes from "./styles/mainpage.module.css";

const textStyleBold = {
  backdropFilter: "blur(9px) saturate(100%)",
  WebkitBackdropFilter: "blur(9px) saturate(100%)",
  backgroundColor: "rgba(39, 39, 39, 0)",
  fontSize: "4rem",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "20rem",
  minHeight: "520px",
};
const divStyle = {
  minHeight: "100px",
};

const Index = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div>
        <div className="flex flex-row h-64 w-108 mt-20">
          <div className="w-24 mr-16 bg-emerald-900 h-96 ">
            <div>Event Pass</div>
            <div>Genre Pass</div>
            <div>All Event Pass</div>
          </div>
          <div className="w-108">
            <div>capture the imagination</div>
          </div>
        </div>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
