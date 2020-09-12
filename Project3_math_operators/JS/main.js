function Add () {
    var addition= 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function Subtract () {
    var minus= 43 - 22;
    document.getElementById("help").innerHTML = "43 - 22 = " + minus;
}

function Divide () {
    var division= 36 / 4;
    document.getElementById("split").innerHTML = "36 / 4 = " + division;
}

function Multiply () {
    var duck= 5 * 7;
    document.getElementById("multiplication").innerHTML = "5 * 7 = " + duck;
}

function MultiOperation () {
    var cool= 3 * 8 - 14 / 2 + 6;
    document.getElementById("big1").innerHTML = "3 * 8 - 14 / 2 + 6 = " + cool;
}

function Modulus () {
    var yummy= 37 % 3; // Modulus gives you the remainder of a aivision operation //
    document.getElementById("remainder").innerHTML = "The remainder of 37 / 3 is " + yummy;
}

function Negative () {
    var hello= 40;
    document.getElementById("opposite").innerHTML = -hello;
}

 function Increment () {
     var up1= 23;
     up1++; // Increment operator adds one //
     document.getElementById("one").innerHTML =  up1;
 }

function Decrement () {
    var lesser= 15;
    lesser--; // Decrement operator subtracts one //
    document.getElementById("bunny").innerHTML = lesser;
}

function RandomNum () {
    var random= Math.random() * 100; // Generates a random number between 1 and 100 //
    random = Math.round(random); // rounds var random to nearest whole number //
    document.getElementById("rando").innerHTML = random;
}

