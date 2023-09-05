import React,{useState,useEffect} from 'react'
import Link from "next/link";
import Image from 'next/image'
//import './styles/Header.css'

const Header = () => {
   const [menuState,setMenuState] = useState(false); 
  const handleMenu= ()=>{
    setMenuState(!menuState);
  };
  
  

  return (
    <>
        <div className='container-header flex flex-row h-20 fixed left-0 right-0'>
      <div className='fmcw-logo-header basis-1/6 place-self-center'></div>
      <div className='links-container-header flex justify-end flex-row basis-5/6'>
        <Link href="/" className='nav-menu links-header w-24 place-self-center'>events
        </Link>
        <Link href="" className='nav-menu links-header w-24 place-self-center'>sponsors
        </Link>
        <Link href="" className='nav-menu links-header w-24 place-self-center'>glimpses
        </Link>
        <Link href="" className='nav-menu links-header w-24 place-self-center'>team
        </Link>
        <Link href=""
         className=' links-header w-16 place-self-center'>
        
        <button onClick={handleMenu}>

        {menuState? null: <div class="menu-link space-y-1">
            <div class="w-8 h-0.5 bg-white"></div>
            <div class="w-8 h-0.5 bg-white"></div>
            <div class="w-8 h-0.5 bg-white"></div>
        </div>}
       
        </button>


        {menuState? <div className="menu-design">
             <div className="list">
             <Link href="/" className='menu-list'>events</Link>
             <Link href="" className='menu-list'>sponsors</Link>
             <Link href="" className='menu-list'>glimpses</Link>
             <Link href="" className='menu-list'>team</Link>
             
             </div>
             
             

        </div>:null}
       
        
        </Link>
        {menuState? 
          <button onClick={handleMenu}>
            <Image 
          className="cross-cut"
          src={require('./../../../public/error.png')}
         >
          </Image>
          </button>
        :null} 
        
      </div>
    </div>
     
    </>
  )
}

export default Header
