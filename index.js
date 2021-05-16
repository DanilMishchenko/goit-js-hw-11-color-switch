const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isButtonActivity = false;
let intervalId = null;

refs.start.addEventListener('click', onStartClickBtn)
refs.stop.addEventListener('click', onStopClickBtn)

function onStartClickBtn() {
  if (isButtonActivity) {
    return;
  }
  refs.start.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
}, 1000);
};

function onStopClickBtn() {
  refs.start.removeAttribute('disabled');
  clearInterval(intervalId)
};