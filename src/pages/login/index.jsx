"use client"
import React from 'react'
import { GoogleOAuthProvider, useGoogleOneTapLogin, GoogleLogin } from '@react-oauth/google';
import Classes from "./login.module.css"
import Header from "../landingpage/Header"
import Footer from "../landingpage/Footer"
import Router from 'next/router'
import getConfig from 'next/config';
import jwt_decode from 'jwt-decode';

const LogIn = () => {
   
    const { publicRuntimeConfig } = getConfig();


    const clientId = publicRuntimeConfig.GOOGLE_CLIENT_ID;
    const backendURL = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URI;

    const handleFailure = (error) => {
      console.log("Authentication failed",error);
    };

    const handleLogin = async (credentialResponse) => {

        try {
            console.log("handleLogin invoked",credentialResponse);

            const jwtToken = credentialResponse.credential;
            const decodedToken = jwt_decode(jwtToken);

            const userEmail = decodedToken.email;
            const userName = decodedToken.name;
            const userId = decodedToken.sub;

            const userData = {
                idToken: jwtToken,
                email: userEmail,
                name: userName,
                userId: userId,
            };

            console.log(userData);

            const response = await fetch(backendURL+"/api/google-login", {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                sessionStorage.setItem('tokenID', credentialResponse.tokenId);

                const isNewUser = credentialResponse.newUser;
                sessionStorage.setItem('isNewUser', isNewUser);

                if (isNewUser) {
                  Router.push('/register'); 
              } else {
                  Router.push('/dashboard'); 
              }
            } else {
                console.error('Authentication failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
};


    return (
        <>
            <Header />
            <div className={Classes.auth_section}>
                <div className={Classes.top}></div>

                <div className={Classes.authenticateButton}>
                    <GoogleOAuthProvider
                        auto_select
                        clientId={clientId}
                        className={Classes.gButton}
                    >
                        {
                            console.log(clientId)
                        }
                        <GoogleLogin
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
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
