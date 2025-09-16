$(document).ready(function () {
  // Your code goes here
  $("<div>")
  .css("height", 60)
  .css("width", 60)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 110)
  .css("left", 110)
  .appendTo("#die");

  $("<div>")
  .css("height", 60)
  .css("width", 60)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 110)
  .css("left", 110)
  .appendTo("#die2");

var incr = 0;

function counter() {
  $("h1").text("Times clicked: " + incr);
}

$("#die").on("click", counter);
$("#die2").on("click", counter);

function makeDot(top, left, elementID) {
  $("<div>")
  .css("height", 60)
  .css("width", 60)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(elementID);
}

function rollDie() {
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);

  incr++;
  
  autoUpgrade();

  $("#die").empty();

  if (randomNum === 1) {
    makeDot(110, 110, "#die"); // middle middle
  } else if (randomNum === 2) {
    makeDot(25, 25, "#die"); // top left
    makeDot(215, 215, "#die"); // bottom right
  } else if (randomNum === 3) {
    makeDot(25, 25, "#die"); // top left
    makeDot(215, 215, "#die"); // bottom right
    makeDot(110, 110, "#die"); // middle middle
  } else if (randomNum === 4) {
    makeDot(215, 215, "#die"); // bottom right
    makeDot(25, 25, "#die"); // top left
    makeDot(25, 215, "#die"); // bottom left
    makeDot(215, 25, "#die"); // top right
  } else if (randomNum === 5) {
    makeDot(110, 110, "#die"); // middle middle
    makeDot(215, 215, "#die"); // bottom right
    makeDot(25, 25, "#die"); // top left
    makeDot(25, 215, "#die"); // bottom left
    makeDot(215, 25, "#die"); // top right
  } else if (randomNum === 6) {
    makeDot(25, 25, "#die"); 
    makeDot(215, 25, "#die"); 
    makeDot(25, 215, "#die");
    makeDot(215, 215, "#die");
    makeDot(120, 25, "#die");
    makeDot(120, 215, "#die");
  }
}

function rollDie2() {
  var randomNum2 = Math.ceil(Math.random() * 6);
  console.log(randomNum2);

  incr++;
  
  autoUpgrade();

  $("#die2").empty();

  if (randomNum2 === 1) {
    makeDot(110, 110, "#die2"); // middle middle
  } else if (randomNum2 === 2) {
    makeDot(25, 25, "#die2"); // top left
    makeDot(215, 215, "#die2"); // bottom right
  } else if (randomNum2 === 3) {
    makeDot(25, 25, "#die2"); // top left
    makeDot(215, 215, "#die2"); // bottom right
    makeDot(110, 110, "#die2"); // middle middle
  } else if (randomNum2 === 4) {
    makeDot(215, 215, "#die2"); // bottom right
    makeDot(25, 25, "#die2"); // top left
    makeDot(25, 215, "#die2"); // bottom left
    makeDot(215, 25, "#die2"); // top right
  } else if (randomNum2 === 5) {
    makeDot(110, 110, "#die2"); // middle middle
    makeDot(215, 215, "#die2"); // bottom right
    makeDot(25, 25, "#die2"); // top left
    makeDot(25, 215, "#die2"); // bottom left
    makeDot(215, 25, "#die2"); // top right
  } else if (randomNum2 === 6) {
    makeDot(25, 25, "#die2"); 
    makeDot(215, 25, "#die2"); 
    makeDot(25, 215, "#die2");
    makeDot(215, 215, "#die2");
    makeDot(120, 25, "#die2");
    makeDot(120, 215, "#die2");
  }
}

function autoUpgrade() {
  if (incr === 51) {
    $("#die").css("background","linear-gradient(#FFD700, white)");
    $("#die2").css("background","linear-gradient(#FFD700, white)");
    $("body").css("background-image", "url(gold.png)");
    $("body").css("background-size", "100vw 150vh");
  } else if (incr === 101) {
    $("#die").css("background","linear-gradient(#4EE2EC, white)"); 
    $("#die2").css("background","linear-gradient(#4EE2EC, white)");
    $("body").css("background-image", "url(diamond.jpg)");
    $("body").css("background-size", "100vw 150vh");
  } else if (incr === 251) {
    $("#die").css("background","linear-gradient(black, gray)"); 
    $("#die2").css("background","linear-gradient(black, gray)");
    $("body").css("background-image", "url(void.jpg)");
    $("body").css("background-size", "100vw 125vh");
    $("h1").css("color", "white");
  } else if (incr === 1001) {
    $("#die").css("background","linear-gradient(red, orange, yellow, green, cyan, blue, indigo, violet, purple)"); 
    $("#die2").css("background","linear-gradient(red, orange, yellow, green, cyan, blue, indigo, violet, purple)");
    $("body").css("background-image", "url(rainbow.jpg)");
    $("body").css("background-size", "100vw 125vh");
    $("h1").css("color", "black");
  } else if (incr === 2501) {
    $("#die").css("background","linear-gradient(red, blue)"); 
    $("#die2").css("background","linear-gradient(blue, red)");
    $("body").css("background-image", "url(rednblue.jpg)");
    $("body").css("background-size", "100vw 125vh");
  } else if (incr === 5001) {
    $("#die").css("background","linear-gradient(darkred, orange)"); 
    $("#die2").css("background","linear-gradient(blue, lightblue)");
    $("body").css("background-image", "url(hotncold.jpg)");
    $("body").css("background-size", "100vw 125vh");
  }
}

$("#die").on("click", rollDie);
$("#die2").on("click", rollDie2);

});
