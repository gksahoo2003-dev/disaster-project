const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/disasterDB")
.then(()=> console.log("DB Connected"))
.catch(err=> console.log(err));

const disasterSchema = new mongoose.Schema({
    type: String,
    location: String,
    description: String,
    date: { type: Date, default: Date.now }
});

const Disaster = mongoose.model("Disaster", disasterSchema);

app.get("/", (req, res) => {
    res.send("Server running");
});

app.post("/add", async (req, res) => {
    const data = new Disaster(req.body);
    await data.save();
    res.send("Data Saved");
});

app.get("/all", async (req, res) => {
    const data = await Disaster.find();
    res.json(data);
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});