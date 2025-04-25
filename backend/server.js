require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
// app.get("/", (req, res) => {
//   res.json({ msg: "WELLCOME HERE :3" });
// });

//mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //requestss
    app.listen(process.env.PORT, () => {
      console.log("listening to port and connected to db:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//req
// app.listen(process.env.PORT, () => {
//   console.log("listening to port:", process.env.PORT);
// });

//process.env. =var
