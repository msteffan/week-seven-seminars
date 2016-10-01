// Vanilla JS:

  document.querySelector("#logo").addEventListener("click", function(){
    // function body here
  })

// jQuery click event: Turn the logo text red








// jQuery toggleClass — add or remove a "show" class








// jQuery hide/show/toggle - hide the "ul" on click






// put it all together: Toggle the "show" class on our sloth fact every time the "#best-animal" div is clicked

  // add the .show class in the CSS
  // hide the .sloth-fact div by default
  // add the click event for #best-animal
  // toggle the .show class after click







function showFact(){
  $(".sloth-fact").toggleClass("show")
}

$("#best-animal").click(showFact)

$(".close-button").click(showFact)
