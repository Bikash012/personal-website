import React, { useState } from "react";
import slogo from '../../assets/logo1.jpg'
import 'animate.css';
import { Link } from "react-scroll";
import bikashCV from '../../assets/bikashCV.pdf'

function Home() {


  return (
    <div className="mt-5 bg-gray-100" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-2">
      <div className="md:w-1/2">
       <img src={slogo} alt="" className=" w-full rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform  animate__animated animate__backInRight  " />
      </div>
            <div className="md:w-1/2 w-full mt-5">
                <h1 className="md:text-6xl text-4xl font-bold text-headingColor leading-sung 
                md:leading-[76px] mb-5 ">Namaste, I am <h1 className="text-primary"> Bikash Joshi <h1 className=" animate-pulse"> </h1> </h1></h1>
                <p className="text-body text-xl leading-9 mb-8">            Step into my world of creativity and ambition! I'm someone who loves tackling problems and finding creative solutions.
            Let's team up to achieve success together on a journey of growth and discovery. In this world, every problem is an opportunity, 
            and every solution brings us closer to greatness. Let's push boundaries, exceed expectations, and create something extraordinary.</p>
 
                <a target="_blank" href={bikashCV}><button className="btn-primary text-2xl">Download CV</button> </a>
                  </div>
         
        </div>
        
    </div>

    
  );
}

export default Home;
