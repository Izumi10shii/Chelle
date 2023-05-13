// Wait for the page to load
window.onload = function() {
  // Get the button element
  var button = document.getElementById("button");

  // Get the hidden message element
  var hiddenMessage = document.getElementById("hidden-message");

  // Create the close button element
  var closeButton = document.createElement("span");
  closeButton.className = "close-button";
  closeButton.innerHTML = "&#x2716;";

  // Append the close button to the hidden message
  hiddenMessage.appendChild(closeButton);

  // Hide the message initially
  hiddenMessage.style.display = "none";

  // Add an event listener to the button
  button.addEventListener("click", function() {
    // Show the message
    hiddenMessage.style.display = "block";
  });

  // Add an event listener to the close button
  closeButton.addEventListener("click", function() {
    // Hide the message
    hiddenMessage.style.display = "none";
  });

  // Adjust image container width on window resize
  window.addEventListener("resize", function() {
    var imageContainer = document.querySelector(".image-container");
    var containerWidth = window.innerWidth - 40; // subtracting margin and padding
    imageContainer.style.width = containerWidth + "px";
  });
};

// Song
var audioPlayer = document.getElementById('audio-player');
var progressBar = document.querySelector('.progress');

audioPlayer.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
  var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = progress + '%';
}