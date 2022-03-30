// Initializing Variables
const timerEl = document.getElementById("timer-text");
const startBtn = document.querySelectorAll(".buttons");
let seconds = (minutes = hours = days = 0);
let pauseTimer = false;

// Start button logic
const start = () => {
  let timer = "";
  // Seconds and minutes here
  if (!pauseTimer) {
    if (seconds <= 60) {
      seconds += 1;
    } else if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    // Hours
    if (minutes >= 60) {
      minutes = 0;
      hours += 1;
    } else if (hours >= 24) {
      hours = 0;
      days += 1;
    }
  }
  timer = `${days}:${hours}:${minutes}:${seconds}`;
  timerEl.textContent = timer;
};

// Pause button logic
const pause = () => {
  pauseTimer = true;
};

// Reseat button logic
const reseat = () => {
  seconds = 0;
  hours = 0;
  minutes = 0;
  days = 0;
  timer = `${days}:${hours}:${minutes}:${seconds}`;
  timerEl.textContent = timer;
};

// Calling Function
startBtn[0].addEventListener("click", () => {
  pause();
});

startBtn[1].addEventListener("click", () => {
  pauseTimer = false;
  timerInterval = setInterval(start, 10);
});

startBtn[2].addEventListener("click", () => {
  reseat();
});

// Problem
// Putting the value in local system
