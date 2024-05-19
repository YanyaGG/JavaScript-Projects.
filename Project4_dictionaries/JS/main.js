function my_Dictionary() {      //This is the function that will be called
    var Cake = {
        Type: "Cheesecake",
        Color: "Yellow",
        Number_of_ingredients: 14,
        Prep_time: "20 mins",
        Cook_time: "1 hr and 10 mins",
        Difficulty: "Medium"
    }                           //These are the Key-value pairs
    delete Cake.Prep_time;      //This is the delete operator
    document.getElementById("Dictionary").innerHTML = Cake.Prep_time;
}