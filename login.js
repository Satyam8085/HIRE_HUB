function toggleForm(type) {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (type === "register") {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  } else {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  }
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

 
  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  alert(`Logged in as -{email}`);
  window.location.href = "index.html"; // Redirect to home/dashboard
}

function register() {
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  alert(`Registered as -{name}`);
  toggleForm("login"); 
}
