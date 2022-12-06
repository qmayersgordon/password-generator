const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const passOneEl = document.getElementById("passOne");
const passTwoEl = document.getElementById("passTwo");
const generateButton = document.getElementById("generate-button");
const copyOneEl = document.getElementById("copy-1");
const copyTwoEl = document.getElementById("copy-2");

generateButton.addEventListener("click", () => {
  passOneEl.innerText = "";
  passTwoEl.innerText = "";
  copyOneEl.innerText = "Copy Text";
  copyTwoEl.innerText = "Copy Text";
  for (let i = 0; i < 15; i++) {
    let randomIndexOne = Math.floor(Math.random() * characters.length);
    let randomIndexTwo = Math.floor(Math.random() * characters.length);
    passOneEl.innerText += characters[randomIndexOne];
    passTwoEl.innerText += characters[randomIndexTwo];
  }
});

copyOneEl.addEventListener("click", () => {
  navigator.clipboard.writeText(passOneEl.innerText);
  copyOneEl.innerText = "Copied";
});

copyTwoEl.addEventListener("click", () => {
  navigator.clipboard.writeText(passTwoEl.innerText);
  copyTwoEl.innerText = "Copied";
});
