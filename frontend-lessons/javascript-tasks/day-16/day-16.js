// JavaScript Fundamentals - Day 16: Assignment

// greet 

function greet() {
    console.log("Hello!");
}

greet();

// modified greet

function greetWithName(name) {
    console.log("Hello " + name + "!");
}

greetWithName("Eco");

// adding numbers

function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}

console.log("10 + 11 = " + addNumbers(10, 11));
console.log("29 + 15 = " + addNumbers(29, 15));
console.log("66 + 33 = " + addNumbers(66, 33));

// average

function calculateAverage(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum+=nums[i];
    }
    return sum/nums.length;
}

let numbers = [99, 98, 97, 100, 100, 98, 99, 99];
console.log("The average is " + calculateAverage(numbers));
