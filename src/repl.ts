import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

export function cleanInput(input: string): string[] {
  return input.split(" ").filter((item) => item.trim() !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (input: string) => {
    if (cleanInput(input).length > 0)
      console.log(
        `Your command was: ${cleanInput(input)[0].toLocaleLowerCase()}`
      );
    rl.prompt();
  });
}
