




// add a hello message

  // prompt for the user's name

  // write a function that prints out the user's name

  // invoke the function








// write a function that converts temperatures from celsius to fahrenheit

// declare a function
  // will need two parameters
function convertTemp(temp, convertTo){
  // determine which formula to use
  if(convertTo == "C"){
    // fahrenheit to celsius: (x * 5/9) - 32
    var newTemp = (temp - 32) * 5/9 ;
  } else {
    // celsius to fahrenheit: x * 9/5 + 32
    var newTemp = temp * 9/5 + 32;
  }
  // return the temp
  return newTemp;
}



// modify the css
// document.getElementById("logo").style.backgroundColor= "springgreen"
//
// var name = prompt("What is your name?")
// document.querySelector("#logo").textContent = "Welcome to this zoo, " + name + "!"





// write a function that overwrites the logo text with a custom welcome message

// create a variable for the user's name

// declare a function
  // will need a name parameter

// select our logo element
  // set the new text content

// invoke the function






// change the bg color of some text after click

// select the element
// add the event listener
//  change the background-color property











// document.querySelector('#logo').onclick = function(){
//   // document.querySelector('#logo').style.backgroundColor = "yellow"
//   document.querySelector('#logo').classList.toggle("logo-flipper")
//
// }
//

// function flipLogo(){
//   document.querySelector('#logo').classList.toggle("logo-flipper")
// }
// document.querySelector('#logo').addEventListener('click', flipLogo);
