import React from 'react'
import {FaInstagram,FaTwitch,FaTwitter} from "react-icons/fa"


const Footer = () => {
  return (
    <>
      <footer>
        <div className="copyWrite">
          @2024 Test   
        </div>  
        <div className="social">
           <li><FaInstagram /></li>
           <li> <FaTwitch /></li>
           <li> <FaTwitter /></li>
        </div>
      </footer> 
    </>
  )
}

export default Footer