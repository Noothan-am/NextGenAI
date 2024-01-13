import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/custom-video.module.css";
import Options from "../components/Options";
function CustomVideo() {
  return (
    <div className={styles["custom-video"]}>
      <Navbar />
      <section className={styles["video-controls"]}>
        <div className={styles["container"]}>
          <textarea
            className={styles["story-input"]}
            placeholder="Enter Your Story Here"
          />
          <button className={styles["generate-button"]}>Generate</button>
        </div>
        <div className={styles["select-options"]}>
          <Options />
        </div>
      </section>
      <section className={styles["generated-video"]}>
        <h1>Your Generated Video </h1>
        <div className={styles["video-placeholder"]}>Generated Video</div>
      </section>
    </div>
  );
}

export default CustomVideo;
