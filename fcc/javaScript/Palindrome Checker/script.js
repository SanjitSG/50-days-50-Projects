const input = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const inputStr = input.value;
  if (inputStr === "") {
    alert("Please input a value");
  } else {
    const reg = /[\W_]/g;
    const string = inputStr.replace(reg, "").toLowerCase();
    console.log(string);
    const revString = string.split("").reverse().join("");

    if (string === revString) {
      result.classList.remove("hidden");
      result.innerText = `${inputStr} is a palindrome.`;
    } else {
      result.classList.remove("hidden");
      result.innerText = `${inputStr} is not a palindrome`;
    }
  }
});
