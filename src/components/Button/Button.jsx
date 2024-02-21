import React from "react";
import classes from "./Button.module.css";
export default function Button({ children, variant, className = "" }) {
  return (
    <button className={[className, classes.Button].join(" ")} variant={variant}>
      {children}
    </button>
  );
}
