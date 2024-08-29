var randomNumber1 = Math.floor((Math.random() * 6) + 1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1)

var img1 = "./images/dice" + randomNumber1 + ".png"
var img2 = "./images/dice" + randomNumber2 + ".png"

document.firstElementChild.lastElementChild.querySelector(".img1").setAttribute("src", img1)
document.firstElementChild.lastElementChild.querySelector(".img2").setAttribute("src", img2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 1° Player Wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🚩 2° Player Wins!"
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "😭 Draw 😭"
}
