//This is a function that contains multiple operators
function myFunction() {
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
    var c = document.getElementById("txt3").value;
    var d = document.getElementById("txt4").value;
    var e = document.getElementById("txt5").value;
    var f = (+a + +b) * +c/+d - +e;
    document.getElementById("Math").innerHTML = f;
}

//This is the Increment function
function Increment() {
    var value = document.getElementById("IncrementText").innerHTML;
    value++;
    document.getElementById("IncrementText").innerHTML = value
}


//This is the Decrement function
function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML;
    value--;
    document.getElementById("DecrementText").innerHTML = value
}

//This function returns a random number between 0 and 7
function random() {
    document.getElementById("Ran").innerHTML = Math.random()*7;
}

//This function returns the remainder when you devide 29 by 7
function modulus_operator() {
    var modulus = 29 % 7;
    document.getElementById("Mod").innerHTML = 
    "When you devide 29 by 7 you have a remainder of: " + modulus;
}