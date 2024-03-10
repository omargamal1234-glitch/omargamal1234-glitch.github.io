const btn = document.getElementById("btn1");
const input = document.getElementById("input");
const result = document.getElementById("result");

let realResult = Math.random() * 25;
let realresult2 = Math.round(realResult); // the actual result

const display = () => {
  btn.addEventListener("click", () => {
    const inputValue = input.value;

    // Check for invalid input using regular expression (optional)
    if (!/^\d+$/.test(inputValue)) {
      result.textContent = "ERROR! Please enter a number between 0 and 25";
      return; // Exit the function if input is invalid
    }

    const inputNumber = Number(inputValue);

    if (inputNumber === realresult2) {
      result.textContent = `Correct: the real number is ${realresult2}`;
    } else if (inputNumber > 25) {
      result.textContent = `ERROR! Please enter a number below or equal to 25`;
    } else {
      result.textContent = `Wrong! : the correct number was ${realresult2}`;
    }

    // Schedule page refresh after 1.15 seconds using setTimeout
    setTimeout(() => {
      window.location.reload();
    }, 1150); // 3000 milliseconds is 1.15 seconds
  });
};

console.log(realresult2);
display();