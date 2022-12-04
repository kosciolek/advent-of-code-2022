import * as fs from "node:fs";
import * as path from "node:path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const lines = input.split("\n");

const groups: string[][] = [];

for (let i = 0; i < lines.length; i++) {
  if (i % 3 === 0) groups.push([]);
  groups[groups.length - 1].push(lines[i]);
}

const getBadge = ([first, second, third]: string[]) =>
  first
    .split("")
    .find((letter) => second.includes(letter) && third.includes(letter))!;

const out = groups
  .map((group) => getBadge(group))
  .map((letter) => {
    const code = letter.charCodeAt(0);
    return code >= 97 ? code - 96 : code - 38;
  })
  .reduce((acc, curr) => acc + curr);

console.log(out);
