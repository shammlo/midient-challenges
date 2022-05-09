export function getSmallestDivisibleNumber(input: number): number {
    for (let result = input; true; result++) {
        for (let inner = 1; inner <= input; inner++) {
            if (result % inner !== 0) {
                break;
            }
            if (inner === input) {
                return result;
            }
        }
    }
}
export function getSumOfThreeAndFiveMultiples(input: unknown): number {
    const processed = processInput(input);

    let sum = 0;
    for (let i = 1; i < processed; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
function processInput(input: unknown): number {
    const converted = Number(input);

    if (Number.isNaN(converted) || (typeof input !== 'string' && typeof input !== 'number'))
        throw new Error('I expected a number');

    return converted;
}
