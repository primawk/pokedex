export function commandHelp(commands) {
    console.log(`Welcome to the Pokedex!
Usage:
`);
    for (const command of Object.values(commands)) {
        console.log(`${command.name}: ${command.description}`);
    }
}
