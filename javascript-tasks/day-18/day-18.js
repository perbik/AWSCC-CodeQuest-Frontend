// Working with Objects in JavaScript - Day 18: Assignment

// Task 1: Object Basics

const book = {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
};

console.log(book.author);

// Task 2: Object Operations

const student = {
    name: "Eco",
    age: 20,
    grade: 100,
};

console.log(student);

student.age = 21;
student.subjects = ["OOP", "DSA", "DS2"];

console.log(student);

// Task 3: Object Methods

const rectangle = {
    width: 10,
    height: 5,

    calculateArea: function () {
        return this.width * this.height;
    }
};

const areaRectangle = rectangle.calculateArea();

console.log(areaRectangle);

// Task 4: Advanced Object Techniques

const person = {
    name: "Maria",
    age: 20,
    address: "Philippines",
};

console.log(person);

delete person.address;

const employee = {
    name: "Juan",
    position: "Software Engineer",
};

const employeeDetails = {
    ...person,
    ...employee,
};

console.log(employeeDetails);