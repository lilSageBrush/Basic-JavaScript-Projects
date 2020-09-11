function FirstFunction() {
    var sfr = "shrimp fried rice"; //setting the string to place in HTML //
    var result = sfr.fontcolor("purple"); //Changing sfr text to purple //
    document.getElementById("purple_shrimp").innerHTML = result; // Placing purple string into HTML doucment //
}

function Concatenate() {
    var lamb= "Mary had a little lamb";
    lamb += ", Its fleece was white as snow"; //concatenating strings with += operator //
    document.getElementById("mary").innerHTML = lamb;
}