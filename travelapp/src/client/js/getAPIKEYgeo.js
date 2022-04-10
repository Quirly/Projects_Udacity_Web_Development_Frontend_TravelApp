
const getAPIKEYgeo = async () => {

    try {
        const res = await fetch('http://localhost:3000/apikeygeo')
            .then(res => {
                console.log("APIKEY GEO request successful.")
                return res.text()
            })
        return res;
    }
    catch (error) {
        console.log("APIKEY GEO request failed.")
        return "not available"
    }
}

export { getAPIKEYgeo }