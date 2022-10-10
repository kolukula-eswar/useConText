import React from "react";
import "../myStyles.css";
const Footer = () => {
  return (
    <div>
      <div className="footer ">
        <div className="footer-content">
            <h3>FED Blog</h3>
            Page Credits : K.vishnu 20BQ1A0591<br></br>
            copyright &copy; {new Date().getFullYear()} <a href=""> FED Blog</a>  
        </div>
      </div>
    </div>
  );
};

export default Footer;
