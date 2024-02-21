// Navbar.js
import classes from "./Navigation.module.css";
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { MdDeliveryDining } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navList}>
        <li className={classes.logo}>
          <Link className={classes.logoAndName} to="/">
            <MdDeliveryDining className={classes.logoIcon} />
          </Link>
          <span className={["body1",classes.brandName].join(" ")}>Quick Go</span>
        </li>
        <div className={classes.navLinks}>
          <li className={classes.navItems}>
            <Link className="body2" to="/">
              Home
            </Link>
          </li>
          <li className={classes.navItems}>
            <Link className="body2" to="/about">
              Services
            </Link>
          </li>
          <li className={classes.navItems}>
            <Link className="body2" to="/about">
              About
            </Link>
          </li>
          <li className={classes.navItems}>
            <Link className="body2" to="/contact">
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
