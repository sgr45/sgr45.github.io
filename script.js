// Image size increase functionality
var image = document.querySelector("#image-and-description img");
var scaleFactor = 1.2;
var currentScale = 1;

function increaseSize() {
  currentScale *= scaleFactor;
  image.style.transform = "scale(" + currentScale + ")";
  
  if (currentScale > 1.5) { // Maximum scale value
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(increaseSize, 200); // Increase size every 200ms
