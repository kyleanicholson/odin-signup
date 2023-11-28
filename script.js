// Validate password and confirm-password match
function validatePassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    console.log("Passwords do not match.");
    return false;
  } else {
    return true;
  }
}

console.log(validatePassword());
