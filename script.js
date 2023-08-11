var image = document.getElementById("yourImageId");
var fullscreenButton = document.getElementById("fullscreenButtonId");

image.addEventListener("mouseover", function() {
    image.classList.add("image-zoom");
});

image.addEventListener("mouseout", function() {
    image.classList.remove("image-zoom");
});

image.addEventListener("click", function() {
    image.classList.remove("image-zoom");
    image.classList.add("image-animation");
    setTimeout(function(){
        if (image.requestFullscreen) {
            image.requestFullscreen();
        } else if (image.mozRequestFullScreen) { /* Firefox */
            image.mozRequestFullScreen();
        } else if (image.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            image.webkitRequestFullscreen();
        } else if (image.msRequestFullscreen) { /* IE/Edge */
            image.msRequestFullscreen();
        }
    },1000);
});

fullscreenButton.addEventListener("click", function() {
    image.classList.remove("image-animation");
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
});

document.addEventListener("fullscreenchange", function() {
  if (document.fullscreen) {
    fullscreenButton.style.display = "block";
  } else {
    fullscreenButton.style.display = "none";
  }
});
