var images = document.getElementsByClassName("img1");
var bigImageDisplay = document.getElementById("bigImageDisplay");
var imageText = document.getElementById("imageText");

// Set the initial active image and text
var initialImage = images[0];
var initialImageSrc = initialImage.src;
var initialImageAlt = initialImage.alt;
displayImage(initialImageSrc, initialImageAlt);

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    var imageSrc = this.src;
    var imageName = this.alt;
    displayImage(imageSrc, imageName);
  });
}

function displayImage(imageSrc, imageName) {
  bigImageDisplay.src = imageSrc;
  imageText.innerText = imageName;
}