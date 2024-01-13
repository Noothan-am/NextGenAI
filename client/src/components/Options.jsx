import React, { useState } from "react";
import styles from "../styles/options.module.css";
function Options() {
  const [value, setValue] = useState("2");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles["menu"]}>
      <div className={styles["menu-heading"]}>Select Options</div>
      <button className={styles["menu-button"]}>Subtitles</button>
      <button className={styles["menu-button"]}>Audio</button>
      <button className={styles["menu-button"]}>Length</button>
      <input
        type="range"
        min="2"
        max="15"
        step="1"
        value={value}
        className="slider"
        onChange={handleChange}
      />
      <p>{value} Sec</p>
    </div>
  );
}

export default Options;
