//Async Promise GET WEATHER FORECAST
const getWeather = async (apiKeyWeather, longitude, latitude) => {

    let baseURL1 = 'https://api.weatherbit.io/v2.0/forecast/daily?lat='
    let baseURL2 = '&lon='
    let baseURL3 = '&key='
    let req_url_w = baseURL1 + latitude.toString() + baseURL2 + longitude.toString() + baseURL3 + apiKeyWeather

    try {
        const res = await (await fetch(req_url_w)).json()
            .then(res => {
                console.log("Weather Forecast data fetched successfully.");
                return res;
            })
        return res;
    }
    catch (error) {
        console.log("Weather Forecast data call failed.")
        return "not available";
    }
    //const res = await fetch(baseURL1 + userDestinationText + baseURL2 + apiKeyWeather + metric)

    //try {
    //const data = await res.json();
    //console.log(data)
    //console.log("Weather data could be fetched.")
    //return data
    //}
    //catch (error) {
    //const data = "error".json()
    //console.log("Weather data fetch failed.", error);
    //return data
    //}
}

export { getWeather }