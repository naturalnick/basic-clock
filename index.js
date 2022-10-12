const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

updateClock();

var timer = window.setInterval(function() {
  updateClock();
}, 1000);

function updateClock() {
  const newDate = new Date();

  document.getElementById("time").innerHTML = getCurrentTimeString(newDate);
  document.getElementById("date").innerHTML = getCurrentDateString(newDate);
}

function getCurrentDateString(date) {
  var day = dayNames[date.getDay() - 1];
  var month = monthNames[date.getMonth()];
  var dayNum = date.getDate() + getOrdinalString(date.getDate());
  var year = date.getFullYear();

  return `${day}, ${month} ${dayNum}, ${year}`;
}

function getOrdinalString(day) {
  var dayNumStr = day.toString();

  if (day < day > 13) {
    if (dayNumStr[dayNumStr.length - 1] == 1) {
      return "st";
    } else if (dayNumStr[dayNumStr.length - 1] == 2) {
      return "nd";
    } else if (dayNumStr[dayNumStr.length - 1] == 3) {
      return "rd";
    } else {
      return "th";
    }
  } else {
    return "th";
  }
}

function getCurrentTimeString(date) {
  var hour = date.getHours();
  var meridian;

  if (hour > 12) {
    hour -= 12; //convert hour from military time
    meridian = "PM";
  } else {
    meridian = "AM"
  }

  hour = addLeadZero(hour);

  var min = addLeadZero(date.getMinutes());
  var sec = addLeadZero(date.getSeconds().toString());

  return `${hour}:${min}:${sec} ${meridian}`;
}

function addLeadZero(number) {
  return number < 10 ? `0${number}` : number;
}
