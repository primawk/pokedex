import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function cleanInput(input) {
    return input.split(" ").filter((item) => item.trim() !== "");
}
export function getCommands() {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
    };
}
export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    const commands = getCommands();
    rl.on("line", (input) => {
        if (input === commands.exit.name) {
            commands.exit.callback(commands);
        }
        else if (input === commands.help.name) {
            commands.help.callback(commands);
        }
        else {
            console.log("Unknown Command");
        }
        rl.prompt();
    });
}
