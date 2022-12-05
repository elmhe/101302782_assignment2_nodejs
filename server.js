const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const empRoutes = require("./routes/EmployeeRoutes")

const SERVER_PORT = 3001

const DB_URL = "mongodb+srv://dbUser:aoinotsuki@cluster0.polgm51.mongodb.net/gbc_assignment01?retryWrites=true&w=majority"
const app = express();
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/api/emp", empRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Assignment 02</h1>");
});


app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})