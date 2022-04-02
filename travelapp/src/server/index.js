// Require Express to run server and routes
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

// Require customized API modules
const mockAPIResponse = require('./mockAPI.js')

// Set Up Dot Environment
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log(path.resolve(__dirname, "../.env"));

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
app.use(express.static('/Users/quirly/Documents/FrontEnd/Udacity_Web_FE_Project_04/projects/evaluate-news-nlp/dist'))

// Setup Server
const port = 3000
const server = app.listen(port, listening);

function listening() {
    console.log("Server running!")
    console.log("Running on localhost: " + port);
    console.log(__dirname)
}

//Integrate API key
const APIKEY = process.env.API_KEY;
console.log(APIKEY);

// Initialize the main project folder
//app.use(express.static(path.join(__dirname, 'styles')));

// Routes

// Route UI
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// Route APIKEY
app.get('/apikey', function (req, res) {
    // res.sendFile('dist/index.html')
    res.send(APIKEY)
})

// Route TEST
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

