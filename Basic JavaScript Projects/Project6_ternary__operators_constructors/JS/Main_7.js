function my_dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Alsesation",
        Age:12,
        Sound:"Bark"
    } ;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
};

document.write(10>5); //

document.write(10<4);

console.log(100+100);


console.log(100>200);


document.write(10==10);


document.write(3==10);


x = 10;
y = 10;
document.write(x===y);



x = 20;
y = 10;
document.write(x===y);


A = "Happy"

B = "Happy"

document.write(A===B);


A = "Happy"

B = "PINKU"

document.write(A===B); //equal to operator//

document.write(10>2  &&  10>4);  // and operator//


document.write(10>12  &&  10>14);  // and operator//


document.write(10>12  ||  10>4); //OR operator//


document.write(10>15  &&  10>20); // and operator//


function not_function() {
    document.getElementById("Not").innerHTML =!(20>10); //Not Operator//
}


function not_function() {
    document.getElementById("Not").innerHTML =!(5>10); //Not Operator//
}

function Vote_function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote =(Age<18)? "You are not old enough to vote" :"You can vote!"
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";
}
//contructor class//
function vehicle(make,model,year,color){
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
//contructor class//
var jack = new vehicle("dodge","viper",2020,"red");
var emily = new vehicle("jeep","trail-hawk",2018,"white and black");

var erik = new vehicle("ford","pinto",1971,"green");
var arvind = new vehicle("hyundai","santafe",2024,"velvet");

function myfunction(){   //Keywords constructors//
    document.getElementById("keywords_and_constructors").innerHTML =
    "erik drives a" + erik.vehicle_color + "-colored" + erik.vehicle_model +
    "manufactured in" + erik.vehicle_year;
}
