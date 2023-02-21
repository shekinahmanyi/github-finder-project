import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

function Contact() {
  return (
    <div>
    <p className='mb-2 text-2xl font-mono ml-3 text-center'>
        You can reach me at: 
        <FaLinkedin className='justify-center'/> 
        <FaGithub/> 
        <FaTwitter/>
        </p>
    </div>
  )
}

export default Contact
