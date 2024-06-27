
document
  .querySelector(".change-sign-up")
  .addEventListener("click", function () {

    // Toggle hiển thị của phần tử có class "sign-in" và "sign-up"
    var signInElement = document.querySelector(".form-container.sign-in");
    var signUpElement = document.querySelector(".form-container.sign-up");
    var introduceSignIn = document.querySelector(".introduce.sign-in");
    var introduceSignUp = document.querySelector(".introduce.sign-up");

    //form-container sign-in
    signInElement.style.display = "none";
    //form-container sign-up
    signUpElement.style.display = "block";
    //introduce sign-in
    introduceSignIn.style.display = "none";
    //introduce sign-up
    introduceSignUp.style.display = "block";
  });

document
  .querySelector(".change-sign-in")
  .addEventListener("click", function () {

    // Toggle hiển thị của phần tử có class "sign-in" và "sign-up"
    var signInElement = document.querySelector(".form-container.sign-in");
    var signUpElement = document.querySelector(".form-container.sign-up");
    var introduceSignIn = document.querySelector(".introduce.sign-in");
    var introduceSignUp = document.querySelector(".introduce.sign-up");

    //form-container sign-in
    signInElement.style.display = "block";
    //form-container sign-up
    signUpElement.style.display = "none";
    //introduce sign-in
    introduceSignIn.style.display = "block";
    //introduce sign-up
    introduceSignUp.style.display = "none";
  });
