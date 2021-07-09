const body = document.querySelector("body");
const btn = body.querySelector("button");
const colors = [
  "#EF5777",
  "#575FCF",
  "#4BCFFA",
  "#34E7E4",
  "#0BE881",
  "#F53B57",
  "#3C40C6",
  "#0FBCF9",
  "#00D8D6",
  "#05C46B",
  "#FFC048",
  "#FFDD59",
  "#FF5E57",
  "#D2DAE2",
  "#485460",
  "#FFA801",
  "#FFD32A",
  "#FF3F34",
];
function handleColorChange() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  const ifSameColor = colors[Math.ceil(Math.random() * colors.length)];
  if (firstColor === secondColor) {
    body.style.background = `linear-gradient(to right, ${firstColor}, ${ifSameColor})`;
  } else if (firstColor === ifSameColor) {
    ifSameColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = `linear-gradient(to right, ${firstColor}, ${ifSameColor})`;
  } else {
    body.style.background = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
  }
}
btn.addEventListener("click", handleColorChange);
