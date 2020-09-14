var color = "blue"; // this is a global variable //

function Error () { // This function intentionally logs an eror into the console //
    var localVar = "local"; // this is a local variable //
    console.log(localvar);
}
Error();

console.log(Date.getHours()); // Date requests local time info, getHours requests the hours in particular //
function DateMe () {
    if (new Date().getHours() > 9) {
        document.getElementById("hello").innerHTML = "You should be awake by now";
    }
    else {
        document.getElementById("hello").innerHTML = "It's okay if you're asleep";
    }
}
var mood = "happy";
function IsHappy () {
    if (mood == "happy") {
        document.getElementById("happy").innerHTML = "I am happy";
    } 
    else {
        document.getElementById("happy").innerHTML = "try again later";
    }
}

function WhatTime () {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) { // if statements evaluate whether the stateent inside is true or not //
        reply = "Its morning time.";
    }
    else if (time > 12 == time < 18) { // else if evaluates a another condition and acts accordingly //
        reply = "Its afternoon time.";
    }
    else { // if the if and else if statements are not true then this will run instead //
        reply = "Its night time.";
    }
    document.getElementById("time").innerHTML = reply;
}