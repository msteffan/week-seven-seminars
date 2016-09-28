// console.log("hello world");

// add a hello message
// var name = prompt("What is your name?");
// function sayHello(name){
//   alert("Welcome, " + name + "!")
// }
// sayHello(name)

// convert temps from celsius to fahrenheit

function convert(degrees, convertTo) {
  if (convertTo == "F"){
    var temp = degrees * 9/5 + 32;
  } else {
    var temp = degrees * 5/9 - 32;

  }
  return temp;
}

// change the color of some text
// document.querySelector('#logo').onclick = function(){
//   // document.querySelector('#logo').style.backgroundColor = "yellow"
//   document.querySelector('#logo').classList.toggle("logo-flipper")
//
// }
//

function flipLogo(){
  document.querySelector('#logo').classList.toggle("logo-flipper")
}
document.querySelector('#logo').addEventListener('click', flipLogo);


var classname = document.getElementsByClassName("animal");
var addBackgroundColor = function() {
    this.classList.toggle("selected");
};
