import React from "react";
import styled from "styled-components";
import { Component } from "react";
import { useState, useEffect } from 'react';

const EventCard = () => {
    return(
<div class="w-80 h-96 justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
    <div class="font-bold text-2xl mb-2 my-3.5">The Coldest Sunset</div>
    <p class="text-justify my-2.5 h-[160px]">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <a href="" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>
    )

  };
  export default EventCard;


