// this function updates the UI after the API call and posts results

function updateUI(polarity, agreement, subjectivity, confidence, irony) {
    console.log(polarity)
    let pol_interpretation = "None";
    if (polarity == "N+") {
        pol_interpretation = "Very Negative (N+)"
    }
    if (polarity == "N") {
        pol_interpretation = "Negative (N)"
    }
    if (polarity == "P+") {
        pol_interpretation = "Very Positive (P+)"
    }
    if (polarity == "P") {
        pol_interpretation = "Positive (P)"
    }
    if (polarity == "NEU") {
        pol_interpretation = "Neutral(NEU)"
    }
    if (polarity == "None") {
        pol_interpretation = "No Polarity (None)"
    }
    document.getElementById('introduction').innerText = 'We have analyzed your text on MeaningCloud and got back: '
    document.getElementById('polarity').innerText = '1 - Polarity:  ' + pol_interpretation
    document.getElementById('agreement').innerText = '2 - Agreement: ' + agreement
    document.getElementById('subjectivity').innerText = '3 - Subjectivity: ' + subjectivity
    document.getElementById('confidence').innerText = '4 - Confidence: ' + confidence
    document.getElementById('irony').innerText = '5 - Irony: ' + irony
}

export { updateUI }