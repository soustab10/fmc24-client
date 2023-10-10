import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import Classes from "./aboutus.module.css";
import Image from 'next/image';
import Link from 'next/link';


// const textStyleBold = {
//   backdropFilter: "blur(9px) saturate(100%)",
//   WebkitBackdropFilter: "blur(9px) saturate(100%)",
//   backgroundColor: "rgba(39, 39, 39, 0)",
//     fontSize: "4rem",
//   fontWeight: "bold",
//   textAlign: "center",
//   marginTop: "20rem",
//   minHeight: "520px",
// };
// const divStyle = {
//   minHeight: "100px",
// };

const About = () => {
  return (
    <>
    <Header />
    <div  className={Classes.headerimg} >
    <Image src='/aboutuspic.png' alt="" height={100} width={100}/>
    </div>


    <div className={Classes.div1}>
    <Image className={Classes.img} alt="" src='/about1.svg'   height={1148.83} width={667.22} />
    <div className={Classes.div1in}>
    <div className={Classes.imgdiv1}>
    <Image  src='/Group 198.png' alt="" height={100} width={100} />
    </div>
    <h1>LOREM IPSUM</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.</p>
    </div>
    </div>
    



    <div className={Classes.div2}>
   
    <div className={Classes.div2in}>
    <div className={Classes.imgdiv2}>
    <Image  src='/Rectangle 64.png' alt="" height={100} width={100} />
    </div>
    <h1>LOREM IPSUM</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.</p>
    </div>
    <Image className={Classes.img2} src='/about2.svg'  alt=""   height={1148.83} width={667.22} />
    </div>




    <div className={Classes.div3}>
    <Image className={Classes.img3} src='/about3.svg'  alt=""   height={1148.83} width={667.22} />
    <div className={Classes.div3in}>
    <div className={Classes.imgdiv3}>
    <Image src='/Group199.png'  alt=""  height={100} width={100} />
    </div>
    <h1 className="font-sans">LOREM IPSUM</h1>
    <p className="font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.</p>
    </div>
    </div>

    

    <div className={Classes.div4}>
    <div className={Classes.div4in}>
    <div className={Classes.imgdiv4}>
    <Image  src='/Group201.png'  alt=""  height={100} width={100} />
    </div>
    <h1>LOREM IPSUM</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis velit iste mollitia aspernatur voluptatibus rerum saepe temporibus! Eos iste blanditiis nihil earum laborum tempore deserunt, ab cum excepturi voluptatem.</p>
    </div>
    <Image className={Classes.img4} src='/about4.svg'  alt=""   height={1148.83} width={667.22} />
    </div>
    


    <Footer />
    </>
  )
};

export default About;
