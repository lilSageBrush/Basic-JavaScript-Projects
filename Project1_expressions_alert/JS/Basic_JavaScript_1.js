window.alert("Hello World!");
var a = "I love peaches,", b = " don\'t you?"; // Here I declare mutiple variables in one line, place a comma after the value of the var to start making a new one //
var a = a.fontcolor("red"); // Both this line and the one below set the color of a string. //
var b = b.fontcolor("blue");
document.write(a + b); // This will add text to an html document. //
var c = (32 + 8); // A Simple mathmatical expression. //

function FirstFunction() {
    var sfr = "shrimp fried rice";
    var result = sfr.fontcolor("purple");
    document.getElementById("purple_shrimp").innerHTML = result;
}