import React, { useState } from "react";
import styles from "../styles/login.module.css";
import Button from "../components/Button.jsx";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles["input-fields"]}>
      <p className={styles["login-heading"]}>Sign Up</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button />
      <p>Already have Account? Login here</p>
    </div>
  );
}

export default Signup;
