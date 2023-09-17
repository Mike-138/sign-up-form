const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
    const givenPasswords = document.querySelectorAll("input[type='password']");
    console.log(givenPasswords);
});