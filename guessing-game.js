
const readline = require('readline')

const secretNumber = 17;

//checks if a number is equal to secretNumber or different
const checkGuess = (number) => {
    //if number is less than secretNumber display to small
    if (Number(number) < secretNumber) {
        console.log('Too Low.');
        return false;
    }
    //if number is greater than secretNumber display to big
    else if (Number(number) > secretNumber) {
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

//request for input from a user;
const askGuess = (guess) => {
    if (checkGuess(guess)) {
        //if inputed number is equal to the secret number the user wins.
        userInput.close()
        return 'You won!'
    }
    //if not request for another number and continue untill the lucky number is found.
    return userInput.question('Enter a guess:', (newGuess) => {
        return askGuess(newGuess)
    })
}
askGuess(15);


