const h1 = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const numlike = document.getElementById("heart");
const pauseresume = document.getElementById("pause");
const likep = document.createElement("p");

let num = parseInt(h1.innerText);
function incrementByOne() {
  h1.innerText = ++num;
}

function decrementByOne() {
  if (num > 0) {
    h1.innerText = --num;
  }
}

function getCurrentNum() {
  return parseInt(h1.innerText);
}

const ul = document.querySelector("ul.likes");

let likes = 1;
function likeNum() {
  const p = document.getElementById(`${num}`);
  function appendP(p) {
    p.innerText = `I liked the number ${num}, ${likes++} time(s)!`;
    ul.appendChild(p);
  }
  if (p) {
    appendP(p);
  } else {
    likes = 1;
    const p = document.createElement("p");
    p.id = num;
    appendP(p);
  }
}

numlike.addEventListener("click", likeNum);

let tid = setInterval(incrementByOne, 1000);

plus.addEventListener("click", incrementByOne);
minus.addEventListener("click", decrementByOne);

function toggleDisable() {
  plus.disabled = minus.disabled = numlike.disabled = !plus.disabled;
}

function pauseOrResume() {
  if (pauseresume.innerText == "pause") {
    clearTimeout(tid);
    pauseresume.innerText = "resume";
    toggleDisable();
  } else {
    pauseresume.innerText = "pause";
    tid = setInterval(incrementByOne, 1000);
    toggleDisable();
  }
}
pauseresume.addEventListener("click", pauseOrResume);
