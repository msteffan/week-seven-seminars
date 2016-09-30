/*

Week 7, Seminar 2: the DOM & jQuery

Goals:
  - Understand the DOM
  - Understand what jQuery is
  - Understand jQuery syntax
  - Understand how to modify HTML with jQuery

*/

/*


What is the DOM?

  - Stands for "document object model"

  - Standard way for browsers to represent HTML to JavaScript

  - Basically: a clone of your HTML




*/


/*



What is jQuery?


  - JavaScript library that lets us "do more, write less"

  - "Helper" methods to simplify JavaScript

  - under the hood: jQuery === JavaScript


*/

// vanilla JS
document.getElementById("logo").style.backgroundColor = "yellow"

// jQuery
$("#logo").css("background-color", "yellow")




// vanilla
var el = document.getElementById("#logo");
if (el.classList) {
  el.classList.toggle(className);
} else {
  var classes = el.className.split(' ');
  var existingIndex = classes.indexOf(className);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  el.className = classes.join(' ');
}


// ...jQuery
$("#logo").toggleClass(className);





      //selector
      $("#logo").toggleClass(className);
                  // action





              // getter
          $("#logo").css("color");

        // output: "rgb(255, 165, 0)"




              // setter
      $("#logo").css("color", "blue");

// output: <h1 id="logo" style="color: blue;">
