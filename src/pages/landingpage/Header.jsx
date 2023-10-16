import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
// import Classes from "./styles/Header.module.css";

const navbarGlass = {
  background: 'rgba(0, 0, 25, 0.3)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(16.5px)',
  WebkitBackdropFilter: 'blur(16.5px)',

};

const logoLeftPadding = {
  paddingLeft: "15rem",
};
const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const [menuState, setMenuState] = useState(false);
  const handleMenu = () => {
    setMenuState(!menuState);
  };
  useEffect(() => {
    try {
      const x=sessionStorage.getItem("isLoggedIn");
      console.log(x)

      if(x===null || x===false)
       setIsLoggedin(false);
      else{
        setIsLoggedin(true);
      }
       
    }
    catch (e) {
      console.log(e);
    }
  }, [isLoggedin]);
  console.log("logged in?",isLoggedin)
  return (
    <>
      <div
        className="container-header flex flex-row h-20 fixed left-0 right-0 z-50"
        style={navbarGlass}
      >
        <Link href="/">
          <div className="fmcw-logo-header place-self-center z-100" style={logoLeftPadding}></div>
        </Link>
        <div className="links-container-header flex justify-end flex-row basis-5/6">
          <Link
            href="/events"
            className="nav-menu links-header mr-8  place-self-center"
          >
            events
          </Link>
          <Link
            href="/workshops"
            className="nav-menu links-header mr-8  place-self-center"
          >
            workshops
          </Link>
          <Link
            href="/comingsoon"
            className="nav-menu links-header mr-8  place-self-center "
          >
            sponsors
          </Link>
          <Link
            href="/glimpses"
            className="nav-menu links-header mr-8  place-self-center "
          >
            glimpses
          </Link>
          <Link
            href="/team"
            className="nav-menu links-header mr-8  place-self-center"
          >
            team
          </Link>
          <Link
            href="/faq"
            className="nav-menu links-header mr-8  place-self-center"
          >
            faq
          </Link>
          {isLoggedin ? (<><Link
            href="/logout"
            className="nav-menu links-header mr-8  place-self-center"
          >
            logout
          </Link></>):(<><Link
            href="/login"
            className="nav-menu links-header mr-8  place-self-center"
          >
            login
          </Link></>)}
          
          <Link
            href="/"
            className=" links-header w-auto pr-4 place-self-center"
          >
            <button onClick={handleMenu}>
              {menuState ? null : (
                <div className="menu-link space-y-1">
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                </div>
              )}
            </button>

            {menuState ? (
              <div className="menu-design">
                <Link href="/">
                  <div className="fmcw-logo-header basis-1/6 place-self-center z-100"></div>
                </Link>
                <div className="list">
                  <Link href="/events" className="menu-list">
                    events
                  </Link>
                  <Link href="/workshops" className="menu-list">
                    workshops
                  </Link>
                  <Link href="/comingsoon" className="menu-list">
                    sponsors
                  </Link>
                  <Link href="/glimpses" className="menu-list">
                    glimpses
                  </Link>
                  <Link href="/team" className="menu-list">
                    team
                  </Link>
                  <Link href="/faq" className="menu-list">
                    faq
                  </Link>
                  {
                    isLoggedin ? (<> <Link href="/logout" className="menu-list">
                    logout
                  </Link></>):(<> <Link href="/login" className="menu-list">
                    login
                  </Link></>)
                  }
                 
                </div>
              </div>
            ) : null}
          </Link>
          {menuState ? (
            <button onClick={handleMenu}>
              <Image
                className="cross-cut"
                alt="cross-cut"
                src={require("./../../../public/crosscut.png")}
              ></Image>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Header;