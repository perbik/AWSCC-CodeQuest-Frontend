let submitBtn = document.getElementById('submit-btn');
let restartBtn = document.getElementById('restart-btn');
let numberAttempts = document.getElementById('attempts');
let resultContainer = document.getElementById('result-container');
let randomNumber = generateRandom();


submitBtn.addEventListener("click", function(event) {
    let inputGuess = document.getElementById('inputGuess').value;
    if (!/^\d+$/.test(inputGuess)) {
        resultContainer.textContent = 'Invalid integer input.';
    } else {
        checkGuess(parseInt(inputGuess));
        numberAttempts.textContent++;
    }
});

restartBtn.addEventListener("click", function(event) {
    resultContainer.textContent = '';
    numberAttempts.textContent = '';
    document.getElementById('inputGuess').value = '';
    randomNumber = generateRandom();
});

function checkGuess(inputGuess){
    if (inputGuess == randomNumber) {
        resultContainer.innerHTML = `You are correct! The number was <span class="highlight">${randomNumber}</span>!`;
    } else if (inputGuess > randomNumber) {
        resultContainer.innerHTML = 'Too high!';
    } else {
        resultContainer.innerHTML = 'Too low!';    
    }
}

function generateRandom() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number: ", randomNumber);
    return randomNumber;
}


