const snowFall = () => {
  const bg = document.querySelector(".bg");
  for (let i = 0; i < 300; i++) {
    const snow = document.createElement("span");
    snow.classList.add("snow");
    if (i % 4 === 0) {
      snow.classList.add("snowAnimation1");
    } else if (i % 4 === 1) {
      snow.classList.add("snowAnimation2");
    } else if (i % 4 === 2) {
      snow.classList.add("snowAnimation3");
    } else {
      snow.classList.add("snowAnimation4");
    }
    const aNumber = -50 + randomNumber(150);
    const timeDelay = randomNumber(10);
    const animDuration = 5 + randomNumber(10) + Math.random() + 0.2;
    const snowOpacity = randomNumber(10) * 0.1;
    const heightWidth = randomNumber(11) + 5;
    snow.style.width = `${heightWidth}px`;
    snow.style.height = `${heightWidth}px`;
    snow.style.left = `${aNumber}%`;
    snow.style.animationDelay = `${timeDelay}s`;
    snow.style.animationDuration = `${animDuration}s`;
    snow.style.opacity = `${snowOpacity}`;
    bg.appendChild(snow);
  }
};

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

snowFall();

const textShadowColor = [
  "white",
  "green",
  "orange",
  "pink",
  "violet",
  "blue",
  "red",
  "yellow",
];
const color = [
  "#0c0f0a",
  "#1fd224",
  "#ffaa01",
  "#ff00aa",
  "#aa00ff",
  "#00aaff",
  "#f00",
  "#ffea00",
];
let count = 1;

const glowingText = (count) => {
  const btn = document.querySelector(".btn");
  const newYear = document.querySelector(".new-year");
  const year = document.querySelector(".year");
  const snow = document.querySelectorAll(".snow");

  btn.addEventListener("click", () => {
    if (count !== 0) {
      newYear.classList.remove(textShadowColor[count - 1]);
      year.classList.remove(textShadowColor[count - 1]);
      btn.classList.remove(`btn-${textShadowColor[count - 1]}`);
      snow.forEach((e) => {
        e.classList.remove(`snow-${textShadowColor[count - 1]}`);
      });
    }
    if (count === textShadowColor.length) {
      count = 0;
    }

    newYear.classList.add(textShadowColor[count]);
    year.classList.add(textShadowColor[count]);
    btn.classList.add(`btn-${textShadowColor[count]}`);
    snow.forEach((e) => {
      e.classList.add(`snow-${textShadowColor[count]}`);
    });
    btn.innerHTML = "Click Again!";
    btn.style.color = `${color[count]}`;
    count++;
  });
};
glowingText(count);
