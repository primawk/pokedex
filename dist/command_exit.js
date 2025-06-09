import { exit } from "node:process";
export function commandExit(commands) {
    console.log("Closing the Pokedex... Goodbye!");
    exit(0);
}
