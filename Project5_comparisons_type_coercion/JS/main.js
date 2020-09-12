function Bottle () {
    var Container = {
        Shape: "cylinder",
        Capacity: "32oz",
        Color: "pink",
        Material: "metal"
    };
    document.getElementById("here").innerHTML = typeof Container.Color; // typeof tells you what data type the subject is
}

function NoName () {
    document.getElementById("there").innerHTML = 0/0;
}

function TrueNaN () {
    document.getElementById("true").innerHTML = isNaN("yours truly"); // isNaN is asking if the arguement is a nu mber or not //
}

function FalseNaN () {
    document.getElementById("false").innerHTML = isNaN(369);
}

function InfinityFunc () {
    document.getElementById("inf").innerHTML = (2E310); // most anything above 1.7E308 is infinity //
}

function Ninfinity () {
    document.getElementById("ninf").innerHTML = (-2E310);
}

function TrueBlue () {
    document.getElementById("blue").innerHTML = 34 > 10;
}

function FalseFriend () {
    document.getElementById("friend").innerHTML = "help" == "hello"; // == operator checks if both things are equal //
}

function TryMeTrick () {
    document.getElementById("consent").innerHTML = true + ", coercion isn't nice"; //JS has coercion, meaning it will force different data types together //
}

function TrueHue  () {
    document.getElementById("nair").innerHTML = 10 == 10;
}

function NewTrue () {
    document.getElementById("pear").innerHTML = 30 === 30;
}

function TrueFalse () {
    document.getElementById("claire").innerHTML = 68 === 48;
}

function NewFalse () {
    document.getElementById("bear").innerHTML = "shoe" === 35;
}

function FalseNew () {
    document.getElementById("hair").innerHTML = true === "true";
}

function And () {
    document.getElementById("glare").innerHTML = 14 < 16 && 3 < 27; // and operator, both must be true //
}

function Nand () {
    document.getElementById("mare").innerHTML =  54 < 17 && 78 > 100;
}

function Or () {
    document.getElementById("blare").innerHTML = 24 < 36 || 100 > 10; // or operator, either can be true
}

function Bore () {
    document.getElementById("share").innerHTML = 15 > 16 || 10 > 100;
}

function Not () {
    document.getElementById("care").innerHTML = !( 15 == 15); // Not operator will return the opposite //
}


console.log("Hello, this is me"); // console log will write this in the console //

console.log(10 > 100);