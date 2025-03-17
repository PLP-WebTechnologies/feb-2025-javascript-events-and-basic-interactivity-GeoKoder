const colorBtn = document.getElementById("colorChangeBtn");
const form = document.getElementById("userForm");

const messageBtn = document.getElementById("toggleMessageBtn");

colorBtn.addEventListener("click", function () {
  colorBtn.style.backgroundColor = "red";
  colorBtn.style.color = "black";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill the form fields");
  } else {
    alert("Form submitted successfully");
  }
});

messageBtn.addEventListener("click", function () {
  const message = document.getElementById("hiddenMessage");
  message.classList.toggle("hidden");
});
