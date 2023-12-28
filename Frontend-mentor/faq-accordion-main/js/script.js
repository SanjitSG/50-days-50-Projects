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
