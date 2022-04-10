const getCoordinates = async (apiKeyGeo) => {

    let baseURL1_C = "https://api.geoapify.com/v1/geocode/search?text="
    let baseURL2_C = "&apiKey="
    let userDestinationText = document.getElementById('input_text').value.toString()
    let req_url = baseURL1_C + userDestinationText + baseURL2_C + apiKeyGeo

    try {
        const res = await (await fetch(req_url)).json()
            .then(res => {
                console.log("Geodata fetched successfully.");
                console.log(res.features[0].geometry.coordinates)
                return res;
            })
        return res;
    }
    catch (error) {
        //console.log("Geodata call failed.")
        //return "not available";
    }

}

export { getCoordinates }