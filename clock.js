function runTime() {
  setInterval(
    function getCurTime() {
      var d = new Date();
      hours = d.getHours();
      minutes = d.getMinutes();
      seconds = d.getSeconds();

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      var formatTime = hours + ":" + minutes + ":" + seconds;
      document.getElementById('curTime').innerHTML = formatTime
      console.log("hours: " + hours + " m: " + minutes + " s: " + seconds)
    },
  1000)
}
