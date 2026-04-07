const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/disasterDB")
.then(()=> console.log("DB Connected"))
.catch(err=> console.log(err));

// test route
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});


const Disaster = require("./models/Disaster");

// Add Disaster
app.post("/add", async (req, res) => {
    const data = new Disaster(req.body);
    await data.save();
    res.send("Disaster Data Saved");
});

// Get All Data
app.get("/all", async (req, res) => {
    const data = await Disaster.find();
    res.json(data);
});