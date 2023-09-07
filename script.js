const DAY = document.querySelector("#day");
const TIME = document.querySelector("#time");

// GET THE CURRENT DAT
const updateDay = () => {
  const currentDayNumber = new Date().getDay();
  const daysOfTheWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const currentDay = daysOfTheWeek[currentDayNumber];
  DAY.textContent = currentDay;
};

// GET THE CURRENT TIME

const updateTime = () => {
  const hrs = new Date().getHours();
  const mins = new Date().getMinutes();
  const secs = new Date().getSeconds();

  const currentHr = hrs.toString().length < 2 ? `0${hrs}` : hrs;
  const currentMin = mins.toString().length < 2 ? `0${mins}` : mins;
  const currentSec = secs.toString().length < 2 ? `0${secs}` : secs;
  let currentTime = "";

  if (hrs < 12) {
    currentTime = `${currentHr} : ${currentMin} : ${currentSec} AM`;
  } else {
    currentTime = `${currentHr} : ${currentMin} : ${currentSec} PM`;
  }

  TIME.textContent = currentTime;
};

// updateTime();
setInterval(updateTime, 1000);
setInterval(updateDay, 1000);
