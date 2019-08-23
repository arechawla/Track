var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";



function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    saveButton.onclick = sendEvent;
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

var sum = sessionStorage.getItem('activity');
var d = new Date();
var now = d.toISOString();
var todayDate = now.substring(0,11);
stopT = document.getElementById('stopWatch');
stopTime = stopT.textContent || stopT.innerText;
console.log(stopTime);
stopHours = Number(stopTime.substring(0,2));
stopMinutes = Number(stopTime.substring(3,5));
stopSeconds = Number(stopTime.substring(6,8));

startHours = d.getHours() - stopHours;
startMinutes = d.getMinutes() - stopMinutes;
startSeconds = d.getSeconds() - stopSeconds;

if (startHours < 10) {
    startHours = "0" + startHours;
}
if (startMinutes < 10) {
    startMinutes = "0" + startMinutes;
}

if (startSeconds < 10) {
    startSeconds = "0" + startSeconds;
}

startTime = todayDate + startHours + ":" + startMinutes + ":" + startSeconds;

var event = {
    'summary': sum,
    'location': '',
    'description': 'Added via Track.',
    'start': {
    'dateTime': startTime,
    'timeZone': 'America/New_York'
    },
    'end': {
        'dateTime': d,
        'timeZone': 'America/New_York'
    }
};

function sendEvent() {

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });

    request.execute(function(event) {
        console.log(startTime);
       appendPre('Event created: ' + event.htmlLink);
     });
}
