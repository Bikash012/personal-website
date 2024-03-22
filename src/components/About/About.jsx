import React from "react";
import profilePic from "../../assets/about.png";
import {Link} from 'react-scroll';

function About() {
  return (
    <div className="lg:mx-12 mx-4 my-20" id="about">
      <div className=" flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10">
        <div className="sm:w-1/2">
          <img
            src={profilePic}
            alt=""
            className=" w-full sm:w-11/12 hover:over:bg-body transition-all 
    duration-300 hover:-translate-x-4 aboutImg"
          />
        </div>
        <div className="sm:w-1/2">
  
            <p className="text-xl font-semibold mb-5">About</p>
            <h2 className="md:text-6xl text-4xl font-bold">About Me</h2>
            <p className="mt-8 md:pr-8 mb-8 text-xl ">
            In this dynamic space, technology enthusiasts like you and me find endless excitement in the latest 
            advancements and thrive on solving new challenges. With a passion for problem-solving and a love for teamwork, 
            we're on a mission to push the boundaries of what's possible in technology.
            Join me on a journey where every breakthrough sparks curiosity and every obstacle fuels our determination to succeed. 
            Together, let's harness our strengths, surpass expectations, and create innovations that make a real difference.
             Welcome to a community where innovation and collaboration pave the way for a brighter future.
            </p>
            <Link to= "contact" spy = {true} activeClass="actice" smooth={true} offset={-100}
            ><button className="btn-primary text-2xl">Contact Me</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
