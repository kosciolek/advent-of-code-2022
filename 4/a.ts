import * as fs from "node:fs";
import * as path from "node:path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const assignments = input.split("\n").map((line) =>
  line.split(",").map((elf) => {
    const delimiter = elf.indexOf("-");
    const start = elf.slice(0, delimiter);
    const end = elf.slice(delimiter + 1);
    return { start: Number(start), end: Number(end) };
  })
);

const out = assignments.filter(([elfA, elfB]) => {
  const aInB = elfA.start >= elfB.start && elfA.end <= elfB.end;
  const bInA = elfB.start >= elfA.start && elfB.end <= elfA.end;
  return aInB || bInA;
}).length;

console.log(out);
