var now = new Date();
fixDate(now);
/*
cookie expires in one year (actually, 365 days)
365 days in a year
24 hours in a day
60 minutes in an hour
60 seconds in a minute
1000 milliseconds in a second
*/
var visitcounter = document.getElementById('visitcounter');
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
var visits = getCookie("counter");
// if the cookie wasn't found, this is your first visit
if (!visits) {
    visits = 1; // the value for the new cookie
    visitcounter.innerHTML = "Stránka navštívená prvý krát.";
    visitcounter.style.marginTop = "20px";
} else {
    // increment the counter
    visits = parseInt(visits) + 1;
    visitcounter.innerHTML = "Stránka navštívená: " + visits + " krát.";
    visitcounter.style.marginTop = "20px";
}
// set the new cookie
setCookie("counter", visits, now);
// -->