// Global slide index
var slideIndex = 1;

// Function to open the modal
function openModal() {
  console.log("openModal function triggered");
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Function to handle the next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to control the thumbnail images
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show the slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  // Loop back to the first slide if n is greater than the number of slides
  if (n > slides.length) {slideIndex = 1}
  
  // Loop to the last slide if n is less than 1
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Add 'active' class to the corresponding dot
  dots[slideIndex - 1].className += " active";
  
  // Update the caption text
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Initialize the slideshow when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});
