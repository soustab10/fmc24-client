import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from "react";


const loading = () => {
    return (

        <>
            <div className="loader-container" >
                <div className="loader"></div>
                <div className="loading-text">Loading...</div>
                <Skeleton />
                <Skeleton count={10} />

            </div>
        </>

    )
}

export default loading
