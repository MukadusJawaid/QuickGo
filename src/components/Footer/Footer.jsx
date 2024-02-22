import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialIcons}>
        <IconContext.Provider value={{ size: "2em", className: "icon" }}>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
      <p className={classes.footerText}>
        © 2024 <span className="h4">Quick Go.</span> All rights reserved.
      </p>
    </footer>
  );
}
