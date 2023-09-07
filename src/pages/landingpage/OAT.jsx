import React from "react";
import Image from "next/image";
import Classes from "./styles/OAT.module.css";
const OAT = () => {
  return (
    <center>
      <div className={Classes.container_row}>
        <div className={Classes.layer1}>
          <h2 className={Classes.css1}>OPEN AIR</h2>
        </div>
        <div className={Classes.layer2}>
          <h2 className={Classes.css3}>OPEN AIR</h2>
        </div>
      </div>
      <div className={Classes.container_row}>
        <div className={Classes.layer1}>
          <h2 className={Classes.css2}>THEATRE</h2>
        </div>
        <div className={Classes.layer2}>
          <h2 className={Classes.css4}>THEATRE</h2>
        </div>
      </div>

      <Image
        src="/images/oatbkg.png"
        width={1000}
        height={5000}
        className={Classes.cssi}
        alt="OAT"
      />
    </center>
  );
};

export default OAT;
