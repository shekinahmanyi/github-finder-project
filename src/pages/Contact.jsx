import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <p className="mb-2 text-2xl font-mono ml-3 text-center flex flex-col justify-center items-center ">
        You can reach me at:
      </p>
      <div className="flex justify-center items-center space-x-4 mb-4 text-3xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
      </div>
    </div>
  );
}

export default Contact;
