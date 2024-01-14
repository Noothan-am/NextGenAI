import React, { useState } from "react";
import axios from "axios";

function Testing() {
  const [prompt, setPrompt] = useState("");
  const [imagePath, setImagePath] = useState("");

  const generatePhoto = async () => {
    try {
      const response = await axios.post(
        "https://8cf1-34-27-255-248.ngrok-free.app/api/generate-video/",
        {
          prompt: prompt,
        },
        {
          responseType: "json",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setImagePath(data.image_path);
      } else {
        console.error("API request failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during API request:", error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generatePhoto}>Generate Photo</button>
      {imagePath && <img src={imagePath} alt="Generated Photo" />}
    </div>
  );
}

export default Testing;
