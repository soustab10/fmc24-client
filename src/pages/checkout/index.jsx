import React, { useEffect, useState } from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import combinedData from "./combined_data.json";
import Image from "next/image";
import getConfig from 'next/config';
import Router from "next/router";
import axios from 'axios';
// import QRCode from "qrcode.react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [insti, setInsti] = useState("");
  const [transcid, setTranscid] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemData, setItemData] = useState(null);
  const { publicRuntimeConfig } = getConfig();
  const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;

  const link = "https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/viewform?usp=pp_url&entry.997687481=Shubham&entry.1447534415=6201060889&entry.1224001380=HUBHDEWQSN&entry.1589365680=HEBJWDNKQ&entry.2107420521=HBFJEWDKLQ&entry.248033448=+HCEJNWQ";


  // const link="https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/viewform?usp=pp_url&entry.997687481=Shubham&entry.1447534415=6201060889&entry.1224001380=HUBHDEWQSN&entry.1589365680=HEBJWDNKQ&entry.2107420521=HBFJEWDKLQ&entry.248033448=+HCEJNWQ"
  const formUrl= 'https://docs.google.com/forms/d/e/1FAIpQLSfmxwNrwZhBfLMMnaCpydwBV9Juozd6Uty0zwAgMRZNRDdMgg/formResponse';
  const handleSubmit =async (e) => {
    
      e.preventDefault();
     try{
      //dev gupta:(God)
      // let response = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfmxwNrwZhBfLMMnaCpydwBV9Juozd6Uty0zwAgMRZNRDdMgg/formResponse?&submit=Submit?usp=pp_url&entry.2058644330=${name}&entry.666527389=${phone}&entry.352462634=${email}&entry.161165018=${insti}&entry.169406111=${transcid}&entry.1113568387=${JSON.stringify(selectedItems)}`, { 
      //fmc
      // "https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/viewform?usp=pp_url&entry.997687481=Shubham&entry.1447534415=6201060889&entry.1224001380=HUBHDEWQSN&entry.1589365680=HEBJWDNKQ&entry.2107420521=HBFJEWDKLQ&entry.248033448=+HCEJNWQ";
      let response = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/formResponse?&submit=Submit?usp=pp_url&entry.997687481=${name}&entry.1447534415=${phone}&entry.1224001380=${email}&entry.1589365680=${insti}&entry.2107420521=H${transcid}&entry.248033448=${JSON.stringify(selectedItems)}`, { 

        method: "POST",
      });
    }catch(err){
      console.log("submitted");
      alert("Submitted we will update you soon");
      const useremail=sessionStorage.getItem('email');
      console.log(useremail)
      // const resp=await fetch(backendURL + "/api/carts", {
      //     method: "DELETE",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: useremail,
      //     }),
      //   });
      //   const data2 = await resp.json();
        // console.log(data2);
        Router.push('/');
    }

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
    const getInitialUsers=async ()=>{
      // let i,j;
      const useremail=sessionStorage.getItem('email');
      console.log(useremail)
      const data=await fetch(backendURL+"/api/carts",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:useremail
        })
      });
      let cart,cartArray_temp=[],cartArray;
      const response=await data.json();
      console.log(response.cartItems)
      cart=response.cartItems
      for(let j in cart){
        cartArray_temp.push(cart[j].id)
      }
      cartArray=cartArray_temp
      setSelectedItems(cartArray);
    }


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
    // const storedSelectedItems =
      // JSON.parse(localStorage.getItem("selectedItems")) || [];
      getInitialUsers();
    
  }, []);

  useEffect(() => {
    const storedItems = sessionStorage.getItem("cartItems");
    console.log("storedItems", storedItems)
    const initialItems = storedItems ? JSON.parse(storedItems) : [];
    setSelectedItems(initialItems);
    console.log(initialItems);
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
      {/* <br />
      <br />
      <br />
      <br />
      <div style={textBold}>Checkout</div>
      <br /> */}
      {/* <div style={formStyle}>
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
      </div> */}
      {/* <form onSubmit={handleSubmit} style={formStyle}>
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
      </form> */}

      {/* <div>
        <a href="https://google.com">Google Form</a>
      </div> */}
      <section class="flex min-h-screen w-screen "
                style={{
                 
                    backgroundSize: 'cover',  // Adjust as needed
                    backgroundPosition: 'center',  // Adjust as needed
                    position: 'relative',
                }}
            >
                <div className=' top-0'>
                  
                </div>
                <div className=" mt-28 mx-auto p-2">

                    <div class=" flex-1  h-auto max-w-4xl mx-auto bg-white rounded-3xl shadow-xl">
                        <div class="flex flex-col md:flex-row">
                            <div className=' flex items-center justify-center  md:w-1/2 '>
                           
                                <Image
                                    src={require("./static/clip.png")}
                                    width={100}
                                    height={100}
                                    className=" md:h-full sm:h-fit w-[70vw] md:w-screen md:rounded-tl-3xl md:rounded-bl-3xl rounded-tl-3xl  max-md:rounded-tr-3xl"
                                    alt="signup"
                                />
                                
                                <h1 class="absolute md:text-3xl text-2xl text-center  text-white font-semibold  top-16 mt-20 md:mt-20 px-14 tracking-wide">
                                    Complete your purchase</h1>
                                    <h2 class="absolute text-xl text-center text-white font-semibold top-20 mt-32 md:mt-32 px-14 tracking-wide">
                                    Selected Items:</h2>
        <ul class="absolute text-lg text-center text-white font-semibold top-28 mt-40 md:mt-40 px-14 tracking-wide">
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
    
        <h3 className="absolute text-lg md:text-xl mb-2 text-center text-white font-semibold  mt-64 md:mt-64 border-white border-2 p-2 rounded-lg px-4 "> Total Amount to be paid: {sumOfSelectedItems} </h3>
    
    
                            </div>
                            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">

                                <div class="w-full">

                                    <h1 class="mb-12 text-2xl font-bold text-center text-black tracking-normal">
                                        Checkout Form
                                    </h1>
                                    <form onSubmit={(e) => handleSubmit(e)} className=''>
             
           <label htmlFor="name" className="block text-sm">Name:</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone" className="block text-sm">Phone:</label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email" className="block text-sm">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="insti" className="block text-sm">Institution:</label>
        <input
          type="text"
          id="insti"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          value={insti}
          required
          onChange={(e) => setInsti(e.target.value)}
        />

        <label htmlFor="transcid" className="block text-sm">Transaction ID:</label>
        <input
          type="text"
          id="transcid"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          value={transcid}
          required
          onChange={(e) => setTranscid(e.target.value)}
        />

        <div className='text-center'>
  <button type="submit"
    class="mt-7 ml-12 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-15 bg-lime-400 ">
    
    <span>Submit</span>
</button>
</div>
</form>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
     <Footer/>

    </div>
  );
};

export default Checkout;
