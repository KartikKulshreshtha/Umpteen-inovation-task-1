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


// Hovering functionality
function handleHover(){
    const targetElement = document.getElementById("dropdown-about");
    targetElement.style.display = "flex";
}

const Element = document.getElementById("about")
Element.addEventListener("mouseover", handleHover);

function handleMouseOut() {
    const targetElement = document.getElementById("dropdown-about");
    targetElement.style.display = "none";
}

const elementToHover = document.getElementById("about");

elementToHover.addEventListener("mouseout", handleMouseOut);


function handleHover1(){
    const targetElement = document.getElementById("dropdown-services");
    targetElement.style.display = "flex";
}

const Element1 = document.getElementById("services")
Element1.addEventListener("mouseover", handleHover1);

function handleMouseOut1() {
    const targetElement = document.getElementById("dropdown-services");
    targetElement.style.display = "none";
}

const elementToHover1 = document.getElementById("services");

elementToHover1.addEventListener("mouseout", handleMouseOut1);


function handleChange1(){
    changeElement2.classList.remove("active");
    changeElement3.classList.remove("active");
    changeElement1.classList.add("active")
    document.getElementById("all-element-content1").style.display = "block"
    document.getElementById("all-element-content2").style.display = "none"
    document.getElementById("all-element-content3").style.display = "none"
}
function handleChange2(){
    changeElement1.classList.remove("active");
    changeElement3.classList.remove("active");
    changeElement2.classList.add("active")

    document.getElementById("all-element-content1").style.display = "none"
    document.getElementById("all-element-content2").style.display = "block"
    document.getElementById("all-element-content3").style.display = "none"
}
function handleChange3(){
    changeElement2.classList.remove("active");
    changeElement1.classList.remove("active");
    changeElement3.classList.add("active")

    document.getElementById("all-element-content1").style.display = "none"
    document.getElementById("all-element-content2").style.display = "none"
    document.getElementById("all-element-content3").style.display = "block"
}

const changeElement1 = document.getElementById("web");
changeElement1.addEventListener("click", handleChange1)
const changeElement2 = document.getElementById("digital");
changeElement2.addEventListener("click", handleChange2)
const changeElement3 = document.getElementById("reseller");
changeElement3.addEventListener("click", handleChange3)