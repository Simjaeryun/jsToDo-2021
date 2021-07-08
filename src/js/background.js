const body = document.querySelector("body");
const images = ["dolphin.jpg", "sheep.jpg", "shootingstar.jpg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./img/${todaysImage}`;

body.appendChild(bgImage);
