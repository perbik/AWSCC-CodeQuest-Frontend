// JavaScript Fundamentals - Day 15: Assignment

// for loop

for (let i = 1; i <= 5 ; i++){
    console.log(i);
}

console.log("\nDifferent types of cookies:\n");

const cookies = ["chocolate chip", "oatmeal raisin", "peanut butter", "sugar", "gingerbread"];

for (let j = 0; j < cookies.length; j++) {
    console.log(cookies[j]);
}

// while loop

console.log("\nThe jar contains " + cookies.length + " cookies!");

let jarNotEmpty = true;

while (jarNotEmpty){
    let eatCookies = cookies.pop();
    console.log("Currently eating " + eatCookies);

    jarNotEmpty = cookies.length > 0;
}

console.log("The jar has " + cookies.length +" cookie. The jar is now empty");