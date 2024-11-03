const breakIncrementBtn = document.getElementById("break-increment");
const breakDecrementBtn = document.getElementById("break-decrement");
const sessionIncrementBtn = document.getElementById("session-increment");
const sessionDecrementBtn = document.getElementById("session-decrement");
const timerLabel = document.getElementById("timer-label");
const timer = document.getElementById("time-left");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start_stop");
const breakLength = document.getElementById("break-length");
const sessionLength = document.getElementById("session-length");
const beep = document.getElementById("beep");

let timerOn = "off";
let min = sessionLength.innerHTML;
let sec = 0;
timer.innerHTML =
  min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0");
timerLabel.innerText = "Session";
timerLabel.style.color = "black";
let br = "";
let mm = "";
let ss = 0;
let breakSec = 0;
let start = "";

breakIncrementBtn.addEventListener("click", () => {
  if (
    (timerLabel.innerText == "Session Paused" &&
      startBtn.innerHTML == `<i class="fa-solid fa-play"></i>`) ||
    startBtn.innerHTML == `<i class="fa-solid fa-pause"></i>`
  ) {
    if (breakLength.innerHTML >= 1 && breakLength.innerHTML < 60) {
      breakLength.innerHTML++;
      //        timerLabel.innerText = "Break";
    }
  } else {
    if (breakLength.innerHTML > 1 && breakLength.innerHTML < 60) {
      breakLength.innerHTML++;
      br = breakLength.innerHTML;
      timerLabel.innerText = "Break";
      timer.innerHTML =
        breakLength.innerHTML.toString().padStart(2, "0") +
        ":" +
        sec.toString().padStart(2, "0");
    }
  }
});

breakDecrementBtn.addEventListener("click", () => {
  if (
    (timerLabel.innerText == "Session Paused" &&
      startBtn.innerHTML == `<i class="fa-solid fa-play"></i>`) ||
    startBtn.innerHTML == `<i class="fa-solid fa-pause"></i>`
  ) {
    if (breakLength.innerHTML > 1 && breakLength.innerHTML <= 60) {
      breakLength.innerHTML = Math.floor((breakLength.innerHTML -= 1));
      //      timerLabel.innerText = "Break";
    }
  } else {
    if (breakLength.innerHTML > 1 && breakLength.innerHTML <= 60) {
      breakLength.innerHTML = Math.floor((breakLength.innerHTML -= 1));
      br = breakLength.innerHTML;
      timerLabel.innerText = "Break";
      timer.innerHTML =
        breakLength.innerHTML.toString().padStart(2, "0") +
        ":" +
        sec.toString().padStart(2, "0");
    }
  }
});

sessionIncrementBtn.addEventListener("click", () => {
  if (
    (timerLabel.innerText == "Session Paused" &&
      startBtn.innerHTML == `<i class="fa-solid fa-play"></i>`) ||
    startBtn.innerHTML == `<i class="fa-solid fa-pause"></i>`
  ) {
    if (sessionLength.innerHTML >= 1 && sessionLength.innerHTML < 60) {
      sessionLength.innerHTML++;
      //      timerLabel.innerText = "Session";
    }
  } else {
    if (sessionLength.innerHTML >= 1 && sessionLength.innerHTML < 60) {
      sessionLength.innerHTML++;
      timerLabel.innerText = "Session";
      timer.innerHTML =
        sessionLength.innerHTML.toString().padStart(2, "0") +
        ":" +
        sec.toString().padStart(2, "0");
      mm = sessionLength.innerHTML;
    }
  }
});

sessionDecrementBtn.addEventListener("click", () => {
  if (
    (timerLabel.innerText == "Session Paused" &&
      startBtn.innerHTML == `<i class="fa-solid fa-play"></i>`) ||
    startBtn.innerHTML == `<i class="fa-solid fa-pause"></i>`
  ) {
    if (sessionLength.innerHTML > 1 && sessionLength.innerHTML <= 60) {
      sessionLength.innerHTML = Math.floor((sessionLength.innerHTML -= 1));
      //      timerLabel.innerText = "Session";
    }
  } else {
    if (sessionLength.innerHTML > 1 && sessionLength.innerHTML <= 60) {
      sessionLength.innerHTML = Math.floor((sessionLength.innerHTML -= 1));
      mm = sessionLength.innerHTML;
      timerLabel.innerText = "Session";
      timer.innerHTML =
        sessionLength.innerHTML.toString().padStart(2, "0") +
        ":" +
        sec.toString().padStart(2, "0");
    }
  }
});
resetBtn.addEventListener("click", () => {
  //timerOn = "off";
  reset();
});

startBtn.addEventListener("click", () => {
  if (start == "" && startBtn.innerHTML == `<i class="fa-solid fa-play"></i>`) {
    mm = sessionLength.innerHTML;
    br = breakLength.innerHTML;
    //ss = 59;
    timerOn = "on";
    // countdown();
    setTimeout(countdown, 1000);
    start = "y";
  } else if (
    start == "y" &&
    startBtn.innerHTML == `<i class="fa-solid fa-play"></i>`
  ) {
    timerOn = "on";
    countdown();
  } else if (
    start == "y" &&
    startBtn.innerHTML == `<i class="fa-solid fa-pause"></i>`
  ) {
    timerOn = "off";
    pause();
  }
});

function reset() {
  clearTimeout(countdown);
  timerOn = "off";
  beep.pause();
  beep.currentTime = 0;
  startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  breakLength.innerHTML = 5;
  sessionLength.innerHTML = 25;
  min = sessionLength.innerHTML;
  ss = 0;
  breakSec = 0;
  br = "";
  mm = "";
  timer.innerHTML =
    min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0");
  timerLabel.innerText = "Session";
  timerLabel.style.color = "black";
  start = "";
}

function pause() {
  clearTimeout(countdown);
  timerOn = "off";
  beep.pause();
  startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  timerLabel.innerText = "Session Paused";
  timerLabel.style.color = "darkorange";
}

function countdown() {
  // minutes
  if ((mm > 0 || ss > 0) && timerOn == "on") {
    //seconds
    if (ss == 0) {
      mm--;
      ss = 60;
    }
    ss -= 1;
    timer.innerHTML =
      mm.toString().padStart(2, "0") + ":" + ss.toString().padStart(2, "0");
    timerLabel.innerText = "Session";
    timerLabel.style.color = "darkgreen";
    startBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    setTimeout(countdown, 1000);
    breakSec = 1;
  }

  //break
  else if ((br > 0 || breakSec > 0) && mm == 0 && ss == 0 && timerOn == "on") {
    if (breakSec == 0) {
      breakSec = 60;
      br--;
    }
    breakSec -= 1;
    timer.innerHTML =
      br.toString().padStart(2, "0") +
      ":" +
      breakSec.toString().padStart(2, "0");
    timerLabel.innerText = "Break";
    timerLabel.style.color = "darkred";
    beep.play();
    setTimeout(countdown, 1000);
  } else if (br == 0) {
    beep.play();
    br = breakLength.innerHTML;
    mm = sessionLength.innerHTML;
    timerLabel.innerText = "Session";
    timerLabel.style.color = "darkgreen";
    timer.innerHTML =
      mm.toString().padStart(2, "0") + ":" + ss.toString().padStart(2, "0");
    setTimeout(countdown, 1000);
    //  countdown();
  }
}
