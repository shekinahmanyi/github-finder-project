import React from "react";

function About() {
  return (
    <>
      <h1 className="text-4xl text-center">Github Finder Project</h1>
      <p className=" text-xl font-mono ml-3 text-center">
        Hi i am Called Shekinah Manyi and I took this course and at the end of<br/>
        the day came out with a React app to search GitHub profiles and see<br/>
        profile details. This project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400 text-center">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400 text-center">
        Layout By ~
        <a className="text-white" href="https://twitter.com/shekinahmanyi">
          Shekinah Manyi
        </a>
      </p>
    </>
  );
}

export default About;
