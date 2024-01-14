require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
require("./connection/connection");
const authRouter = require("./routes/auth-router");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
