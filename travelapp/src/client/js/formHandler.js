// This function reads in text from input box and validates its content (function checkForName)
// In a second step it makes the API call (function getSentiment)
// In a third step the response is logged in the console
// In a fourth step the website (UI) is updated and the sentiment analysis is presented to the user (function updateUI)

// import functions
import { checkForName } from './nameChecker.js'
import { getSentiment } from './getSentiment.js'
import { updateUI } from './updateUI.js'
import { getAPIKEY } from './getAPIKEY.js'

const handleSubmit = async (event) => {
    event.preventDefault()

    // provide base parameters
    const baseURL1 = 'https://api.meaningcloud.com/sentiment-2.1'
    const url1 = "?key="
    const baseURL2 = "&lang=en&model=general&txt="

    // check what text was put into the form field
    let formText = document.getElementById('input_text').value
    console.log("Input:")
    console.log(formText)
    // check text in input box before performing API call
    let resultCheck1 = await Client.checkForName(formText)
    if (resultCheck1 == "fail") {
        console.log("Result check failed.")
        return
    }
    else {
        console.log("Result check successful.")
    }
    // read APIKEY
    const apiKey = await Client.getAPIKEY()
    if (apiKey == "not available") {
        console.log("Could not fetch APIKEY")
        return
    }
    else {
        console.log("APIKEY call successful.")
        console.log(apiKey)
    }
    // make fetch call and get sentiment analysis from MeaningCloud API
    let SentimentDataObject = await Client.getSentiment(baseURL1, baseURL2, url1, apiKey, formText)
    // show api response in console for control purposes
    console.log('API MeaningCloud response got back is: ')
    console.log(SentimentDataObject)
    console.log(SentimentDataObject.score_tag)

    // update UI
    Client.updateUI(SentimentDataObject.score_tag, SentimentDataObject.agreement, SentimentDataObject.subjectivity, SentimentDataObject.confidence, SentimentDataObject.irony)

}

// export all modules
export {
    checkForName,
    getSentiment,
    updateUI,
    getAPIKEY,
    handleSubmit
}
