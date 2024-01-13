import React, { useState } from "react";
import styles from "../styles/login.module.css";
import Button from "../components/Button.jsx";

function Login() {
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
      <div className={styles["login-container"]}>
        <p className={styles["login-heading"]}>Login</p>
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
        <p>Don’t have Account ? Sign up here</p>
      </div>
    </div>
  );
}

export default Login;
