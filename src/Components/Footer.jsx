import React from "react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (

    <footer
      id="footer"
      className="bg-black border-t border-white/10 py-16"
    >

      
        {/* Main Footer Content */}

      


        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-8 text-center">

          <p className="text-gray-500">

            Copyright © {currentYear} Abhijeet Bhangare.
            All rights reserved.

          </p>

        </div>

      

    </footer>

  );

};

export default Footer;