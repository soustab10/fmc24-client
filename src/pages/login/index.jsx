import React from 'react'
import { GoogleOAuthProvider, useGoogleOneTapLogin, GoogleLogin } from '@react-oauth/google';
import Classes from "./login.module.css"
import Header from "../landingpage/Header"
import Footer from "../landingpage/Footer"
import Router from 'next/router'
import { useContext, useState, useEffect } from 'react';
const LogIn = () => {
    const handleLogin = async (x) => {
        {
            console.log(x)
            const idToken = x.credential;
            try {
                const response = await fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + idToken)
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    const userName = data.name;
                    console.log('user Name', userName)
                    const userEmail = data.email;
                    console.log('User Email:', userEmail);
                    sessionStorage.setItem('Name', userName);
                    sessionStorage.setItem('Email', userEmail);
                    Router.push("/");

                }
                else {
                    console.error('Failed to fetch user profile:', response.status, response.statusText);
                }

            } catch (e) {
                console.log(e);

            }


        }
    }


    return (
        <>
            <Header />
            <div className={Classes.auth_section}>
                <div className={Classes.top}></div>

                <div className={Classes.authenticateButton}>
                    <GoogleOAuthProvider
                        auto_select
                        clientId="138547576187-sel98eo969cd1d2fles4i1j90dj6gdj3.apps.googleusercontent.com"
                        className={Classes.gButton}


                    >
                        {
                            console.log(process.env.GOOGLE_CLIENT_ID)
                        }
                        <GoogleLogin
                            // onSuccess={handleLogin}
                            onSuccess={handleLogin}
                            // onFailure={handleFailure}
                            cookiePolicy="single_host_origin"
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
