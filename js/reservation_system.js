function checkAvailability() {
  const messageElement = document.getElementById("availability-message");
  const confirmBtnContainer = document.getElementById("confirm-btn-container");
  const isAvailable = Math.random() < 0.5;

  if (isAvailable) {
    messageElement.textContent = "Reservation is available!";
    confirmBtnContainer.innerHTML =
      '<button onclick="confirmReservation()">Confirm Reservation</button>';
    confirmBtnContainer.style.display = "block";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent =
      "Sorry, this time is not available. Please choose another.";
    confirmBtnContainer.style.display = "none";
    messageElement.style.color = "red";
  }
}

function confirmReservation() {
  const selectedDate = document.getElementById("date").value;
  const selectedTime = document.getElementById("time").value;

  if (selectedDate !== "" && selectedTime !== "") {
    const reservation = { selectedDate, selectedTime };
    const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
    reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));

    window.location.href = "User-profile.html";
  } else {
    const validation = document.getElementById("availability-message");
    validation.textContent = "Please fill Empty field";
    validation.style.color = "red";
  }
}
