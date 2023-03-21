var prevCentiseconds = 10;
var prevSeconds = 50;
var prevMinutes = 30;

// current time values
var currentCentiseconds = 30;
var currentSeconds = 30;
var currentMinutes = 45;

// adjust current time values
if (currentCentiseconds < prevCentiseconds) {
  currentCentiseconds += 100;
  currentSeconds -= 1;
}
if (currentSeconds < prevSeconds) {
  currentSeconds += 60;
  currentMinutes -= 1;
}
if (currentMinutes < prevMinutes) {
  currentMinutes += 60;
}

// calculate time difference in seconds
var timeDifference = (currentMinutes - prevMinutes) * 60 +
                      (currentSeconds - prevSeconds) +
                      (currentCentiseconds - prevCentiseconds) / 100;

console.log(timeDifference);