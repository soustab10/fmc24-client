import React, { useState, useEffect } from "react";
import Image from "next/image";
import Classes from "./styles/OAT.module.css";
const OAT = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
    {isMobile ? (
        <>
          <center>
      <div className={Classes.container_row}>
        <div className={Classes.layer1}>
          <h2 className={Classes.css1m}>OPEN AIR</h2>
          <h2 className={Classes.css2m}>THEATRE</h2>
        </div>
        <div className={Classes.layer2}>
          <h2 className={Classes.css3m}>OPEN AIR</h2>
          <h2 className={Classes.css4m}>THEATRE</h2>
        </div>
        <div className={Classes.layer3}>
          <Image
            src="/images/oatbkg.png"
            width={128}
            height={190}
            className={Classes.cssim}
            alt="OAT"
          />
        </div>
      </div>
    </center>
        </>
      ) : (
        <>
          <center>
      <div className={Classes.container_row}>
        <div className={Classes.layer1}>
          <h2 className={Classes.css1}>OPEN AIR</h2>
          <h2 className={Classes.css2}>THEATRE</h2>
        </div>
        <div className={Classes.layer2}>
          <h2 className={Classes.css3}>OPEN AIR</h2>
          <h2 className={Classes.css4}>THEATRE</h2>
        </div>
        <div className={Classes.layer3}>
          <Image
            src="/images/oatbkg.png"
            width={1000}
            height={5000}
            className={Classes.cssi}
            alt="OAT"
          />
        </div>
      </div>
    </center>
        </>
      )}
    </>
    
    
  );
};

export default OAT;
