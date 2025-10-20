const admin = {
  email: "admin@example.com",
  password: "123456",
  role: "admin",
};

const user = {
  email: "user@example.com",
  password: "123456",
  role: "user",
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("errorBox");

  if (email === admin.email && password === admin.password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", admin.role);
    window.location.href = "admin.html";
  } else if (email === user.email && password === user.password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", user.role);
    window.location.href = "home.html";
  } else {
    errorBox.textContent = "Email hoặc mật khẩu không đúng!";
    errorBox.style.display = "block";
  }
});
