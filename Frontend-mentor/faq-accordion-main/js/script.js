const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

for (let element of plus) {
  element.addEventListener("click", () => {
    element.classList.toggle("hidden");

    const minusImg = element.nextElementSibling;
    minusImg.classList.toggle("hidden");

    const parentElement = element.parentElement;

    parentElement.nextElementSibling.classList.toggle("opened");
    console.log(parentElement.nextElementSibling.classList);
  });
}

for (let element of minus) {
  element.addEventListener("click", () => {
    element.classList.toggle("hidden");

    const plusImg = element.previousElementSibling;
    plusImg.classList.toggle("hidden");

    const parentElement = element.parentElement;
    parentElement.nextElementSibling.classList.toggle("opened");
  });
}

// keyboard navigation
const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((questionContainer) => {
  questionContainer.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "ArrowDown") {
      const nextQuestion = questionContainer.nextElementSibling.nextElementSibling.nextElementSibling;

      if (nextQuestion) {
        nextQuestion.focus();
      }
    } else if (event.key === "ArrowUp") {
      const previousQuestion = questionContainer.previousElementSibling.previousElementSibling.previousElementSibling;
      if (previousQuestion) {
        previousQuestion.focus();
      }
    } else if (event.key === "Enter") {
      questionContainer.querySelector(".plus").click();
    }
  });
});
