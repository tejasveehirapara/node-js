const express = require('express');
const app = express()
const mongoose = require('mongoose' );
mongoose.set('strictQuery', false);
const cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors("*"))


app.listen(8000, () => console.log(`server connected`))

// databse connection
mongoose.connect("mongodb://localhost:27017/user", (error) => {
    if (error) {
        console.log("database not connected", error);
    }
    else {
        console.log("database connected");
    }
})