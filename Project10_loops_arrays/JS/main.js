const dogs = ["shiba inu", "beagle", "german shepard", "bull dog", "boxer", "king charles spaniel"];
var content = "";
let Y;
function ForLoop() {
    for (Y = 0; Y < dogs.length; Y++) { // Y increases by 1 every time it loops, as long as Y is less than the number of elements in the dogs array it will loop //
        content += dogs[Y] + "<br>";
    }
    document.getElementById("doggo").innerHTML = content;
}

var cats = ["Luna", "Violet", "Malcom", "Flash", "Roscoe"] // creating an array //
function ArrayFunction () {
    var randomCat = Math.floor(Math.random() * 5); // Math.random with Math.floor generates a random number, the * 5 specifies that it will generate a random number between 0 and 4 //
   document.getElementById("array").innerHTML = cats[randomCat];
}
var X = 0;
var printCat = "";
function WhileLoop() {
    while ( X < cats.length) {
        printCat += cats[X] + "<br>";
        X++;
    }
    document.getElementById("while").innerHTML = printCat ;
}

    let Luna =  {
        breed : "himalayan", 
        color : "black", 
        coat : "medium",
        description : function() {
            return "Luna is a " + this.color + " " + this.breed + " cat  with a " + this.coat + " coat.";
            }
        };


function ReturnMe () {
    return document.getElementById("let_me").innerHTML = Luna.description();
}