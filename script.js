// Wait for the page to load
window.onload = function() {
  // Get the button element
  var button = document.getElementById("button");

  // Get the hidden message element
  var hiddenMessage = document.getElementById("hidden-message");

  // Hide the message initially
  hiddenMessage.style.display = "none";

  // Add an event listener to the button
  button.addEventListener("click", function() {
    // Toggle the message display
    if (hiddenMessage.style.display === "none") {
      hiddenMessage.style.display = "block";
    } else {
      hiddenMessage.style.display = "none";
    }
  });
};

// Wait for the page to load
window.onload = function() {
// Get the button element
var button = document.getElementById("button");

// Get the hidden message element
var hiddenMessage = document.getElementById("hidden-message");

// Hide the message initially
hiddenMessage.style.display = "none";

// Add an event listener to the button
button.addEventListener("click", function() {
// Toggle the message display
if (hiddenMessage.style.display === "none") {
hiddenMessage.style.display = "block";
} else {
hiddenMessage.style.display = "none";
}
});

// Adjust image container width on window resize
window.addEventListener("resize", function() {
var imageContainer = document.querySelector(".image-container");
var containerWidth = window.innerWidth - 40; // subtracting margin and padding
imageContainer.style.width = containerWidth + "px";
});
};