const inputEl = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const output = document.getElementById("result");

function checkPalinDrome(str) {
  const arrayStr = str.split("");
  while (arrayStr.length > 0) {
  if (arrayStr[0] === arrayStr[arrayStr.length - 1]) {
    arrayStr.splice(0, 1);
    arrayStr.splice(arrayStr.length-1, 1);
    console.log(arrayStr.length);
  } else { break; }
}

if (arrayStr.length === 1 || arrayStr.length === 0) {
  return true;
} else { return false; }

}

function cleanInput(str) {
  const regex = /[^a-zA-Z0-9]/g;
  return str.replace(regex, '');
}

function checkInput() {
  if (!inputEl.value) {
    alert("Please input a value");
  } else {
    // LOGIC GOES HERE
    const inputStr = cleanInput(inputEl.value);
    const finalStr = inputStr.toLowerCase();
    if (checkPalinDrome(finalStr)) { output.innerText = `${inputEl.value} is a palindrome`; } else { output.innerText = `${inputEl.value} is not a palindrome`; }
  }
}

checkButton.addEventListener("click", checkInput);