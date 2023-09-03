const body = document.body;
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let current_date = new Date();
console.log(current_date)

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(function showTime() {
  let hr = current_date.getHours();
  let min = current_date.getMinutes();
  let sec = current_date.getSeconds();

  hour.innerHTML = formatTime(hr);
  minutes.innerHTML = formatTime(min);
  seconds.innerHTML = formatTime(sec);
}, 1000);

