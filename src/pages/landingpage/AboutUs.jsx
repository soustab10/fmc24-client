import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  const text1 =
    "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const text2 = "To know more click below";
  const text3 = "About Us";
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
          <center>
            <Image className="float-right mr-24 ml-8 rounded-3xl" src="/image15.png" alt="logo" objectFit='cover' width={400} height={50} />
            <br />
            <br />

            <p className="text-7xl place-content-center text-white font-semibold font-sans">{text3}</p>
            <br />
            <p className="text-white text-xl text-justify">{text1}</p>
            {/* <p className="text-white text-xl text-justify">{text2}</p> */}
            <center>
              <Link href="#">
                <button className="border-solid border-2 mt-6 text-white rounded-3xl h-10 w-36 text-xl transition duration-300 transform hover:shadow-xl">
                  {text3}
                </button>
              </Link>
            </center>

          </center>
        </>
      ) : (
        <>
          <div className="h-426">


            <Image className="float-right mr-24 ml-8" src="/image15.png" alt="logo" objectFit='cover' width={400} height={50} />
            <div>
              <p className="text-7xl text-white font-semibold ml-24 mb-9 font-sans">{text3}</p>
              <p className="ml-24 text-white text-xl text-justify">
              {text1}
              </p>
              <p className="ml-24 text-white text-xl text-justify">{text2}</p>
              <Link href="#">

                <button className="border-solid border-2 ml-24 mt-6 text-white rounded-3xl h-10 w-36 text-xl transition duration-300 transform  hover:shadow-xl ">{text3}</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AboutUs;
