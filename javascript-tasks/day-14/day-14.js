// JavaScript Fundamentals - Day 14: Assignment

// if and if-else statement

let temperature = 29;

if (temperature > 30) {
    console.log("The temperature is greater than 30");
}
else {
    console.log("The temperature is not greater than 30");
}

// else-if statement

let time = 20;

if (time < 12) {
    console.log("Hello! Good morning!");
}
else if (time > 18) {
    console.log("Hello! Good evening!");   
}
else {
    console.log("Hello! Good afternoon!");
}

// switch 

let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Hey! Today is Monday!");
        break;
    case "Tuesday":
        console.log("Hey! Today is Tuesday!");
        break;
    case "Wednesday":
        console.log("Hey! Today is Wednesday!");
        break;
    case "Thursday":
        console.log("Hey! Today is Thursday!");
        break;
    case "Friday":
        console.log("Hey! Today is Friday!");
        break;
    case "Saturday":
        console.log("Hey! Today is Saturday!");
        break;
    case "Sunday":
        console.log("Hey! Today is Sunday!");
        break;           
    default:
        console.log("Day can't be determined");
        break;
}