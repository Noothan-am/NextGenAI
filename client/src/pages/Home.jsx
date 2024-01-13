import React from "react";
import Navbar from "../components/Navbar";
import PromptInputField from "../components/PromptInputField";
import VideoContainer from "../components/VideoContainer";
import Login from "./Login";
import Signup from "./Signup";
import VideoGroup from "../components/VideoGroup";
import styles from "../styles/home.module.css";

function Home() {
  return (
    <div className={styles["home"]}>
      <Navbar />
      <section className={styles["hero"]}>
        <h1>Revolutionizing Content Creation through Innovative AI Models</h1>
        <div className={styles["home-prompt"]}>
          <PromptInputField />
        </div>
        <p>
          Create awe-inspiring masterpieces effortlessly and explore the endless
          possibilities of AI generated art. Enter a prompt, choose a style, and
          watch Imagine - AI Video generator bring your ideas to life!
        </p>
      </section>
      <section className={styles["sample-video"]}>
        <h2>AI-Generated Video</h2>
        <p>
          See Imagine's potential unfold and create captivating art on our
          Text-to-Video Generator
        </p>
        <div className={styles["home-video-group"]}>
          <VideoGroup />
        </div>
        {/* <VideoContainer />
        <Login />
        <Signup /> */}
      </section>
    </div>
  );
}

export default Home;
