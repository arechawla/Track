hours = 0;
minutes = 0;
seconds = 0;
var sInt;

function stopWatch() {
    sInt = setInterval(
        function time() {

            if (seconds >= 60) {
                minutes++;
                seconds = 0;
                if (minutes >= 60) {
                    hours++;
                    minutes = 0;
                }
            }   else {
                    seconds++;
                }


            if (hours.toString().length < 2) {
                hours = "0" + hours;
            }

            if (minutes.toString().length < 2) {
                minutes = "0" + minutes;
            }

            if (seconds.toString().length < 2) {
                seconds = "0" + seconds;
            }

            var formatTime = hours + ":" + minutes + ":" + seconds;
            document.getElementById('stopWatch').innerHTML = formatTime

        }, 1000);
    }

    function stop() {
        clearInterval(sInt);
    }

    function reset() {
        minutes = 0;
        hours = 0;
        seconds = 0;
        var formatTime = "00:00:00";
        document.getElementById('stopWatch').innerHTML = formatTime
        stop();
    }
