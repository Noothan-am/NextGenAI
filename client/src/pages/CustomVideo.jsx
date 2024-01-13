import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/custom-video.module.css";
function CustomVideo() {
  return (
    <div className={styles["custom-video"]}>
      <Navbar />
    </div>
  );
}

export default CustomVideo;
