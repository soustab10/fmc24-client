import React, { useEffect, useState } from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import combinedData from "./combined_data.json";
import Image from "next/image";
// import QRCode from "qrcode.react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [insti, setInsti] = useState("");
  const [transcid, setTranscid] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemData, setItemData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };
  const textBold = {
    fontWeight: "bold",
    fontSize: "2rem",
    textAlign: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "500px",
    margin: "auto",
  };

  const checkoutBtnStyle = {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  useEffect(() => {
    // Function to fetch item data from JSON or your data source
    const fetchItemData = async () => {
      try {
        const data = combinedData;
        setItemData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch item data when the component mounts
    fetchItemData();

    // Load selected item IDs from local storage
    const storedSelectedItems =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    setSelectedItems(storedSelectedItems);
  }, []);

  const getItemDetails = (itemId) => {
    if (!itemData) return null;
    const selectedItem = itemData.find((item) => item.id === itemId);
    return selectedItem;
  };

  const sumOfSelectedItems = selectedItems.reduce((acc, itemId) => {
    const item = combinedData.find((item) => item.id === itemId);
    if (item) {
      return acc + item.price;
    }
    return acc;
  }, 0);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div style={textBold}>Checkout</div>
      <br />
      <div style={formStyle}>
        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((itemId) => {
            const selectedItem = getItemDetails(itemId);
            if (selectedItem) {
              return (
                <li key={itemId}>
                  {selectedItem.Title} {selectedItem.price}
                </li>
              );
            }
            return null; // Handle if the item is not found in the data
          })}
        </ul>

        <strong>Total Price: Rs.{sumOfSelectedItems}</strong>

        <Image
        src="/qrcode.png" // Replace with the actual Unsplash image URL
        alt="Unsplash Image"
        width={300} // Specify the desired width
        height={300} // Specify the desired height to make it square
      />
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="insti">Institution:</label>
        <input
          type="text"
          id="insti"
          value={insti}
          required
          onChange={(e) => setInsti(e.target.value)}
        />

        <label htmlFor="transcid">Transaction ID:</label>
        <input
          type="text"
          id="transcid"
          value={transcid}
          required
          onChange={(e) => setTranscid(e.target.value)}
        />

        <button style={checkoutBtnStyle} type="submit">
          Submit
        </button>
      </form>

      <div>
        {/* <QRCode value="https://google.com" /> */}
        <a href="https://google.com">Google Form</a>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
