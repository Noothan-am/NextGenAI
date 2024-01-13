import React, { useState } from "react";
import styles from "../styles/prompt-input.module.css";

function PromptInputField({ handleButtonClick }) {
  const [prompt, setPrompt] = useState();

  return (
    <div className={styles["input-field"]}>
      <input
        type="text"
        placeholder="Enter Your Prompt Here"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
      />
      <button onClick={() => handleButtonClick(prompt)}>Generate</button>
    </div>
  );
}

export default PromptInputField;
