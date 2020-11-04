export function roll(dice: number) {
    const min = 1;
    const max = Math.floor(dice);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}