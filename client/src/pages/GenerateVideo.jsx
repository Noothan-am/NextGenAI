import React, { useState } from "react";
import axios from "axios";
import VideoGroup from "../components/VideoGroup";
import styles2 from "../styles/prompt-input.module.css";
import styles from "../styles/generate-video.module.css";
import Navbar from "../components/Navbar";

function GenerateVideo() {
  const [rawData, setRaw] = useState(null);
  const [prompt, setPrompt] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        "https://61b9-34-123-231-129.ngrok-free.app /api/generate-video/",
        {
          prompt: `${prompt}`,
        },
        {
          responseType: "json",
          headers: {
            "ngrok-skip-browser-warning": "true",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.status === 200) {
        const base64Data = response.data;
        setRaw(base64Data);
      }
    } catch (error) {
      console.error("Error generating video:", error);
    }
  };

  return (
    <div className={styles["generate-video"]}>
      <div className="generate-page-navbar">
        <Navbar />
      </div>
      <h1>Generated Your Video</h1>
      <div className={styles["prompt-input-field"]}>
        <div className={styles2["input-field"]}>
          <input
            type="text"
            placeholder="Enter Your Prompt Here"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
          <button onClick={handleButtonClick}>Generate</button>
        </div>
      </div>
      <div className={styles["generated-videos"]}>
        <VideoGroup data={rawData ? [rawData.toString()] : []} />
      </div>
    </div>
  );
}

export default GenerateVideo;
