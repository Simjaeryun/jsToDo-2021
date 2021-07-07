const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const xMas = new Date(`${year}-12-25 00:00:00 GMT+0900`);
  const gap = xMas - now;
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  clockTitle.innerHTML = `${day < 10 ? `0${day}` : day}d
  ${hours < 10 ? `0${hours}` : hours}h
  ${minutes < 10 ? `0${minutes}` : minutes}m
  ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

getTime();
setInterval(getTime, 1000);
