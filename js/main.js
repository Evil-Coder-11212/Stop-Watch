const timerEl = document.getElementById("timer-text");
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

const logic = () => {
  let timer = "";
  let error = false;
  let erorMessage = "";
  // Seconds and minutes here
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
  timer = `${days}:${hours}:${minutes}:${seconds}`;
  timerEl.textContent = timer;
};

// Calling Function
setInterval(logic, 1000);

// Problems :
// Start Button: TO DO
// Pause Butoton: TO DO
// Reseat Button: TO DO
