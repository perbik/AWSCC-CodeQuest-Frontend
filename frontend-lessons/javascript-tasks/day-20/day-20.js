// Interacting with the Document Object Model

// Task 1: Selecting Elements

//getElementsByTagName

const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs: ", paragraphs);
console.log(paragraphs.length);

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);  // Access and log each <p> element
 }

 //getElementsByClassName

const infoElements = document.getElementsByClassName("info");
console.log("Info Elements: ", infoElements);
console.log(infoElements.length);
for (let i = 0; i < infoElements.length; i++) {
    console.log(infoElements[i]);  // Access and log each <p> element
 }
 //getElementByID

 const headerElement = document.getElementById("header");
 console.log("Header Element: ", headerElement);

 //queryselector

 const highlightElement = document.querySelector('.highlight');
 console.log("Highlight: ", highlightElement)

 // Task 2: Modifying Elements

 // 3. Change the text content of the second paragraph to "This paragraph is now updated!".

 const secondParagraph = paragraphs[1];
 secondParagraph.textContent = "This paragraph is now updated!";

// 4. Change the background color of the div with the ID "header" to a different color of your choice.

headerElement.style.backgroundColor = 'yellow';

// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.

const newH3 = document.createElement('h3');
newH3.textContent = "New Sectiom";

// 6. Append the newly created `h3` element to the end of the body of the HTML document.

document.body.appendChild(newH3);

// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.

const firstParagraph = paragraphs[0];
firstParagraph.remove();

// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.

headerElement.addEventListener('click', function (event){
    console.log("Header clicked!");
});

// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.

const colors = ['blue', 'red', 'yellow', 'green', 'pink'];

// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.

for (let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.backgroundColor = colors[i % colors.length];
}

// *These tasks will help you practice selecting, modifying, creating, and removing elements from the DOM using JavaScript. Good luck! 🌐*
