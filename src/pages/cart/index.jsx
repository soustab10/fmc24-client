import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import Classes from "./styles/mainpage.module.css";
import jsonData from "./events_data.json";
import { useState, useEffect } from "react";
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
  // const [jsonData, setJsonData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    // Toggle selected state for the clicked item
    const updatedSelectedItems = [...selectedItems];
    const index = updatedSelectedItems.indexOf(itemId);
    if (index !== -1) {
      updatedSelectedItems.splice(index, 1);
    } else {
      updatedSelectedItems.push(itemId);
    }

    setSelectedItems(updatedSelectedItems);

    // Save selected items to localStorage
    localStorage.setItem("selectedItems", JSON.stringify(updatedSelectedItems));
  };

  const sumOfSelectedItems = selectedItems.reduce((acc, itemId) => {
    const item = jsonData.find((item) => item.id === itemId);
    if (item) {
      return acc + item.price;
    }
    return acc;
  }, 0);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div>
        <div className="flex flex-row h-512 w-512 mt-20">
          <div className="w-36 mr-16 bg-emerald-900 h-512 ">
            <div>Event Pass</div>
            <div>Genre Pass</div>
            <div>All Event Pass</div>
          </div>
          <div className="w-108 mr-96">
            <div>
              {jsonData.map((item, index) => (
                <div key={index} className="item-container flex flex-row">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <div className="title mr-4 ml-2">{item.Title}</div>
                  <div className="title mr-4">{item.genre}</div>
                  <div className="title mr-4">{item.type}</div>
                  <div className="title mr-4">{item.price}</div>
                  {/* You can add additional content here */}
                </div>
              ))}
              <style jsx>{`
                .item-container {
                  border: 1px solid #ccc;
                  margin-bottom: 10px;
                  padding: 10px;
                }
                .title {
                  font-weight: bold;
                }
              `}</style>
            </div>
          </div>
          <div className="absolute right-0 bg-emerald-900 w-48 h-[180%]">
            <h2>Total Price:</h2>
            <p>Total Price: Rs.{sumOfSelectedItems}</p>
            <ul>
              {selectedItems.map((itemId) => (
                <li key={itemId}>
                  {jsonData.find((item) => item.id === itemId)?.Title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
