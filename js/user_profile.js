// Display the confirmed reservation from localStorage
let reservation = [];
console.log(reservation);

const confirmedReservation = JSON.parse(localStorage.getItem("reservation"));
const confirmedReservationElement = document.getElementById(
  "confirmed-reservation"
);

reservation.push(
  (confirmedReservationElement.innerHTML = `<p>Your reservation for ${confirmedReservation.date} at ${confirmedReservation.time} has been confirmed.</p>`)
);
