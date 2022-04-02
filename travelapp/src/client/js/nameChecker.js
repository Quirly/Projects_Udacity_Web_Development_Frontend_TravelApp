// This function checks whether an input has been made by a user

function checkForName(inputText) {

    // reads text input by user and assigns it to variable userInput
    const userInput = document.getElementById('input_box')

    // if box is empty, this means there is nothing to request, return fail as a result, otherwise return pass
    if (userInput === "") {
        alert('Please check your text in input box. It is empty. Then submit again.')
        let check = "fail"
        return check
    } else {
        let check = "pass"
        return check
    }
}

export { checkForName }
