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
  let currentTime = "";

  if (hrs < 12) {
    if (hrs.toString().length < 2) {
      currentTime = `0${hrs} : ${mins} : ${secs} AM`;
    } else {
      currentTime = `${hrs} : ${mins} : ${secs} AM`;
    }
  } else {
    currentTime = `${hrs} : ${mins} : ${secs} PM`;
  }

  TIME.textContent = currentTime;
};

// updateTime();
setInterval(updateTime, 1000);
setInterval(updateDay, 1000);
