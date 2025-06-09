import { exit } from "node:process";
import { CLICommand } from "./command";

export function commandExit(commands: Record<string, CLICommand>) {
  console.log("Closing the Pokedex... Goodbye!");
  exit(0);
}
