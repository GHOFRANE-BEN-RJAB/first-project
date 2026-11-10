const email = "ghofran@gmail.com";
const password = "ghofran123";

var btn = document.getElementById("loginForm");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  var EmailInput = document.getElementById("email").value;
  var PasswordInput = document.getElementById("password").value;
  if (email == EmailInput && password == PasswordInput) {
    alert("Hello Again");
  } else {
    console.log("Error");
  }
});
