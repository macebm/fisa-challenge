export default function stringCalc(str) {
    return sum(str.split(",").map(Number));

}

export const sum = (numbers) => numbers.reduce((a, b) => a + b);