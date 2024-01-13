import React from "react";
import styles from "../styles/video-group.module.css";
import VideoContainer from "./VideoContainer";
function VideoGroup() {
  return (
    <div className={styles["video-placeholders"]}>
      {["1", "2", "3", "4"].map((number) => (
        <VideoContainer />
      ))}
    </div>
  );
}

export default VideoGroup;
