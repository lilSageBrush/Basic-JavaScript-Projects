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

console.log((3 < 2) ? 3 * 12.5 : (3 - 2) * 4 + 25);

function Cats (Age) {
    this.Cats_Age = Age;
    this.Cat_Years = CalcCatYears();
function CalcCatYears() { 
        var Place;
        Place = this.Cats_Age;
        console.log(Place);
        console.log(Place = (Place < 2) ? Place * 12.5 : Place - 2 * 4 + 25);
        return Place; 
    }
}

var Nuna = new Cats(3, );
function Help() {
    document.getElementById("nuna").innerHMTL = Nuna.Cats_Years;
}

