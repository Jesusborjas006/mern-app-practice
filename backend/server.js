require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts")

// Creates express app
const app = express();

// Middleware (between asking a request ot the server and between send the response back to browser)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
// Needs to be added if a POST or PATCH request is made
app.use(express.json())

app.use("/api/workouts", workoutRoutes)

// Listens for requests on port 3000
app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});
