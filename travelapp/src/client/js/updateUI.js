// this function updates the UI after the API call and posts results
//Convert UNIX_timestamp to time
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year //+ ' ' + hour + ':' + min + ':' + sec;
    return time;
}

function updateUI(temps, temps_max, start_UI, end_UI, PixabayObject, id) {

    let img_url = String(PixabayObject.hits[id].webformatURL)//"url('https://pixabay.com/get/g963e49224a7f9b27e85f234ac611a5aafe263a69d227790922ddbbbf84ee87c6386a83a121799772e770aa1a492e0ac92ca7609e2b035ea5dbe806dc62c69821_640.jpg'//PixabayObject.hits[0].webformatURL')"
    console.log(img_url)


    document.getElementById('introduction').innerText = 'Here is your travel forecast: '

    document.getElementById('weather_1').innerText = '# Arrival:  ' + temps[start_UI] + " / " + temps[start_UI + 1] + "°C" + " (Max: " + temps_max[start_UI + 1] + " °C)"

    let diff_days = (end_UI - start_UI) / 2
    console.log(diff_days)
    for (let step = 1; step < diff_days; step++) {
        console.log("Day " + step)
        let element_string = "weather_" + (step + 1)
        console.log(element_string)
        document.getElementById(element_string).innerText = "# Day " + (step + 1) + ": " + temps[start_UI + step * 2] + " / " + temps[start_UI + step * 2 + 1] + " °C" + " (Max: " + temps_max[start_UI + step * 2 + 1] + " °C)"
    }

    document.getElementById('weather_end').innerText = '# Departure:  ' + temps[end_UI] + " / " + temps[end_UI + 1] + "°C" + " (Max: " + temps_max[end_UI + 1] + " °C)"
    //let element_string = 'weather_' + end_UI
    //document.getElementById(element_string).innerText = 'Departure:  ' + temps[end_UI] + " Temp: " + temps[end_UI + 1] + "°C"

    let string_img = "show_img_" + String(id)
    document.body.style.backgroundImage = "url(" + 'palms_AdobeStock_iPad_sw.jpg' + ")"
    document.getElementById(string_img).style.backgroundImage = "url(" + img_url + ")"
    document.getElementById(string_img).style.visibility = "visible";
    document.getElementById("resultbox").style.visibility = "visible";

}

export { updateUI }

