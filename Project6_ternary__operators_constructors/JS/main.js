function Vote () {
    var Age, Can_vote;
    Age = document.getElementById("age").value;
    Can_vote = (Age > 17.999999) ? "You're old ":"You're not old " ;
    document.getElementById("vote").innerHTML = Can_vote + "enough to vote";
}

function Vehicle (Make, Model, Year, Color) { // located in the parenthesis are the arguements //
    this.Vehicle_Make = Make; // "this" refers to the object it is located in //
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "red"); // new is required to make a new instance of the vehicle class.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "mustard");
function MyFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + " " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}




console.log("hello")

var test;
test = (3 > 2) ?  7 + 5 : 5 + 8;
console.log(test);


function Cats (Age) {
    this.Cats_Age = Age;
    this.Cat_Years = CalcCatYears();
    function CalcCatYears() { 
        var Place
        Place = this.Cats_Age;
        Place = (Place > 2) ? Place * 12.5 : Place - 2 * 4 + 25;
        return Place; 
    }
}

function Cat (Name, Breed, Color, Age, Years) {
    this.Cat_Name = Name;
    this.Cat_Breed = Breed;
    this.Cat_Color = Color;
    this.Cat_Age = Age;
    this.Cat_Years = function CalcCatYears() { 
        var Place, Years;
        Place = this.Cat_Age;
        (Place > 2) ? Place * 12.5 : Place - 2 * 4 + 25;
        return Years; 
    }
}
var Nuna = new Cats(3);
var Luna = new Cat("Luna", "Himalayan", "Black", 2, );

function Help() {
    document.getElementById("luna").innerHMTL = Nuna.Cats_Years;
}

