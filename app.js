var hoursTime = document.getElementById("hours");
var minTime = document.getElementById("min");
var secTime = document.getElementById("sec");
var milSecTime = document.getElementById("milsec");

var hours = 0;
var min = 0;
var sec = 0;
var milsec = 0;

var interval;

function timer() {
  milsec++;
  milSecTime.innerHTML = milsec;
  if (milsec == 100) {
    sec++;
    secTime.innerHTML = sec;
    milsec = 0;
  } else if (sec == 60) {
    min++;
    minTime.innerHTML = min;
    sec = 0;
  } else if (min == 60) {
    hours++;
    hoursTime.innerHTML = hours;
    min = 0;
  }
}

function play() {
  var playBtn = document.getElementById("playBtn");
  var stopBtn = document.getElementById("stopBtn");
  var resetBtn = document.getElementById("resetBtn");
  interval = setInterval(timer, 10);
  playBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function stop() {
  var playBtn = document.getElementById("playBtn");
  var stopBtn = document.getElementById("stopBtn");
  clearInterval(interval);
  playBtn.disabled = false;
  stopBtn.disabled = true;
}

function reset() {
  var playBtn = document.getElementById("playBtn");
  var stopBtn = document.getElementById("stopBtn");
  var resetBtn = document.getElementById("resetBtn");
  playBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  clearInterval(interval);
  hoursTime.innerHTML = 0;
  minTime.innerHTML = 0;
  secTime.innerHTML = 0;
  milSecTime.innerHTML = 0;
  hours = 0;
  min = 0;
  sec = 0;
  milsec = 0;
}
