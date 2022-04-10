// This function reads in text from input box and validates its content (function checkForName)
// In a second step it makes the API call (function getSentiment)
// In a third step the response is logged in the console
// In a fourth step the website (UI) is updated and the sentiment analysis is presented to the user (function updateUI)

// import functions
import { checkForName } from './nameChecker.js'
import { getWeather } from './getWeather.js'
import { getForecast } from './getForecast.js'
import { getForecastMin } from './getForecast.js'
import { getForecastMax } from './getForecast.js'
import { getCoordinates } from './getCoordinates'
import { getAPItest } from './getAPItest.js'
import { getAPIKEYweather } from './getAPIKEYweather.js'
import { getAPIKEYgeo } from './getAPIKEYgeo.js'
import { getAPIKEYpixa } from './getAPIKEYpixa.js'
import { getImage } from './getImage.js'
import { updateUI } from './updateUI.js'

const handleSubmitTravel = async (event) => {
    event.preventDefault()

    //clear boxes
    document.getElementById("resultbox").style.visibility = "hidden";
    document.getElementById("show_img_0").style.visibility = "hidden";
    document.getElementById("show_img_1").style.visibility = "hidden";
    document.getElementById("resultbox").style.visibility = "visible";
    // check what text was put into the form field
    let formText = document.getElementById('input_text').value

    console.log("Destination:")
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
    const apikeyweather = await Client.getAPIKEYweather()
    if (apikeyweather == "not available") {
        console.log("Could not fetch APIKEY Weather.")
    }
    else {
        console.log("APIKEY Weather call successful.")
        console.log(apikeyweather)
    }

    const apikeygeo = await Client.getAPIKEYgeo()
    if (apikeygeo == "not available") {
        console.log("Could not fetch APIKEY Geo.")
    }
    else {
        console.log("APIKEY Geo call successful.")
        console.log(apikeygeo)
    }

    const apikeypixa = await Client.getAPIKEYpixa()
    if (apikeypixa == "not available") {
        console.log("Could not fetch APIKEY Pixabay.")
    }
    else {
        console.log("APIKEY Pixabay call successful.")
        console.log(apikeypixa)
    }

    const GeoDataObject = await Client.getCoordinates(apikeygeo)
    console.log(GeoDataObject)
    let latitude = GeoDataObject.features[0].geometry.coordinates[0]
    let longitude = GeoDataObject.features[0].geometry.coordinates[1]
    console.log("Latitude: " + latitude)
    console.log("Longitude: " + longitude)

    const WeatherDataObject = await Client.getWeather(apikeyweather, latitude, longitude)
    console.log(WeatherDataObject)

    //Convert UNIX_timestamp to time
    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        //var hour = a.getHours();
        //var min = a.getMinutes();
        //var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year //+ ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    //Converts UNIX_timestamp to date
    function dayConverter(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let date = a.getDate();
        return date;
    }

    //First day of journey
    let travelday = document.getElementById('t_day').value
    let travelmonth = document.getElementById('t_month').value
    let travelyear = document.getElementById('t_year').value
    let traveldate = travelmonth + "/" + travelday + "/" + travelyear
    console.log(traveldate)
    let travelday_e = document.getElementById('e_day').value
    let travelmonth_e = document.getElementById('e_month').value
    let travelyear_e = document.getElementById('e_year').value
    let traveldate_e = travelmonth_e + "/" + travelday_e + "/" + travelyear_e

    //Convert traveldate to Timestamp
    const firstday = Date.parse(traveldate);
    let travel_ts = firstday / 1000;
    const lastday = Date.parse(traveldate_e);
    let travel_ts_e = lastday / 1000;
    console.log(travel_ts)
    console.log(dayConverter(travel_ts))
    console.log(dayConverter(WeatherDataObject.data[0].ts))

    let list_temp = await Client.getForecast(WeatherDataObject, travel_ts);
    let list_temp_max = await Client.getForecastMax(WeatherDataObject, travel_ts);
    console.log("List Temperatures: " + list_temp);

    let travel_start = timeConverter(travel_ts)
    console.log(travel_start)
    let travel_end = timeConverter(travel_ts_e)
    console.log(travel_end)

    function time_seq_start_detect(travel_start) {

        for (let step = 0; step < 32; step++) {
            console.log(step)
            if (list_temp[step] == travel_start) {
                console.log("Start: " + list_temp[step])
                let start_UI = step
                console.log(start_UI)
                return start_UI
            }
        }
    }

    function time_seq_end_detect(travel_end) {

        for (let step = 0; step < 32; step++) {
            if (list_temp[step] == travel_end) {
                console.log("End: " + list_temp[step])
                let end_UI = step
                console.log(end_UI)
                return end_UI
            }
        }
    }

    let start_UI = time_seq_start_detect(travel_start)
    let end_UI = time_seq_end_detect(travel_end)

    console.log(start_UI)
    console.log(end_UI)
    //if (flag_w = 0) {
    //alert("This date is either too far in the future or in the past! Please ensure your trip will start within 16 days ahead!");
    //}
    //console.log(SentimentDataObject.score_tag)

    let PixabayObject = await Client.getImage(apikeypixa);
    //console.log(PixabayObject);
    //let img_url = PixabayObject.hits[0].webformatURL.String()
    console.log(PixabayObject)

    // update UI
    Client.updateUI(list_temp, list_temp_max, start_UI, end_UI, PixabayObject, 0)
    Client.updateUI(list_temp, list_temp_max, start_UI, end_UI, PixabayObject, 1)


}

// export all modules
export {
    checkForName,
    getWeather,
    getForecast,
    getForecastMin,
    getForecastMax,
    getCoordinates,
    getAPIKEYweather,
    getAPIKEYgeo,
    getAPItest,
    handleSubmitTravel,
    getImage,
    updateUI
}
