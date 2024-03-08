
      document.addEventListener("DOMContentLoaded", () => {
        const menuContainer = document.getElementById("menu-container");

        // Fetch data from Mockaroo API
        fetch("https://my.api.mockaroo.com/users.json?key=4fd54060")
          .then((response) => response.json())
          .then((menuItems) => {
            menuItems.menu.forEach((item) => {
              document.querySelector('.loader-wrapper').style.display = 'none'+
              9
              const menuItemDiv = document.createElement("div");
              menuItemDiv.className = "menu-item";
              menuItemDiv.innerHTML = `
              <h2>${item.dish_name}</h2>
              <img src="${item.image}" alt="" style="width: 300px;height: 200px;">
              <p>${item.description}</p>
              <p>Price: ₹${item.price.toFixed(0)*80}</p>
              <p>${item.category}</p>
            `;
              menuContainer.appendChild(menuItemDiv);
            });
          })
          .catch((error) => console.error("Error fetching menu data:", error));
      });
   