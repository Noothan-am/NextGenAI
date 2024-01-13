import React from "react";
import Navbar from "../components/Navbar";
import PromptInputField from "../components/PromptInputField";
import VideoContainer from "../components/VideoContainer";
import Login from "./Login";
import Signup from "./Signup";
import VideoGroup from "../components/VideoGroup";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <Navbar />
        <h1>Revolutionizing Content Creation through Innovative AI Models</h1>
        <PromptInputField />
        <p>
          Create awe-inspiring masterpieces effortlessly and explore the endless
          possibilities of AI generated art. Enter a prompt, choose a style, and
          watch Imagine - AI Video generator bring your ideas to life!
        </p>
      </section>
      <section className="sample-video">
        <h2>AI-Generated Video</h2>
        <p>
          See Imagine's potential unfold and create captivating art on our
          Text-to-Video Generator
        </p>
        <VideoContainer />
        <Login />
        <Signup />
        <VideoGroup />
      </section>
    </div>
  );
}

export default Home;
