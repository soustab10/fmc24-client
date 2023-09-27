import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Classes from "./login.module.css"
import Header from "../landingpage/Header"
import Footer from "../landingpage/Footer"
const LogIn = () => {
  return (
   <>
    <Header/>
    <div className={Classes.auth_section}>
          <div className={Classes.top}></div>
      
      <div className={Classes.authenticateButton}>
      <GoogleOAuthProvider 
      icon={true}
    //   clientId=""
      className={Classes.gButton}>
          <p>Sign in with Google</p>
      </GoogleOAuthProvider>
     
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default LogIn
