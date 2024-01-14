// Replace these with actual API endpoints
const signupEndpoint = "http://localhost:5001/signup";
const loginEndpoint = "http://localhost:5001/login";

// Signup function
function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  console.log(username, password);
  // Make a POST request to the signup API endpoint
  // Handle the response accordingly (e.g., show a success message, redirect, etc.)
  // Implement error handling
  // Example using Fetch API:
  fetch(signupEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error)

      }else{
        alert(data.message)
      }

      // Handle success
    })
    .catch((error) => {
      console.error("Error during signup:", error);
      // Handle error
    });
}

// Login function
function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Make a POST request to the login API endpoint
  // Handle the response accordingly (e.g., store tokens, redirect, etc.)
  // Implement error handling
  // Example using Fetch API:
  fetch(loginEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
        if (data.error) {
            alert(data.error)
    
          }else{
            // alert(data.message)
            window.location.assign("menu.html")
          }
      // Handle success (e.g., store tokens in localStorage)
    })
    .catch((error) => {
      console.error("Error during login:", error);
      // Handle error
    });
}
