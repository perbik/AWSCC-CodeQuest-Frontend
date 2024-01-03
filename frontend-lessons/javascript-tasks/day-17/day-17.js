// Working with Arrays in JavaScript - Day 17: Assignment

// Task 1: Array Basics

const cities = ["Manila", "Seoul", "Tokyo", "Cebu", "Davao"];

console.log("Cities:")
cities.forEach(function(city) {
    console.log(city);
 });

console.log(cities[2]);

cities[1] = "Caloocan";

console.log("Cities:")
cities.forEach(function(city) {
   console.log(city);
});

// Task 2: Array Operations

const fruits = ["mango", "apple", "dalandan"];

fruits.push("avocado");

console.log("List of fruits after adding avocado:");
fruits.forEach(function(fruit) {
    console.log(fruit);
});

fruits.pop()

console.log("List of fruits after removing the last element:");
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Task 3: Advanced Array Techniques

const numbers = [1, 10, 29, 3, 100];

const doubledNums = numbers.map(function(num) {
    return num * 2;
});


console.log("Doubled numbers: " + doubledNums);

const filteredNums = numbers.filter(function(filter) {
    return filter > 5;
});

console.log("Numbers greater than 5: " + filteredNums);

// Task 4: Array Manipulation

const colors = ["blue", "red", "white", "yellow"];

colors.unshift("green");
colors.shift();

const twoColors = colors.slice(0, 2);

console.log(twoColors);

// Task 5: Array Splicing

const characters = ["a", "b", "c", "d", "e", "f"];
console.log(characters);

characters.splice(2, 0, "j", "k");
console.log(characters);

characters.splice(4);
console.log(characters);

