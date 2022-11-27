const body = document.body;
const time = document.getElementById("time");

const current_date = new Date();
let current_hour = current_date.getHours();

const switchBg = () => {
  if (current_hour >= 8 && current_hour <= 12) {
    console.log("morning");
  }
  if (current_hour >= 20 && current_hour <= 7) {
    body.style.backgroundImage =
      'url("https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
  }
};

switchBg();
