
const getAPIKEYpixa = async () => {

    try {
        const res = await fetch('http://localhost:3000/apikeypixa')
            .then(res => {
                console.log("APIKEY PIXABAY request successful.")
                return res.text()
            })
        return res;
    }
    catch (error) {
        console.log("APIKEY PIXABAY request failed.")
        return "not available"
    }
}

export { getAPIKEYpixa }