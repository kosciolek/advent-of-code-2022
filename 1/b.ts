import * as fs from "node:fs";
import * as path from "node:path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const sums = input
  .split("\n\n")
  .map((elf) =>
    elf
      .split("\n")
      .map((cal) => parseInt(cal, 10))
      .reduce((acc, curr) => acc + curr)
  )
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, curr) => acc + curr);

console.log(sums);
