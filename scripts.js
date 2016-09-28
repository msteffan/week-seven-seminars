// console.log("hello world");

// add a hello message
// var name = prompt("What is your name?");
// function sayHello(name){
//   alert("Welcome, " + name + "!")
// }
// sayHello(name)

// convert temps from celsius to fahrenheit

function convert(celsius) {
  var fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}
//
// var temperature = prompt("What is the temperature in celsius?");
// convert(temperature)

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
