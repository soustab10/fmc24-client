import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const AboutUs = () => {
  return (
    <>
    <div className="h-426">
     
   
    <Image  className="float-right mr-24 ml-8" src="/image15.png" alt="logo"  objectFit='cover' width={400} height={50}/>
    <div>
    <p className="text-7xl text-white font-semibold ml-24 mb-9 font-sans">About Us</p>
    <p className="ml-24 text-white text-xl text-justify">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="ml-24 text-white text-xl text-justify">To know more click below</p>
      <Link href="#">
        
      <button className="border-solid border-2 ml-24 mt-6 text-white rounded-3xl h-10 w-36 text-xl transition duration-300 transform  hover:shadow-xl ">About us</button>
      </Link>
      </div>
    </div>
     
    </>
  )
}

export default AboutUs
