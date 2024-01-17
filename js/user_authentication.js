async function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    });

    const data = await response.json();
    let signupmsg = document.getElementById("result");

    if (response.ok) {
      signupmsg.style.color = "green";
      signupmsg.textContent = "signup successful!";
      window.location.href = 'login.html'
      
    } else {
      signupmsg.style.color = "red";
      signupmsg.textContent = "Please enter valid email";
    }
  } catch (error) {
    console.error("Error during signup:", error);
  }
}

async function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    });

    const data = await response.json();

    let loginmsg = document.getElementById("result");
    if (response.ok) {
      loginmsg.style.color = "green";
      loginmsg.textContent = "Login successful!";
      window.location.href = 'menu.html'
    } else {
      loginmsg.style.color = "red";
      loginmsg.textContent = "invalid credentials!";
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}
