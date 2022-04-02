/* Global Variables */
//const baseURL1 = 'https://api.meaningcloud.com/sentiment-2.1'
//const url1 = "?key="
//const baseURL2 = "&lang=en&model=general&txt="

//Async Promise GET SENTIMENT
const getSentiment = async (baseURL1, baseURL2, url1, apiKey, userText) => {

    let userTextString = (userText).toString()
    console.log("UserText")
    console.log(userTextString)
    console.log(baseURL1 + url1 + apiKey + baseURL2 + userTextString)
    const res = await fetch(baseURL1 + url1 + apiKey + baseURL2 + userTextString)

    try {
        const data = await res.json();
        console.log(data)
        let check = "ok"
        return data
    }
    catch (error) {
        const data = "".json();
        console.log("error", error);
        let check = "fail"
        return data
    }
}

export { getSentiment }