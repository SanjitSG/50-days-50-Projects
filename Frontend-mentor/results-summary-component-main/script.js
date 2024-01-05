const scoreCard = document.querySelector(".score-card");

document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        createComponent(element);
      });
    })
    .catch((error) => console.log(error));

  function createComponent(data) {
    let componentDiv = document.createElement("div");

    componentDiv.innerHTML = `<div class="score-container" id="${data.category}">
      <div class="icon__"><img src="${data.icon}" />
      <span>${data.category}</span></div>
      <div>
      <span class="score-span"><span id="mark">${data.score}</span> /100</span>
      </div></div>`;

    scoreCard.appendChild(componentDiv);
  }
});
