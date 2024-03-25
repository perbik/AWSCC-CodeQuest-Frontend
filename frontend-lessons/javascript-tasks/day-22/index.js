// JavaScript Fundamentals - Day 22: Assignment

// 1. Create an HTML document with a `<div>` element having the id "dynamicContainer". This will be the container where dynamically created elements will be added.

// 2. Use JavaScript to create an `<img>` element dynamically. Set the `src` attribute to an image URL, and append it to the "dynamicContainer" div.

const dynamicContainer = document.getElementById('dynamicContainer');
const newImage = document.createElement('img');
newImage.src = 'https://i.pinimg.com/564x/e4/96/57/e496570760a703070748d458ae22b879.jpg';
newImage.alt = 'Dynamically created image';
dynamicContainer.appendChild(newImage);

// ### **Task 2: Removing DOM Elements**

// 3. Create an HTML document with a list (`<ul>`) containing list items (`<li>`).

// 4. Use JavaScript to perform the following tasks:

//    a. Select and remove a specific list item using the `removeChild()` method.

const myList = document.getElementById('myList');
const removeItem = myList.children[2];
myList.removeChild(removeItem);

//    b. Remove the last list item using the `remove()` method.

const lastChild = myList.lastElementChild;
lastChild.remove();

//    c. Clear all list items from the `<ul>` using the `innerHTML` property.

myList.innerHTML = '';
