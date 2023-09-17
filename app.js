const submitButton = document.querySelector("button");

let givenPassword = document.querySelector("#password");
let givenPasswordConfirm = document.querySelector("#confirm-pass");

function callPasswordError(password, passwordConfirm) {
    password.value = "";
    passwordConfirm.value = "";
    password.classList.add("error");
    password.parentElement.classList.add("error-message");
    passwordConfirm.classList.add("error");
}

givenPassword.addEventListener("keypress", () => {
    if (givenPassword.classList.contains("error")) {
        givenPassword.classList.remove("error");
        givenPassword.parentElement.classList.remove("error-message");
        givenPasswordConfirm.classList.remove("error");
    }
})

submitButton.addEventListener("click", () => {
    givenPassword = document.querySelector("#password");
    givenPasswordConfirm = document.querySelector("#confirm-pass");
    if (givenPassword.value !== givenPasswordConfirm.value) {
        callPasswordError(givenPassword, givenPasswordConfirm);
    }
});