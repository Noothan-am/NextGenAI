const express = require("express");
const cors = require("cors");
const gTTS = require("gtts");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/hello", (req, res) => {});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
