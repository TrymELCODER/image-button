var currentImage = 1;
var images = ['/image/hogwarts 33.jpeg', '/image/Hogwarts day.jpeg', '/image/Hogwarts Night.png', '/image/hogwarts44.webp', '/image/Hogwarts day.jpeg'];

function changeBackground() {
    var backgroundContainer = document.getElementById('background-container');
    currentImage = (currentImage % images.length) + 1;
    backgroundContainer.style.backgroundImage = "url('" + images[currentImage - 1] + "')";
}