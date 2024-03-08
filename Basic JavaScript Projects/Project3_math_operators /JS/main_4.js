function addition_function(){
    var addition = 100+200;
    document.getElementById("math").innerHTML= "100+200 ="+addition; // function is used to do mathematics calculation using operator//
}

function subtraction_function(){
    var subtraction = 200-100;
    document.getElementById("Math").innerHTML= "200-100 ="+subtraction; // function is used to do mathematics calculation using operator//
}

function multiplication_function(){
    var multiplication = 200*100;
    document.getElementById("Math_").innerHTML= "200*100 ="+multiplication; // function is used to do mathematics calculation using operator//
}

function division_function(){
    var division = 200/100;
    document.getElementById("Math_1").innerHTML= "200/100 ="+division; // function is used to do mathematics calculation using operator//
}


function more_math(){
    var simple_math = (200+100)*10/2-10;
    document.getElementById("Math_3").innerHTML= "200 plus 100,multiplied by 10,divided in half and then subtracted by 10 equals"+simple_math; // function is used to do mathematics calculation using operator//
}


function modulus_operator(){
    var simple_math = 25 % 6;
    document.getElementById("Math_3").innerHTML= "when you divide 25 by 6 you have a remainder of : "+simple_math; // function is used to do mathematics calculation using operator//
}

function negation_operator(){
    var x = 25 ;
    document.getElementById("Math_4").innerHTML=  -x ; // function is used to do mathematics calculation using operator  Unary Operator //
}


var x = 200
x++;
document.write(x);



var y = 200
y--;
document.write(y);


window.alert(Math.random() * 1000);
