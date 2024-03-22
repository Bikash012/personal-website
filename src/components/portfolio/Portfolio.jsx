import React from "react";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.png"
import vectorimg from "../../assets/Vector.png"

function Portfolio() {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("projects.json")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);

  return (
    <div className="lg:mx-12 mx-4 my-28 " id="portfolio">
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center ">
        <div className="text-headingColor">
          <p className="text-xl font-semibold mb-5">Recent Projects</p>
          <h2 className="md:text-5xl text-4xl font-bold">My Portfolio</h2>
        </div>
        <div>
          <a href="https://github.com/Bikash012">
            {" "}
            <button className="btn-primary bg-slate-950 py-5">
              <FaGithub className="w-7 h-8 inline-block " />
              Visit My Github
            </button>{" "}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* {projects.map((project) => ( */}
        <div className="shadow-xl rounded-lg cursor-pointer">
          <img
            src={project1}
            alt=""
            className="hover:scale-90 transition-all duration-300"
          />
          <div className="p-8">
            <h3 className="text-3xl font-semibold mb-2 text-headingColor">
              Bus Booking System
            </h3>
            <p className="text-body text-lg mb-4">
            A Django-based web application for bus ticket booking and management. This web application allows users to easily book and manage bus tickets online.
            </p>
            <a
              href="https://github.com/Bikash012/Bus_ticket_booking_django"
              className="text-xl underline underline-offset-8 hover:text-primary "
            >
              View In Github
              {/* <img
                src={vectorimg}
                alt=""
                className="w-4 inline-block ml-3"
              /> */}
            </a>
          </div>
        </div>
        <div className="shadow-xl rounded-lg cursor-pointer">
          <img
            src={project2}
            alt=""
            className="hover:scale-90 transition-all duration-300"
          />
          <div className="p-8">
            <h3 className="text-3xl font-semibold mb-2 text-headingColor">
            Weather App in React
            </h3>
            <p className="text-body text-lg mb-4">
            Create a dynamic Weather App using React, allowing users to retrieve real-time weather data for any location.            </p>
            <a
              href="https://github.com/Bikash012/Weather-App-in-React"
              className="text-xl underline underline-offset-8 hover:text-primary "
            >
              View In Github
              {/* <img
                src={vectorimg}
                alt=""
                className="w-4 inline-block ml-3"
              /> */}
            </a>
          </div>
        </div>
        <div className="shadow-xl rounded-lg cursor-pointer">
          <img
            src={project3}
            alt=""
            className="hover:scale-90 transition-all duration-300"
          />
          <div className="p-8">
            <h3 className="text-3xl font-semibold mb-2 text-headingColor">
            Simple Calculator in Java 
            </h3>
            <p className="text-body text-lg mb-4">
            Java Swing Calculator: A user-friendly GUI calculator for basic arithmetic operations, including addition, subtraction, multiplication, and division.</p>
            <a
              href="https://github.com/Bikash012/Java-Swing-Calculator"
              className="text-xl underline underline-offset-8 hover:text-primary "
            >
              View In Github
              {/* <img
                src={vectorimg}
                alt=""
                className="w-4 inline-block ml-3"
              /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
