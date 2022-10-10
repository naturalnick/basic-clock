window.onload = function() {

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  updateClock();

  //update clock every second
  var timer = window.setInterval(function() {
    updateClock();
  }, 1000);

  function updateClock() {
    const newDate = new Date();

    document.getElementsByClassName("time")[0].innerHTML = getCurrentTimeString(newDate);
    document.getElementsByClassName("date")[0].innerHTML = getCurrentDateString(newDate);
  }

  //setup a readable string containing todays date
  function getCurrentDateString(date) {
    var day = dayNames[date.getDay() - 1];
    var month = monthNames[date.getMonth()];
    var dayNum = date.getDate() + getOrdinalString(day);
    var year = date.getFullYear();

    return day + ", " + month + " " + dayNum + ", " + year;
  }

  //return ordinal string based on current day
  function getOrdinalString(day) {
    var ordinal = ["", "st", "nd", "rd", "th"];
    var ordinalNum = 0;
    var dayNumStr = day.toString();

    if (dayNumStr[dayNumStr.length - 1] == 0) {
      ordinalNum = 0;
    } else if (dayNumStr[dayNumStr.length - 1] == 1) {
      ordinalNum = 1;
    } else if (dayNumStr[dayNumStr.length - 1] == 2) {
      ordinalNum = 2;
    } else if (dayNumStr[dayNumStr.length - 1] == 3) {
      ordinalNum = 3;
    } else {
      ordinalNum = 4;
    }

    return ordinal[ordinalNum];
  }

  //set up and return a formatted time string
  function getCurrentTimeString(date) {

    //convert hour from military time
    var hour = date.getHours();
    if (hour > 12) {
      hour -= 12;
    }

    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();
    //add hour, min, sec to array so I can cycle through it with for loop
    var timeArr = [hour.toString(), min, sec];

    for (var i = 0; i < timeArr.length; i++) {
      //if the number is less than 2 digits in length
      if (timeArr[i].length < 2) {
        timeArr[i] = "0" + timeArr[i];
      }
    }

    return timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2];
  }

};
