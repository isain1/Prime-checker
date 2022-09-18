let userInputEl = parseInt(document.getElementById("user-input"));
let submitBtnEl = document.getElementById("submit-btn");
let numberArr = [];
let resultsEl = document.getElementById("response");

submitBtnEl.addEventListener("click", function() {
    let inputRoot = Math.floor(Math.sqrt(userInputEl));
    // let i = inputRoot
    // while (i > 1) {
    //     if ((userInputEl % i) == 0) {
    //         resultsEl.innerHTML = userInputEl + " is a prime number";
    //     };
    //     i--;
    // };

    if (inputRoot === Math.sqrt(userInputEl)) {
        resultsEl.innerHTML = userInputEl + " is not a prime number";
    } else {
        for (let i = 2; i < inputRoot; i++) {
            if ((userInputEl % i) === 0) {
                resultsEl.innerHTML = `${userInputEl} is not a prime number`;
                console.log(`${userInputEl} is not a prime number`);
            } else if ((userInputEl % i) !== 0) {
                resultsEl.innerHTML = `${userInputEl} is a prime number!`;
                console.log(`${userInputEl} is a prime number!`);
            }
        }
    }

});

console.log("Hello, World")