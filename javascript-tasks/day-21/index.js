// JavaScript Fundamentals - Day 21: Assignment

// Task 1: Adding Attributes

// 1. Create an HTML document with an anchor (`<a>`) element with the id "myLink" and the text "Click me".

// 2. Use JavaScript to perform the following tasks:

//    a. Add a `target="_blank"` attribute to the anchor element using the `setAttribute` method.

const myLink = document.getElementById('myLink');
myLink.setAttribute('target', '_blank');

//    b. Log the updated anchor element to the console.

console.log(myLink);

// Task 2: Adding Class Using `classList`

// 3. Create an HTML document with a `<div>` element with the id "myDiv" and the text "This is a div".

// 4. Use JavaScript to add the class "highlight" to the `<div>` element using the `classList` property.

const myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');

// Task 3: Removing Class Using `remove`

// 5. Create an HTML document with a `<div>` element with the id "myDiv" and the class "highlight".

// 6. Use JavaScript to remove the class "highlight" from the `<div>` element using the `classList` property.

myDiv.classList.remove('highlight');

// Task 4: Adding Text to HTML Element

// 7. Create an HTML document with a `<p>` element with the id "myParagraph" and any initial text content.

// 8. Use JavaScript to change the text content of the `<p>` element to a new value.

const myParagraph = document.getElementById("myParagraph");
myParagraph.textContent = "This paragraph has been updated."

// Task 5: Adding Styles to HTML Elements in JavaScript

// 9. Create an HTML document with a `<p>` element with the id "myParagraph" and any initial text content.

// 10. Use JavaScript to perform the following tasks:

//     a. Set the text color of the `<p>` element to "red".

myParagraph.style.color = 'red';

//     b. Set the background color of the `<p>` element to "lightgray".

myParagraph.style.backgroundColor = 'lightgray';

//     c. Set the font size of the `<p>` element to "18px".

myParagraph.style.fontSize = '18px';
