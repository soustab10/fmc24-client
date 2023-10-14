import React, { useEffect } from 'react'
import getConfig from 'next/config';
import axios from 'axios';
const Index = () => {
    const { publicRuntimeConfig } = getConfig();
    const [email, setEmail] = React.useState("")
    const [cart, setCart] = React.useState([])
    const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
    useEffect(() => {
        setEmail(sessionStorage.getItem("email"))
    }, [])

    const getCart = async () => {
        const response = await fetch(backendURL + "/api/carts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
            }),
        });
        const data = await response.json();
        console.log(data.cartItems)
        setCart(data.cartItems)

    }
    useEffect(() => {
        getCart()
    }, [email])

    return (
        <>
    CartItems
    

        </>
    )
}

export default Index