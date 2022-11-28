const body = document.body;
const timeContainer = document.getElementById("time-container");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const current_date = new Date();

//clock
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const showTime = () => {
  hour.innerHTML = formatTime(current_date.getHours());
  minutes.innerHTML = formatTime(current_date.getMinutes());
  seconds.innerHTML = formatTime(current_date.getSeconds());
};

//how to perfect it ? switch function ?
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

showTime();
switchBg();
