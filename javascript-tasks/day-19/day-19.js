// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

const product = {
    name: "notebook",
    price: 50.00,
    quantity: 100,
};

const productJSON = JSON.stringify(product);

console.log(productJSON);

// Task 2: JSON to JavaScript

const bookJSON = '{"title":"The Hunger Games", "author":"Suzanne Collins","publishedYear":2008}';

const book = JSON.parse(bookJSON);

console.log(book.author);

// Task 3: Advanced JSON Operations
const person = [
    {name: "Andres", age: 20, city: "Calooca City"},
    {name: "Jose", age: 21, city: "Valenzuela City"},
    {name: "Maria", age: 19, city: "Quezon City"},
];

const personJSON = JSON.stringify(person);

const personParsed = JSON.parse(personJSON);

for (let i = 0; i < person.length; i++){
    console.log("Name: "+ person[i].name + "\n" + "City: " + person[i].city);
}