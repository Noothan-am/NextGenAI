import React from "react";
import PromptInputField from "../components/PromptInputField";
import VideoGroup from "../components/VideoGroup";
import styles from "../styles/generate-video.module.css";
import Navbar from "../components/Navbar";

function GenerateVideo() {
  return (
    <div className={styles["generate-video"]}>
      <div className="generate-page-navbar">
        <Navbar />
      </div>
      <h1>Generated Your Video</h1>
      <div className={styles["prompt-input-field"]}>
        <PromptInputField />
      </div>
      <div className={styles["generated-videos"]}>
        <VideoGroup />
      </div>
    </div>
  );
}

export default GenerateVideo;
