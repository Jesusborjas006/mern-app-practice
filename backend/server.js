require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// Creates express app
const app = express();

// Middleware (between asking a request ot the server and between send the response back to browser)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Needs to be added if a POST or PATCH request is made
app.use(express.json());

// Routes
app.use("/api/workouts", workoutRoutes);

// Connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listens for requests on port 3000
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port 3000");
    });
  })
  .catch((err) => console.log(err));
