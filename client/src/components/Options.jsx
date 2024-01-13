import React from "react";
import styles from "../styles/options.module.css";
function Options() {
  return (
    <div className={styles["menu"]}>
      <div className={styles["menu-heading"]}>Select Options</div>
      <button className={styles["menu-button"]}>Subtitles</button>
      <button className={styles["menu-button"]}>Audio</button>
      <button className={styles["menu-button"]}>Length</button>
    </div>
  );
}

export default Options;
