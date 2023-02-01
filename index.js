//  Player 1 Name section
var p1 = prompt("What is the name of Player 1?").toLowerCase();  //p1= player 1
var p1_1 = p1.slice(0,1);  //p1_1  first letter of player 1 name
var p1_rest = p1.slice(1,p1.length);  // p1_rest  rest letters of player 1 name
var p1_1Cap = p1_1.toUpperCase();  // p1_1Cap - capitalization of first letter of player 1 name
var pf1 = p1_1Cap + p1_rest;  // pf1 - final player 1 name
document.querySelector(".play1").innerHTML = pf1;

// Player 2 Name Section
var p2 = prompt("What iss the name of Player 2?").toLowerCase();  //p2 player 2
var p2_1 = p2.slice(0,1);  //p2_1  first letter of player 2 name
var p2_rest = p2.slice(1,p2.length);  // p2_rest  rest letters of player 2 name
var p2_1Cap = p2_1.toUpperCase();   // p2_1Cap - capitalization of first letter of player 2 name
var pf2 = p2_1Cap + p2_rest;  //  pf2 - final player 2 name
document.querySelector(".play2").innerHTML = pf2;


var randomNumber1 = Math.floor((Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src" , "images/dice"+ randomNumber1 +".png"); 

var randomNumber2 = Math.floor((Math.random()*6)+1);
document.querySelector(".img2").setAttribute("src" , "images/dice"+ randomNumber2 + ".png");

if(randomNumber1 > randomNumber2) {
    document.querySelector(".play1").innerHTML= "🚩" + pf1;
    //document.addEventListener('DOMContentLoaded', alert("Congratulations!!"+ pf1 +" Won."));
}

else if(randomNumber1< randomNumber2) {
    document.querySelector(".play2").innerHTML = pf2 + "🚩";
    //document.addEventListener('DOMContentLoaded',alert("Congratulations!!"+ pf2 +"Won."));
}

else {
    document.querySelector(".draw").innerHTML = "Draw";
    document.querySelector(".play1").innerHTML= "";
    document.querySelector(".play2").innerHTML= "";
    //document.addEventListener('DOMContentLoaded', alert("It's a Draw."));
}
