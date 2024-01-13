import React, { useState } from "react";
import styles from "../styles/prompt-input.module.css";

function PromptInputField() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = () => {
    // Handle the click event here
  };

  return (
    <div className={styles["input-field"]}>
      <input
        type="text"
        placeholder="Enter Your Prompt Here"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Generate</button>
    </div>
  );
}

export default PromptInputField;
