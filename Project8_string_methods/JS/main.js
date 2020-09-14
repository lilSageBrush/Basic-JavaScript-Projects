function StringThing () {
    var sentence = "I'm writing a sentence to learn something about JavaScript.";
    var section = sentence.slice(25,65); // separates the string from one character to another //
    document.getElementById("monday").innerHTML = section;
}

function UpUp () {
    var words = "caps lock makes you seem angry";
    words = words.toUpperCase(); // makes things uppercase
    document.getElementById("tuesday").innerHTML = words;
}

function Looky () {
    var text = "Hello this is me";
    document.getElementById("wednesday").innerHTML = text.search("this"); // search looks for the specified text in the variable //
}

function FakeNumbers () {
    var number = 420;
    document.getElementById("thursday").innerHTML = number.toString(); // converts number data type to a string //
}

function Precise () {
    var longNumber = 84632.7586293464095604;
    document.getElementById("friday").innerHTML = longNumber.toPrecision(8); // controls how many digits can appear //
}

function FixMeUp () {
    var buttercup = 9000.257491;
    document.getElementById("saturday").innerHTML = buttercup.toFixed(3); //controls how long the decimal can be //

function Barbie () {
    var tingz = "Barbie Tingz - by Nicki Minaj";
    document.getElementById("sunday").innerHTML = tingz.valueOf(); // converts to primitive data type string, apparently JS does this automatically //
}
}

function KittyConcat () {
    var kitty = "we love a ";
    var cat = "kitty cat";
    document.getElementById("mlkday").innerHTML = kitty.concat(cat); // connects strings together //
}