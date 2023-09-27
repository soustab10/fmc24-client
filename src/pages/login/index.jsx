"use client"
import React from 'react'
import { GoogleOAuthProvider, useGoogleOneTapLogin, GoogleLogin } from '@react-oauth/google';
import Classes from "./login.module.css"
import Header from "../landingpage/Header"
import Footer from "../landingpage/Footer"
const LogIn = () => {
    return (
        <>
            <Header />
            <div className={Classes.auth_section}>
                <div className={Classes.top}></div>

                <div className={Classes.authenticateButton}>
                    <GoogleOAuthProvider
                        auto_select
                        clientId={process.env.GOOGLE_CLIENT_ID}
                        className={Classes.gButton}

                    >
                        {
                            console.log(process.env.GOOGLE_CLIENT_ID)
                        }
                        <GoogleLogin

                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={error => {
                                console.error('Login Failed:', error);
                            }}
                            useOneTap

                        />
                    </GoogleOAuthProvider>








                </div>
            </div>

            <Footer />
        </>
    )
}

export default LogIn
