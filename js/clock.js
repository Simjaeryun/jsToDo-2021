const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();
  const hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
  ${minutes < 10 ? `0${minutes}` : minutes}:
  ${seconds < 10 ? `0${seconds}` : seconds}`;
}

setInterval(getTime, 1000);
