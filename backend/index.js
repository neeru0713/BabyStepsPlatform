const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js")
const milestoneRoutes = require("./routes/milestoneRoutes.js")
const tipsRoutes = require("./routes/tipsRoutes.js");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(
  cors({
    origin: "*", 
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req,res) => {
  res.send("Backend server is running")
})
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/milestones", milestoneRoutes);
app.use("/api/tips", tipsRoutes);


mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

 
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
