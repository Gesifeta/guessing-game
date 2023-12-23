
const readline = require('readline')

let secretNumber = 0;
//take-in minimum and maximum value and generate random number between the two, inclussive
const randomInRange = (min, max) => {
    //incase players inputted decimal number;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//checks if a number is equal to secretNumber or different
const checkGuess = (number) => {
    //if number is less than secretNumber display to small
    if ((number) < secretNumber) {
        console.log('Too Low.');
        return false;
    }
    //if number is greater than secretNumber display to big
    else if ((number) > secretNumber) {
        console.log('Too High.')
        return false;
    }
    console.log('Correct')
    return true;
}

//create a working template for reading input from the user
let userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const askRange = () => {
    //user will supply the range in which she/he wants to play
    return userInput.question('Enter maximum number: ', (max) => {
        userInput.question('Enter minimum number: ', (min) => {

            //assign the randomlyy generated value to secretNumber
            secretNumber = randomInRange(min, max);
            userInput.question('Enter a guess: ', (answer) => {
                if (Number(answer) < min || Number(answer) > max) {
                    console.log('Your number is out of range, please try again.')
                    userInput.close();
                    return
                }
                askGuess(Number(answer));
            })
        })
    })
}

//request for input from a user;
const askGuess = (guess) => {
    if (checkGuess(guess)) {
        //if inputed number is equal to the secret number the user wins.
        userInput.close()
        return console.log("You won!")
    }
    else {
        //if not request for another number and continue untill the lucky number is found.
        return userInput.question('Enter a guess:', (newGuess) => {
            return askGuess(Number(newGuess));
        })
    }

}

askRange();



