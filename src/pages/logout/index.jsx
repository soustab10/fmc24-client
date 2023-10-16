import React from 'react'
import Router from 'next/router'
import {useAuth} from "../../context/auth";

const Logout = () => {
  const {state, dispatch} = useAuth();
    try{
    sessionStorage.clear();
    localStorage.clear();
    dispatch({type: "LOGOUT"})
    Router.push('/login');
    dispatch
    }catch{
        console.log("E");
    }
  return (
    <div>Logout</div>
  )
}

export default Logout