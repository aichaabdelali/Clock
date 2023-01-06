const body = document.body;
const timeContainer = document.getElementById("time-container");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

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

function switchBg() {
  let current_date = new Date();
  let current_hour = current_date.getHours();
  //morning
  if (current_hour >= 8 && current_hour <= 11) {
    body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
  }

  //noon
  if (current_hour >= 12 && current_hour <= 15) {
    body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1460036521480-ff49c08c2781?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80")';
  }

  //afternoon
  if (current_hour >= 16 && current_hour <= 19) {
    body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")';
  }

  //night
  if (current_hour >= 20 || current_hour <= 7) {
    body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1470019693664-1d202d2c0907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVoZXJzYWwlMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60")';
  }
}

switchBg();
