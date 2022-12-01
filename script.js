const body = document.body;
const timeContainer = document.getElementById("time-container");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let current_date = new Date();

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(function showTime() {
  let current_date = new Date();
  let hr = current_date.getHours();
  let min = current_date.getMinutes();
  let sec = current_date.getSeconds();

  hour.innerHTML = formatTime(hr);
  minutes.innerHTML = formatTime(min);
  seconds.innerHTML = formatTime(sec);
}, 1000);

const switchBg = () => {
  //morning
  if (current_date.getHours() >= 8 && current_date.getHours() <= 11) {
    body.style.backgroundImage =
      'url("https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
  }

  //noon
  if (current_date.getHours() >= 12 && current_date.getHours() <= 15) {
    body.style.backgroundImage =
      'url("https://images.pexels.com/photos/2872210/pexels-photo-2872210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
  }

  //afternoon
  if (current_date.getHours() >= 16 && current_date.getHours() <= 19) {
    body.style.backgroundImage =
      'url("https://images.pexels.com/photos/1669939/pexels-photo-1669939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
  }

  //night
  if (current_date.getHours() >= 20 && current_date.getHours() <= 7) {
    body.style.backgroundImage =
      'url("https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
  }
};

switchBg();
