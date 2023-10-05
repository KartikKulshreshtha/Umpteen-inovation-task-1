const carousel = document.getElementById("carousel");
const images = Array.from(carousel.getElementsByClassName("carousel-image"));
let currentIndex = 0;

function showImages(startIndex) {
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        if (i >= startIndex && i < startIndex + 7) {
            image.style.display = "inline-block";
        } else {
            image.style.display = "none";
        }
    }
}

function rotateCarousel() {
    showImages(currentIndex);
    currentIndex = (currentIndex + 7) % images.length;
}

setInterval(rotateCarousel, 3000);
showImages(currentIndex);