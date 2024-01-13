import React from "react";
import styles from "../styles/video-group.module.css";
import VideoContainer from "./VideoContainer";
function VideoGroup() {
  return (
    <div className={styles["video-placeholders"]}>
      {/* {["1", "2", "3", "4"].map((number) => ( */}
      <VideoContainer videoUrl={require("../assets/Dog.mp4")} />
      <VideoContainer videoUrl={require("../assets/nature.mp4")} />
      {/* ))} */}
    </div>
  );
}

export default VideoGroup;
