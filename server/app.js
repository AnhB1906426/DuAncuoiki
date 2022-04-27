//import
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

//database
mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: true 
})
    .then(() => console.log("Connected to the database!!!"))
    .catch(err => console.log(err));

//server
app.listen(port, () => {
    console.log(`Server running at  http://localhost:${port}`);
});

//routes
app.use("/api/post", require("./routes/routes"));