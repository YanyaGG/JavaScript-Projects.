//printing the data type
document.write(typeof "Coffee"); 
document.write("<br>");

//printing the data type
document.write(typeof 88);
document.write("<br>");

//combining a string and a number
document.write("cat" + 9);
document.write("<br>");

//infinity
document.write(5E390);
document.write("<br>");

//negative infinity
document.write(-9E415);
document.write("<br>");

//utilizing the > operator
document.write(19>4);
document.write("<br>");

//utilizing the == operator
document.write(8 == 8);
document.write("<br>");

document.write(8 == 'eight');
document.write("<br>");

//utilizing the === operator
document.write(16 === 'sixteen');
document.write("<br>");

document.write(16 === 16);
document.write("<br>");

//utilizing the && operator
document.write(1 < 2 && 3>2);
document.write("<br>");

document.write(1>4 && 5>2);
document.write("<br>");

//utilizing the || operator
document.write(4>2 || 3<1);
document.write("<br>");

document.write(5>6 || 7<6);
document.write("<br>");

//utilizing the ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(25 > 9);
}