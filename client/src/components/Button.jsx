import React from "react";
import styles from "../styles/button.module.css";
function Button() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <button className={styles["login-button"]} onClick={handleButtonClick}>
      Login
    </button>
  );
}

export default Button;
