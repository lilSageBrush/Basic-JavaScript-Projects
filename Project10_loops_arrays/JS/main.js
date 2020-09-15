var dogs = ["shiba inu", "beagle", "german shepard", "bull dog", "boxer", "king charles spaniel"];
var content = "";
var Y;
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

function ConstantFunction () {
    const Luna =  {breed:"himalayan", color:"black", coat:"medium"};
    let about = "Luna is a big "; // let will have local, block scope within brackets //
    
    let description;
    function Thing () {
        return `Luna is a ${Luna.color} ${Luna.breed} cat  with a ${Luna.coat} coat`; // to interpolate write a string with `` instead of quotation marks and place the desired element into ${} //
    }
    description = Thing();
    Luna.breed = "unknown";
    document.getElementById("constant").innerHTML = description;
}

var Me;
function ReturnMe () {
    Me = 5 + 8 * 3 - 4 / 2;
    return Me;
}
ReturnMe();
console.log(Me);