const selectInput = document.querySelector("input");
const selectBtn = document.querySelector("button");
const errorText = document.querySelector(".error-text");

selectBtn.addEventListener("click", function() {
    if(
        selectInput.value.includes("@") != true ||
        selectInput.value.includes(".") != true ||
        selectInput.value == "" 
      ) {
        errorText.style.display = "block";
        errorText.innerHTML = "Please enter a valid e-mail";
        selectInput.style.borderColor = "hsl(354, 100%, 66%)";
      } else selectInput.submit();
});

selectInput.addEventListener("click", function () {
    errorText.style.display = "none";
});

selectInput.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });