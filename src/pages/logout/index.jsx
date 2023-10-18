import React from 'react'
import Router from 'next/router'
import {useAuth} from "../../context/auth";
import loading from "../loading"
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
  <>
  {loading()}
  </>
  )
}

export default Logout