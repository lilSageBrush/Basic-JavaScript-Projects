function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        TimeRanges.innerHTML = seconds;
        setTimeout(tick, 1000);
    if (seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// I've tried copying all of the HTML, CSS, and JavaScript directly from the w3
// web site and it still will not work due to line 42.
//Uncaught TypeError: Cannot read property 'style' of undefined
    //at showSlides (main.js:40)
    //at main.js:16
    
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length()}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //here is the problem string
    dots[slideIndex-1].className += " active";
}
