//Convert UNIX_timestamp to time
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year
    return time;
}

//Create list of mean temperatures
function getForecast(WeatherDataObject, travel_ts) {

    let list_temp = []
    for (let step = 0; step < 16; step++) {
        list_temp.push(timeConverter(WeatherDataObject.data[step].ts));
        list_temp.push(WeatherDataObject.data[step].temp);
    }
    return list_temp;
}

//Create List of Min Temperatures
function getForecastMin(WeatherDataObject, travel_ts) {

    let list_temp_min = []
    for (let step = 0; step < 16; step++) {
        list_temp_min.push(timeConverter(WeatherDataObject.data[step].ts));
        list_temp_min.push(WeatherDataObject.data[step].min_temp);
    }
    return list_temp_min;
}

//Create List of Max Temperatures
function getForecastMax(WeatherDataObject, travel_ts) {

    let list_temp_max = []
    for (let step = 0; step < 16; step++) {
        list_temp_max.push(timeConverter(WeatherDataObject.data[step].ts));
        list_temp_max.push(WeatherDataObject.data[step].max_temp);
    }
    return list_temp_max;
}

export {
    getForecast,
    getForecastMin,
    getForecastMax
}
