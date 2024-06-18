
//Assigning global variable
var X = 3;
function Multiply_numbers_1() {
    document.write(4 * X + "<br>");
}

//Assigning local variable
function Multiply_numbers_2() {
    var Y = 4
    document.write(Y * 10 + "<br>");
}

//Using console.log for debugging
function Multiply_numbers_3() {
    console.log(Y * 20 + "<br>");
}

//Using a function that includes an if statement
function get_Date() {
    if (new Date() .getHours() > 17) {
        document.getElementById("Greeting").innerHTML = "It's cocktail o'clock!";
    }
}

function get_Day() {
    if (new Date() .getDay() == 1) {
        document.getElementById("Greeting1").innerHTML = "I don't like Mondays";
    }
}

//Using a function that includes an if and else statements
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        Enter = "You are allowed to enter the club!";
    }
    else {
        Enter = "You are not old enough to enter!";
    }
    document.getElementById("Enter_your_age").innerHTML = Enter;
}

//Utilizing the Time_function()
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}