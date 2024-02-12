var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomImage1 = "dice"+ randomNumber1 + ".png";

var img1Location = "images/"+randomImage1;

document.querySelector(".img1").setAttribute("src", img1Location);


var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomImage2 = "dice"+ randomNumber2 + ".png";

var img1Location = "./images/"+randomImage2;

document.querySelector(".img2").setAttribute("src", img1Location);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=("Player 1 Wins!");
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML=("Player 2 Wins!");
}
else{
    document.querySelector("h1").innerHTML=("Draw!!");
}


document.querySelector("button").addEventListener("click", function(){
    this.onclick = location.reload();
})
