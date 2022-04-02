# Front End Nanodegree Program: Evaluate A News Article with NLP

This app was developed to evaluate texts using a sentiment analysis approach. As an endpoint or backend MeaningCloud API is used. The responsive webpage (frontend) and its functions were developed by Quirly. 

## Table of Contents

* Scope
* Basic Setup
* How to use this app

## Scope

This project was developed within the Frontend Web Developer Nanodegree program at Udacity. The base code (or starting point)
was deployed in the  following repository.

[Evaluate A News Article with Natural Language Processing](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp)

MeaningCloud (https://www.meaningcloud.com) is a public service provider for sentiment analysis of texts. One can use these existing web api endpoints for evaluating articles 
using Natural Language Processing algorithms. The scope of this project was to build a frontend application interacting with this MeaningCloud endpoint. This single page application shall provide a possibility for any user to type in a text in a form and to send this text to the API endpoint. The response, the sentiment analysis, shall then be displayed in the frontend to be read by the user.

## Basic Setup

Please follow these steps to get this app installed:

* 1 - Download or fork this repository
* 2 - Install Node.js and npm
* 3 - Choose a port and update the port (3000) in file index.js in src/server folder 
* 4 - Update the chosen port also in file apikey.js in src/client folder
* 5 - Save all changes
* 6 - Register at MeaningCloud (https://www.meaningcloud.com) and get an apikey for your requests
* 7 - Create an **.env** file in your src-folder and type in "API_KEY=" and your apikey you received upon registration
* 8 - Save the **.env** file
* 9 - Start the app by typing in **npm start** in the console (Terminal)


## How to Use this App

* Choose a text that you are interested in having analyzed
* Type in or copy this text into the upper field in the form (right above the "submit" button)
* Press "submit"
* In the lower right corner the result will be displayed in the box

## Meanings

* 1 - Polarity

The API endpoint classifies the text into six categories. If a text cannot be analyzed regarding sentiment or has no polarity, 
you will get back NONE. If a classification is possible, range starts from VERY NEGATIVE to NEGATIVE, NEUTRAL, POSITIVE and eventually
VERY POSITIVE. The class among these with the highest probability for a given text will be shown to the user.

* 2 - Agreement

If the major parts of the text correspond to each other regarding sentiment, you will get **Agreement**. If this is not the case and parts of the text do not match and are contradictory, you will get back **Disagreement**.

* 3 - Subjectivity

If the text seems to be subjective expressing an opinion or attitude, you will be provided with **Subjective** for category 3. Otherwise, if the input is highly likely to be neutral or objective, **Objective** will be displayed for category 3.

* 4 - Confidence

This is the score of trust. **100** means that the analytics are highly likely to be of good quality, **0** means that you should not trust the analytics.

* 5 - Irony

If marks of irony can be detected within the text, you will be provided with **Ironic** for category 5. If this does not seem to be likely **Unironic** is shown here.