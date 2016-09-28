/*

JAVASCRIPT BUILDING BLOCKS

What is JavaScript?
    - "client-side scripting language"

    - Scripting language = no compilation required

    - easy to get started -> just make a .js file

    - put .js files right before </body> tag

*/





// Variables
  // a way to store information

// declaration               // value
          var pizzaTopping = "cheese"
                // name

                       // expression
          var twenty = 5 * 4
                       // value
          var twenty = 20







// a number is a number!
var number = 5;

// a string is text
var string = "hello";
var string2 = "1";
var string3 = "Hello " + 1; // Hello 1
var string4 = "1" + 1; // 11
// a number in quotes (i.e. "5") is read like text; a number without quotes is read like a number

// a boolean is either true or false
var boolean = true;
var boolean = false;



// An Object
// Like a dictionary (one definition for every word)
var demoObject = {
  key1:"value",
  key2:"value",
  key3:"value"
}

var favoriteMeals = {
  breakfast: "Waffles with peanut butter",
  lunch: "Turkey and havarti sandwich",
  dinner: "Pizza",
  mealsADay: 3
}

// How do we access something in an object?
// "dot notation"
  favoriteMeals.dinner

// "bracket notation"
  favoriteMeals["lunch"]

/*
A BRIEF INTERLUDE FOR AN IMPORTANT MESSAGE!

- JavaScript is case-sensitve
  - favoriteMeals does not equal favoritemeals
  - favoriteMeals.Dinner isn't favoriteMeals.dinner

- Best practice = camel-casing
  - thisIsAnExampleOfCamelCasing
  - firstWordLowerCased
  - thenOtherWordsCapitalized

*/


// An Array
// like a numbered list -- every item has a number
  // An item's number is called an "index"
  // indexes start at 0 & count up
var demoArray = ["blue", 1, "2", "pineapples", false]

var fruits = ["apples", "oranges", "bananas", "pineapples"]

// How do we access something in an array?
fruits[0]
fruits[4]
fruits[5] // doesn't exist! :(


// Control Flow
  // oh man, scary words!!
  // not scary version of the words: "how we want the computer to decide things"

// if statement
if (  ){

}

// if-else statement
if (  ){

} else {

}

// if()-else if()-else statement
if (  ){

} else if (  ) {

} else {

}



// FUNCTIONS
  // Reuseable bits of code

  // declaring our function:
 //declaration  //name  //parameter
     function sayHello(firstName){
       // function body goes here!
       return "Hello, " + firstName + "!"
     }

// invoking our function:
   //name  //argument
  sayHello("Melissa")






// Selectors

document.getElementById('id')

document.getElementsByClassName('className')

document.querySelector('query')


// example:
document.getElementById("logo")

document.querySelector("#logo")





// Methods

// set a css property
document.getElementById("bagel").style.color = "goldenrod";

// add a CSS className
document.querySelector('query').classList.add("anotherclass");


// Events and event listeners

  // using an anonymous function
  document.querySelector("").addEventListener('click', function(){
    // do cool stuff
  })

  // using a named function
  function doCoolStuff(){
    // do cool stuff
  }

  document.querySelector("").addEventListener('click', doCoolStuff)













// fin
