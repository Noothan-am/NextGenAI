import React, { useState } from "react";
import styles from "../styles/options.module.css";
function Options({ setOptionsValue, optionsValue }) {
  const [value, setValue] = useState("2");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles["menu"]}>
      <div className={styles["menu-heading"]}>Select Options</div>
      <button
        onClick={() =>
          setOptionsValue({
            ...optionsValue,
            subtitles: !optionsValue.subtitles,
          })
        }
        className={styles["menu-button"]}
      >
        Subtitles
      </button>
      <button
        onClick={() =>
          setOptionsValue({
            ...optionsValue,
            audio: !optionsValue.audio,
          })
        }
        className={styles["menu-button"]}
      >
        Audio
      </button>
      <button
        onClick={() =>
          setOptionsValue({
            ...optionsValue,
            length: !optionsValue.length,
          })
        }
        className={styles["menu-button"]}
      >
        Length
      </button>
      <input
        type="range"
        min="2"
        max="15"
        step="1"
        value={value}
        className="slider"
        onChange={(event) => {
          setOptionsValue({
            ...optionsValue,
            length: event.target.value,
          });
          setValue(event.target.value);
        }}
      />
      <p>{value} Sec</p>
    </div>
  );
}

export default Options;
