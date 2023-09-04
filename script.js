const body = document.body;
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(function showTime() {
  let current_date = new Date();
  console.log(current_date)
  let hr = current_date.getHours();
  let min = current_date.getMinutes();
  let sec = current_date.getSeconds();

  day.innerHTML = current_date.toString().substring(0, 3) + "."
  date.innerHTML = current_date.toString().substring(4, 7) + "."
  month.innerHTML = current_date.toString().substring(8, 11)
  hour.innerHTML = formatTime(hr);
  minutes.innerHTML = formatTime(min);
  seconds.innerHTML = formatTime(sec);
}, 1000);

