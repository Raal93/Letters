const input = document.querySelector("input");
const btn = document.querySelector("button");
const letter = document.querySelector("#letter");
const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const table = document.querySelector("tbody");
const uniqueChars = document.querySelector("#uniqueChars");
const totalChars = document.querySelector("#totalChars");

let letters = {};
let sortedByLetterAscending = true;
let sortedByAmountAscending = false;

const addLetters = () => {
  letters = {};
  for (let i = 0; i < input.value.length; i++) {
    for (let b = 0; b <= Object.keys(letters).length; b++) {
      if (input.value[i] !== Object.keys(letters)[b]) {
        letters[input.value[i]] = 0;
      }
    }
  }
  for (let b = 0; b <= Object.keys(letters).length; b++) {
    for (let i = 0; i < input.value.length; i++) {
      if (input.value[i] === Object.keys(letters)[b]) {
        letters[Object.keys(letters)[b]] += 1;
      }
    }
  }

  table.innerHTML = "";
  const input_length = input.value.length;

  const keySort = Object.keys(letters).sort((a, b) => letters[b] - letters[a]);

  for (let i = 0; i < Object.keys(letters).length; i++) {
    const name = keySort[i];
    const interest = (letters[name] / input_length) * 100;
    table.insertAdjacentHTML("beforeend", `<tr><td>${name}</td> <td>${letters[name]}</td> <td>${interest.toFixed(1)}%</td></tr>`);
  }

  uniqueChars.innerHTML = "";
  uniqueChars.insertAdjacentHTML("beforeend", `Unique characters: ${Object.keys(letters).length}`);
  uniqueChars.style.display = "block";

  totalChars.innerHTML = "";
  totalChars.insertAdjacentHTML("beforeend", `Total characters: ${input_length}`);
  totalChars.style.display = "block";
};

const sortByLetter = () => {
  table.innerHTML = "";
  const input_length = input.value.length;

  const keySort = Object.keys(letters);
  if (sortedByLetterAscending) {
    keySort.sort();
  } else {
    keySort.sort().reverse();
  }
  sortedByLetterAscending = !sortedByLetterAscending;

  for (let i = 0; i < Object.keys(letters).length; i++) {
    const name = keySort[i];
    const interest = (letters[name] / input_length) * 100;
    table.insertAdjacentHTML("beforeend", `<tr><td>${name}</td> <td>${letters[name]}</td> <td>${interest.toFixed(1)}%</td></tr>`);
  }
};
const sortByAmount = () => {
  table.innerHTML = "";
  const input_length = input.value.length;

  const keySort = Object.keys(letters);
  if (sortedByAmountAscending) {
    keySort.sort((a, b) => letters[b] - letters[a]);
  } else {
    keySort.sort((a, b) => letters[a] - letters[b]);
  }
  sortedByAmountAscending = !sortedByAmountAscending;

  for (let i = 0; i < Object.keys(letters).length; i++) {
    const name = keySort[i];
    const interest = (letters[name] / input_length) * 100;
    table.insertAdjacentHTML("beforeend", `<tr><td>${name}</td> <td>${letters[name]}</td> <td>${interest.toFixed(1)}%</td></tr>`);
  }
};

btn.addEventListener("click", addLetters);
letter.addEventListener("click", sortByLetter);
amount.addEventListener("click", sortByAmount);
interest.addEventListener("click", sortByAmount);
