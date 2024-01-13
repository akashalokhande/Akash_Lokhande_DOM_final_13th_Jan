function checkAvailability() {
  const selectedDate = document.getElementById("date").value;
  const selectedTime = document.getElementById("time").value;

  // Simulating availability check, replace this with your logic
  const isAvailable = Math.random() < 0.5; // Random availability for demonstration

  const messageElement = document.getElementById("availability-message");
  messageElement.textContent = isAvailable
    ? "Reservation available!"
    : "Reservation not available.";
  messageElement.style.color = isAvailable ? "green" : "red";
}

function confirmReservation() {
  const selectedDate = document.getElementById("date").value;
  const selectedTime = document.getElementById("time").value;

  // Simulating reservation storage, replace this with your logic


  localStorage.setItem("Reservation confirmed date",selectedDate)
  localStorage.setItem("Reservation confirmed time",selectedTime)

  window.location.assign("User-profile.html");

  updateReservationList();
}

function updateReservationList() {
  const userReservationsElement = document.getElementById("user-reservations");
  userReservationsElement.innerHTML = "<h3>Reservations:</h3>";

  if (reservations.length === 0) {
    userReservationsElement.innerHTML += "<p>No reservations yet.</p>";
  } else {
    reservations.forEach((reservation) => {
      userReservationsElement.innerHTML += `<p>Date: ${reservation.date}, Time: ${reservation.time}</p>`;
    });
  }
}
