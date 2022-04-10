
const getAPIKEYweather = async () => {

    try {
        const res = await fetch('http://localhost:3000/apikeyweather')
            .then(res => {
                console.log("APIKEY WEATHER request successful.")
                return res.text()
            })
        return res;
    }
    catch (error) {
        console.log("APIKEY request failed.")
        return "not available"
    }
}

export { getAPIKEYweather }