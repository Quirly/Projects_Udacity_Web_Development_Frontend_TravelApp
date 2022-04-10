# Front End Nanodegree Program: Evaluate A News Article with NLP

This app was developed to create an app that helps you plan your travel. As an endpoint or backend GeoApify API is used to request coordinates for given destination. These coordinates are sent to Weatherbit API to fetch forecast
data for the time you are traveling. Finally, free pictures from your destination are fetched from Pixabay. The responsive webpage (frontend) and its functions were developed by Quirly. 

## Table of Contents

* Scope
* Basic Setup
* How to use this app

## Scope

This project was developed as final capstone project within the Frontend Web Developer Nanodegree program at Udacity. The base code (or starting point) has been created by Quirly.

The scope of this project was to build a frontend application interacting with various endpoints. This single page application shall provide a possibility for any user to type in a destination, a start date for his or her journey and and end date in a form. This data is then send to the API endpoints sequentially. The response, the forecast data and pictures, shall then be displayed in the frontend to provide the user with the requested information.

## Basic Setup

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


## How to Use this App

* Choose a destination that you are interested in getting weather forecast data for
* Type in start and end date in the boxes below the destination box
* Press "submit"
* In the lower right corner the result will be displayed in the box

