//function that utilizes a while loop
function Call_Loop() {
    let text = "";
    let i = 0;
    while (i < 10) {
    text += "The number is " + i + "<br>";
    i++
    }
    document.getElementById("Loop").innerHTML = text;
}

//function that utilizes a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//function that utilizes an array
function array_Function() {
    var Cars = [];
    Cars[0] = "Volvo";
    Cars[1] = "Toyota";
    Cars[2] = "Honda";
    Cars[3] = "Ford";
    document.getElementById("Array").innerHTML = "This car is " + Cars[1] + ".";
}

//function that utilizes a constant 
function constant_function() {
    const My_Car = {brand:"Toyota", type:"Aqua", year:2015};
    My_Car.color = "green";
    My_Car.price = "€10000";
    document.getElementById("Constant").innerHTML = "The cost of my " + My_Car.brand + " " + My_Car.type + " was " + My_Car.price;
}

//function that utilizes the "let" keyword
function let_function() {
let a = 232;
document.getElementById("Let").innerHTML = a;
}

//function that utilizes a return statement
function myName() {
    return "Hello Janja";
}
document.getElementById("Name").innerHTML = myName();


let coffee = {
    beans: "Brasilian ",
    type: "Americano",
    milk: "black",
    sugar: "no sugar",
    description : function() {
        return "I like my coffee to be " + this.beans + this.type + ", " + this.milk + ", " + this.sugar + ".";
    }
};
document.getElementById("Coffee").innerHTML = coffee.description();

//loop that includes a break statement
let text = "";
for (let x = 30; x < 40; x++) {
    if (x === 36) {break;}
    text += "The number is " + x + "<br>";
}
document.getElementById("Break").innerHTML = text;

//loop that includes a continue statement
let numbers = "";
for (let y = 100; y < 115; y++) {
    if (y === 108) {continue;}
    numbers += "The number is " + y + "<br>";
}
document.getElementById("Continue").innerHTML = numbers;