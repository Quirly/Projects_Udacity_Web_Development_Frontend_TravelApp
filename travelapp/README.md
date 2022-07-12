# Travel Web App (HTML/CSS/JavaScript/Node/Webpack)

## Front End Web Developer Nanodegree Program CAPSTONE Project: Build a Travel App

This app was developed within Udacity's Front End Web Developer Nanodegree program as a final project. You can type in a city, start and end date and will get back the weather forecast on a day-to-day basis for the time you are traveling. 

First, you type in a location and a time span. After having submitted, an endpoint or backend, GeoApify API is used to request coordinates for this destination given by the user. These coordinates are then, in a second step, sent to Weatherbit API to fetch forecast data for the time you are traveling. Additionally, free pictures from your destination are fetched from Pixabay to provide you with first impressions of your destination.

This Single Page App or responsive webpage (frontend) and its functions were developed by Quirly. 

### Table of Contents

* Scope
* Basic Setup
* How to use this app

### Scope

This project was developed as final capstone project within the Frontend Web Developer Nanodegree program at Udacity. The base code (or starting point) has been created by Quirly.

The scope of this project was to build a frontend application interacting with various endpoints. This single page application shall provide a possibility for any user to type in a destination, a start date for his or her journey and and end date in a form. This data is then send to the API endpoints sequentially. The response, the forecast data and pictures, shall then be displayed in the frontend to provide the user with the requested information.

### Basic Setup

Please follow these steps to get this app installed:

* 1 - Download or fork this repository
* 2 - Install Node.js and npm
* 3 - Choose a port and update the port (3000) in file index.js in src/server folder 
* 4 - Update the chosen port also in file apikey.js in src/client folder
* 5 - Save all changes
* 6a - Register at GeoApify (https://www.geoapify.com) and get an apikey for your requests
* 6b - Register at Weatherbit (https://www.weatherbit.io) and get an apikey for your requests
* 6c - Register at Pixabay (https://www.pixabay.com) and get an apikey for your calls
* 6d - Type in your keys as string variables in your .env file
* 7 - Create an **.env** file in your src-folder and type in "API_KEY=" and your apikey you received upon registration
* 8 - Save the **.env** file
* 9 - Start the app by typing in **npm start** in the console (Terminal)


### How to Use this App

* Choose a destination that you are interested in getting weather forecast data for
* Type in start and end date in the boxes below the destination box
* Press "submit"
* In the lower right corner the result will be displayed in the box

