const randomNumber = document.querySelector(".random_num input");
const guessNumber = document.querySelector(".guess_num input");
const playBtn = document.querySelector(".guess_num button");
const randomResult = document.querySelector(
  ".num_result_box .random_num_result"
);
const guessResult = document.querySelector(".num_result_box .guess_num_result");
const playResult = document.querySelector(".play_result");
function handlePlayClick(e) {
  e.preventDefault();
  const randomValue = parseInt(Math.random() * randomNumber.value);
  const guessValue = parseInt(guessNumber.value);

  guessResult.innerHTML = `You chose : ${guessValue} ,`;
  randomResult.innerHTML = `the machine chose : ${randomValue}`;

  if (randomValue === guessValue) {
    playResult.innerHTML = "You win";
  } else {
    playResult.innerHTML = "You Lose ";
  }
}

playBtn.addEventListener("click", handlePlayClick);
