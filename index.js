var randomNumber1 = Math.floor((Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src" , "images/dice"+ randomNumber1 +".png"); 

var randomNumber2 = Math.floor((Math.random()*6)+1);
document.querySelector(".img2").setAttribute("src" , "images/dice"+ randomNumber2 + ".png");

if(randomNumber1 > randomNumber2) {
    document.querySelector(".play1").innerHTML= "🚩Player 1";
}

else if(randomNumber1< randomNumber2) {
    document.querySelector(".play2").innerHTML = "Player 2🚩";
}

else {
    document.querySelector(".draw").innerHTML = "Draw";
    document.querySelector(".play1").innerHTML= "";
    document.querySelector(".play2").innerHTML= "";
}
