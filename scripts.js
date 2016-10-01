
// var logoColor = $("#logo").css("color");
// console.log(logoColor);
//
// $("#logo").css("color", "blue");



/* Vanilla JS:

document.querySelector("#logo").addEventListener("click", function(){
  // function body here
})

*/

// jQuery click event: Turn the logo text red



// jQuery toggleClass


// jQuery hide/show/toggle
$("#logo").click(function(){
  $(".animal").toggle()
})



// put it all together: Toggle a jQuery class on an element on each click event
function showFact(){
  $(".sloth-fact").toggleClass("show")
}

$("#best-animal").click(showFact)

$(".close-button").click(showFact)
