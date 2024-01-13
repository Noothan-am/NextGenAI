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

app.get("/hello", (req, res) => {
  let speech = "Welcome to GeeksforGeeks";
  const gtts = new gTTS(speech, "en");

  // Save the audio file in a temporary location
  const audioFilePath = path.resolve(__dirname, "Voice.mp3");
  gtts.save(audioFilePath, function (err, result) {
    if (err) {
      throw new Error(err);
    }

    const decodedVideoBuffer = Buffer.from(base64Video, "base64");

    const videoFilePath = path.resolve(__dirname, "DecodedVideo.mp4");

    fs.writeFileSync(videoFilePath, decodedVideoBuffer);

    const combinedFilePath = path.resolve(__dirname, "CombinedVideo.mp4");
    const ffmpegCommand = `ffmpeg -i ${videoFilePath} -i ${audioFilePath} -c:v copy -c:a aac -strict experimental -shortest ${combinedFilePath}`;

    exec(ffmpegCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error combining audio and video: ${stderr}`);
        res.status(500).send("Internal Server Error");
      } else {
        // Send the combined video as a response
        res.sendFile(combinedFilePath, {}, (err) => {
          if (err) {
            console.error("Error sending file: ", err);
            res.status(err.status).end();
          } else {
            console.log("File sent successfully");
            // Clean up temporary files if needed
            fs.unlink(audioFilePath, () => {});
            fs.unlink(videoFilePath, () => {});
            fs.unlink(combinedFilePath, () => {});
          }
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
