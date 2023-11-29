// Form Element Query Selectors
const signUpForm = document.querySelector("#signupForm");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorMessageDiv = document.querySelector(".password-error-message");

// Event listener for form submission
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

// Event listeners for password mismatch
confirmPassword.addEventListener("blur", (e) => {
    e.preventDefault();
    checkInputs();
});

password.addEventListener("blur", (e) => {
        e.preventDefault();
        if (confirmPassword.value !== "") {
            checkInputs();
        }
    }
);

// Function to check inputs
function checkInputs() {
    // Get the values from the inputs
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // Check if the passwords match - if they don't, set visibility of error to visible
    if (passwordValue !== confirmPasswordValue) {
        errorMessageDiv.style.visibility = "visible";
        //   add the error border to the inputs
        password.classList.add("error");
        confirmPassword.classList.add("error");
    } else {
        errorMessageDiv.style.visibility = "hidden";
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
    }
}

