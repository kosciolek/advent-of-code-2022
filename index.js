const input = require("./input");

const nDistinct = 14;

const map = {};

const last = Array.from({ length: nDistinct }).fill("");
let diff = 0;
let index = 0;

const register = (letter) => {
  const current = last[index];
  map[current] -= 1;
  if (map[current] === 0) diff -= 1;
  map[letter] = (map[letter] ?? 0) + 1;
  if (map[letter] === 1) diff += 1;
  last[index] = letter;
  index = (index + 1) % nDistinct;
};

const letters = input.split("");
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  register(letter);
  if (diff === nDistinct) {
    console.log(i + 1);
    process.exit(0);
  }
}
