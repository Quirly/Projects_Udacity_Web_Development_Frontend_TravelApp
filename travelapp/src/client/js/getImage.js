const getImage = async (apikeyPixa) => {

    let baseURL1_P = "https://pixabay.com/api/?key="
    let baseURL2_P = "&q="
    let baseURL3_P = "+city&lang=en&category=travel&order=popular"
    let userDestinationText = document.getElementById('input_text').value.toString()
    let req_url = baseURL1_P + apikeyPixa + baseURL2_P + userDestinationText + baseURL3_P
    console.log(req_url)
    console.log(userDestinationText)

    try {
        const res = await (await fetch(req_url)).json()
            .then(res => {
                console.log("Pixabay Image fetched successfully.");
                console.log(res.hits[0].webformatURL)
                return res;
            })
        return res;
    }
    catch (error) {
        //console.log("Geodata call failed.")
        //return "not available";
    }


}

export { getImage }
