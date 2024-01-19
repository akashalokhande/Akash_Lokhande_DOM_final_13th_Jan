document.addEventListener("DOMContentLoaded", () => {
  const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  console.log(reservations);
  const reservationList = document.getElementById("reservationList");

  reservations.forEach((reservation) => {
    const listItem = document.createElement("p");
    listItem.textContent = `Your reservation Date: ${reservation.selectedDate} and Time: ${reservation.selectedTime}`;
    reservationList.appendChild(listItem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loaderContainer = document.querySelector(".loader-container");
  const userContainer = document.querySelector(".user-container");
  const userrecvied = localStorage.getItem("userno");

  
  fetch(`https://reqres.in/api/users/${userrecvied}`)
    .then((response) => response.json())
    .then((data) => {
      loaderContainer.style.display = "none";
      userContainer.style.display = "block";

      const avatar = document.querySelector(".avatar");
      const username = document.querySelector(".username");
      const email = document.querySelector(".email");

      avatar.src = data.data.avatar;
      username.textContent = `${data.data.first_name} ${data.data.last_name}`;
      email.textContent = data.data.email;
    })
    .catch((error) => console.error("Error fetching user data:", error));
});
