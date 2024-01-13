import React from "react";
import styles from "../styles/navbar.module.css";
function Navbar() {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar-left"]}>
        <h1>NextGen AI</h1>
      </div>
      <div className={styles["navbar-right"]}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Generate</a>
          </li>
          <li>
            <a href="/">Custom Videos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
