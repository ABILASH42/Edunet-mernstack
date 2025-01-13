// Get the elements
let a = document.getElementById("change");
let button = document.getElementById("changeColorButton");

// Add an event listener to the button
button.addEventListener("click", function() {
    a.style.backgroundColor = "yellow";
});
