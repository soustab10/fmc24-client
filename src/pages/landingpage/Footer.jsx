import React, { useState, useEffect } from "react";


const Footer = () => {
   
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





  function IconButton({ src, alt, iconClassName }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    const backgroundColor = isClicked
      ? "#A782FF"
      : isHovered
      ? "#A782FF"
      : "#E4B5FF";

    return (
      <div
        className="flex flex-col mr-0 shrink-0 h-8 w-8 items-center justify-center pt-1 pb-2 rounded-full"
        style={{ backgroundColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src={src} className={iconClassName} alt={alt} />
      </div>
    );
  }

  return (
    <>  


{isMobile ? (
        <>
                 <div
        className="flex flex-col    "
        id="NewRootRoot"
        style={{
          background:
            "url(https://file.rendit.io/n/5jCD3nM2jBEv4WYPmWC9.svg) no-repeat center center / cover",
        }}
      >
          

          <div className="lft">  
             <div className=" flex flex-col justify-between h-[377px] mb-0 mx-auto pt-12 pb-16">
          
          <div>
          <img
            src="/fmcfooter.png"
            className="h-[70px] w-[300px] mb-20 "
            id="FMClogowhite"
            style={{ display: "block", margin: "50px" }}
            alt="Footer Logo"
          />
          </div>
         
          <div
            className="flex flex-row pl-12 gap-6 w-2 items-center "
            style={{ margin: "50px" }}
          >
            <IconButton
              src="https://file.rendit.io/n/uKxRuGH1UWBIGR75AqNQ.svg"
              alt="Icon 1"
              iconClassName={"w-5 pt-0.5"}
            />
            <IconButton
              src="https://file.rendit.io/n/MlPny4TVSCpliadYV6nz.svg"
              alt="Icon 2"
              iconClassName={"w-3 pt-1"}
            />
            <IconButton
              src="https://file.rendit.io/n/2oeO2KjXduF5dsSEPQKa.svg"
              alt="Icon 3"
              iconClassName={"w-6 pt-0.5"}
            />
            <IconButton
              src="https://file.rendit.io/n/dptVu7QoH0WOlCl9lM3e.svg"
              alt="Icon 4"
              iconClassName={"w-6 pt-0.5"}
            />
          </div>
        </div>
             </div>

             
           <div className="flex flex-row  items-center  " >        
           <div className="flex flex-col  text-black px-5 py-5">
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund & Cancellation</a>
          <a href="#">Acceptance of Terms</a>
          <a href="#">Website Use</a>
          <a href="#">Privacy and Data</a>
          <a href="#">Termination</a>
        </div>
        <div className="flex flex-col  text-black px-5 py-5 ">
          <a href="#">Privacy Policy</a>
          <a href="#">Online Registration</a>
          <a href="#">Cookies and Tracking</a>
          <a href="#">Data and Security</a>
          <a href="#">User Rights</a>
          <a href="#">Contact Information</a>
        </div>
        
  </div>
         
            
             
        </div>
        </>
      ) : (
        <>
                   <div
        className="flex flex-row h-[400px]  "
        id="NewRootRoot"
        style={{
          background:
            "url(https://file.rendit.io/n/5jCD3nM2jBEv4WYPmWC9.svg) no-repeat center center / cover",
        }}
      >
     
     <div className="lft">  
             <div className=" flex flex-col justify-between h-[377px] mb-0 mx-auto pt-12 pb-16">
          
          <div>
          <img
            src="/fmcfooter.png"
            className="h-[100px] w-[506px] mb-20 "
            id="FMClogowhite"
            style={{ display: "block", margin: "50px" }}
            alt="Footer Logo"
          />
          </div>
         
          <div
            className="flex flex-row pl-12 gap-24 w-2 items-center "
            style={{ margin: "50px" }}
          >
            <IconButton
              src="https://file.rendit.io/n/uKxRuGH1UWBIGR75AqNQ.svg"
              alt="Icon 1"
              iconClassName={"w-5 pt-0.5"}
            />
            <IconButton
              src="https://file.rendit.io/n/MlPny4TVSCpliadYV6nz.svg"
              alt="Icon 2"
              iconClassName={"w-3 pt-1"}
            />
            <IconButton
              src="https://file.rendit.io/n/2oeO2KjXduF5dsSEPQKa.svg"
              alt="Icon 3"
              iconClassName={"w-6 pt-0.5"}
            />
            <IconButton
              src="https://file.rendit.io/n/dptVu7QoH0WOlCl9lM3e.svg"
              alt="Icon 4"
              iconClassName={"w-6 pt-0.5"}
            />
          </div>
        </div>
             </div>

             
           <div className="flex flex-row  items-center  mx-100 " style={{marginLeft:200 + "px"}}>        
           <div className="flex flex-col text-2xl text-black px-10 ">
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund & Cancellation</a>
          <a href="#">Acceptance of Terms</a>
          <a href="#">Website Use</a>
          <a href="#">Privacy and Data</a>
          <a href="#">Termination</a>
        </div>
        <div className="flex flex-col text-2xl text-black px-10 ">
          <a href="#">Privacy Policy</a>
          <a href="#">Online Registration</a>
          <a href="#">Cookies and Tracking</a>
          <a href="#">Data and Security</a>
          <a href="#">User Rights</a>
          <a href="#">Contact Information</a>
        </div>
        
  </div>
            
             
        </div>
        </>
      )}






     

      
    
    </>);
};

export default Footer;
