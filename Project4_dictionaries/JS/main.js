function MyDictionary () {
    var Pasta = { // You can save multiple key value pairs to a var //
        Noodle: "penne", // Key value pairs should be separated with commas
        Sauce: "vodka",
        Protein: "chicken",
        Protein: "chicken",
        Cheese: "parmesan"
    };
    delete Pasta.Protein; //the delete operator is used to delete the specified value //
    document.getElementById("dictionary").innerHTML = Pasta.Protein; // Pasta refers to the var in MyDictionary .Protein asks for the specific key pair value //
}