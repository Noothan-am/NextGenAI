require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
require("./connection/connection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserData = require("./model/UserInfoSchema");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.post("/sign-up", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(401).json({ message: "Enter all input fields!!" });
  }
  try {
    const userExists = await UserData.findOne({ email });
    if (userExists) {
      return res
        .status(401)
        .json({ message: "Email already exists. Please enter a new one!" });
    } else {
      // const bcryptPassword = await bcrypt.hash(req.body.password, 8);
      const userRegistered = new UserData({
        email,
        password,
        name,
      });
      console.log("i am here");
      if (!userRegistered) {
        return res.status(401).json({
          message: "user unable to register due to some internal errors!",
        });
      }
      await userRegistered.save();
      return res.status(200).json({ message: "User registered" });
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ Message: "enter all input fields!!" });
  }
  try {
    const checkUser = await UserData.findOne({ email });
    if (checkUser) {
      const isValid = password === checkUser.password;
      if (isValid) {
        return res.status(200).send({ message: "this is token" });
      }
      return res.status(401).json({ message: "invalid credentials" });
    }
    return res.status(401).json({ message: "No user found" });
  } catch (error) {
    return res.status(401).json({ message: "error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
