import React from "react";
import styles from "../styles/video-container.module.css";

function VideoContainer({ videoUrl }) {
  return (
    <div className={styles["video-placeholder"]}>
      <video width={500} height={250} controls src={videoUrl}></video>
    </div>
  );
}

export default VideoContainer;
