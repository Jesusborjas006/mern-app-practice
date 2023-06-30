require("dotenv").config();

const express = require("express");

// Creates express app
const app = express();

// Middleware (between asking a request ot the server and between send the response back to browser)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes``
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

// Listens for requests on port 3000
app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});
