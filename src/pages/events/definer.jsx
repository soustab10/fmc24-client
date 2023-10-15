import React, { useState, useEffect } from 'react'
import Link from "next/link";
const Definer = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    useEffect(() => {
        try {
            const x = sessionStorage.getItem("isLoggedIn");
            console.log(x)

            if (x === null || x === false)
                setIsLoggedin(false);
            else {
                setIsLoggedin(true);
            }

        }
        catch (e) {
            console.log(e);
        }
    }, [isLoggedin]);
    return (
        <>
            <div className="my-3.5 align-middle justify-evenly">  {isLoggedin ? (<><Link
                href="/cart"
                className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out "
            >
                Go To Cart
            </Link></>) : (<><Link
                href="/login"
                className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out "
            >
                login
            </Link></>)}
            </div>
        </>
    )
}

export default Definer