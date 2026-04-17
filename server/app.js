const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/auth", require("./routes/authRoute"));



app.get("/",(req,res)=>{
    return res.send("API is working")
})


module.exports = app