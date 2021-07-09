const body = document.querySelector("body");
// const images = ["dolphin.jpg", "sheep.jpg", "shootingstar.jpg"];

// const todaysImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `./img/${todaysImage}`;

// body.appendChild(bgImage);

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function handleColorChange() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  const ifSameColor = colors[Math.ceil(Math.random() * colors.length)];

  if (firstColor === secondColor) {
    body.style.background = `linear-gradient(to right, ${firstColor}, ${ifSameColor})`;
  } else {
    body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
  }
}

body.style.backgroundColor = "black";

if (body.style.backgroundColor == "black") {
  body.style.background = `linear-gradient(to right, ${colors[0]}, ${colors[3]})`;
  body.addEventListener("click", handleColorChange);
}
