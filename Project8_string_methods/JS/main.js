//Utilizing the .concat() method
function full_Sentence() {
    var part_1 = "This is ";
    var part_2 = "a ";
    var part_3 = "full ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Utilizing the .slice() method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//Utilizing the .toUpperCase() method
function toUpperCase() {
    var text1 = "Hello World!";
    var text2 = text1.toUpperCase();
    document.getElementById("UpperCase").innerHTML = text1.toUpperCase();
}

//Utilizing the .search() method
function search_Method() {
    var text = "Mr. Blue has a blue house";
    var position = text.search("blue");
    document.getElementById("Search").innerHTML = position;
}

//Utilizing the .toString() method
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//Utilizing the .toPrecision() method
function precision_Method() {
    var X = 4736.92346843602;
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

//Utilizing the .toFixed() method
function toFixed() {
    let num = 81.42530;
    let n = num.toFixed(1);
    document.getElementById("Fixed").innerHTML = n;
}

