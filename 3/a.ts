import * as fs from "node:fs";
import * as path from "node:path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const sum = input
  .split("\n")
  .map((line) => {
    const priorities = line.split("").map((letter) => {
      const code = letter.charCodeAt(0);

      return code >= 97 ? code - 96 : code - 38;
    });
    const firstHalf = priorities.slice(0, priorities.length / 2);
    const secondHalf = priorities.slice(priorities.length / 2);
    return { firstHalf, secondHalf };
  })
  .flatMap(({ firstHalf, secondHalf }) => [
    ...new Set(firstHalf.filter((prio) => secondHalf.includes(prio))),
  ])
  .reduce((acc, curr) => acc + curr);

console.log(sum);
