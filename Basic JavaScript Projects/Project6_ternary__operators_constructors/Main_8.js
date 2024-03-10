
//Local and Global Variable//
var x = 20;
function add_numbers_1(){
    document.write(30+x+"<br>");
}


function add_numbers_2(){
    document.write(x+100);
}

add_numbers_1();
add_numbers_2();


//Local and Global Variable//


function add_numbers_1(){
    var x =10;
    document.write(30+x+"<br>");
}


function add_numbers_2(){
    document.write(x+100);
}

add_numbers_1();
add_numbers_2();




function get_date(){
    if (new Date().getHours()<18){
        document.getElementById("Greeting").innerHTML = "how are u doing today?";
    }
}
