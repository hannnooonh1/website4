
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");
let getUserName = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (userName.value === "" || password.value === "") {
    alert("Please fill in the form!");
  } else {
    if (
      getUserName &&
      getUserName.trim() === userName.value.trim() &&
      getPassword &&
      getPassword.trim() === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alert("Something went wrong!");
    }
  }
});

