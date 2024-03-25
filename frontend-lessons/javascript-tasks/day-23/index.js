// Event Listeners: Assignment Day 23

// Task 1: Click Event Listener

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function(event){
    alert('Button clicked!');
});

//  Task 2: Double-Click Event Listener

const doubleClick = document.getElementById('doubleClickButton');
doubleClick.addEventListener('dblclick', function(event){
    alert('Button double-clicked');
});

//  Task 3: Mouseenter Event Listener

const mouseenterButton = document.getElementById('mouseenterButton');
mouseenterButton.addEventListener('mouseenter', function(event){
    mouseenterButton.style.backgroundColor = 'blue';
});

mouseenterButton.addEventListener('mouseleave', function(event){
    mouseenterButton.style.backgroundColor = '';
});

//  Task 4: Keypress Event Listener

// 11. Create an HTML document with an input element:

const myInput = document.getElementById('myInput');
myInput.addEventListener('keypress', function(event){
    console.log('Keypress event: ', event.key);
});
