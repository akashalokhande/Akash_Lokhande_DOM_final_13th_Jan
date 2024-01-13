const reservationdate = localStorage.getItem("Reservation confirmed date");
const reservationtime = localStorage.getItem("Reservation confirmed time");



document.getElementById("date").innerHTML = reservationdate;
document.getElementById("time").innerHTML = reservationtime;
