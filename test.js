document
  .querySelector(".change-sign-up")
  .addEventListener("click", function () {
    var signInElement = document.querySelector(".form-container.sign-in");
    var signUpElement = document.querySelector(".form-container.sign-up");
    var introduceSignIn = document.querySelector(".introduce.sign-in");
    var introduceSignUp = document.querySelector(".introduce.sign-up");

    // Xóa animation cũ (nếu có)
    introduceSignIn.classList.remove("animation-turnleft");
    introduceSignUp.classList.remove("animation-turnright");

    // Thêm animation
    introduceSignIn.classList.add("animation-turnleft");
    introduceSignUp.classList.add("animation-turnright");

    // Đợi animation kết thúc rồi mới ẩn và hiện các phần tử
    introduceSignIn.addEventListener(
      "animationend",
      function () {
        signInElement.style.display = "none";
        introduceSignIn.style.display = "none";
      },
      { once: true }
    );

    introduceSignUp.addEventListener("animationend", function () {
      signUpElement.style.display = "block";
      introduceSignUp.style.display = "block";
    });
  });

document
  .querySelector(".change-sign-in")
  .addEventListener("click", function () {
    var signInElement = document.querySelector(".form-container.sign-in");
    var signUpElement = document.querySelector(".form-container.sign-up");
    var introduceSignIn = document.querySelector(".introduce.sign-in");
    var introduceSignUp = document.querySelector(".introduce.sign-up");

    // Xóa animation cũ (nếu có)
    introduceSignIn.classList.remove("animation-turnleft");
    introduceSignUp.classList.remove("animation-turnright");

    // Thêm animation
    introduceSignIn.classList.add("animation-turnleft");
    introduceSignUp.classList.add("animation-turnright");

    // Đợi animation kết thúc rồi mới ẩn và hiện các phần tử
    introduceSignUp.addEventListener(
      "animationend",
      function () {
        signUpElement.style.display = "none";
        introduceSignUp.style.display = "none";
      },
      { once: true }
    );

    introduceSignIn.addEventListener("animationend", function () {
      signInElement.style.display = "block";
      introduceSignIn.style.display = "block";
    });
  });
/*tại sao lại lỗi mất class khi bấm nút
hay nói cách khác là nút sau khi chuyển tab lại không hoạt động */
