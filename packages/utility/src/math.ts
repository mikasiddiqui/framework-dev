export const range = (starting: number, end: number) => {
    return Math.random() * (end - starting) + starting
}

export const round = (value = 0, places = 0) => Math.round(value * Math.pow(10, places)) / Math.pow(10, places)

export const integer = (value: string): number => {
    if ((value || '').trim()) {
        return parseInt((value || '').trim(), 10)
    }

    return NaN
}

/**
 * Calculates the factorial of a given number.
 * @param value - The number to calculate the factorial for.
 * @returns The factorial of the given number.
 */
export const factorial = (value: number): number => {
    if (value === 0) {
        return 1
    } else {
        return value * factorial(value - 1)
    }
}

export const average = (array: number[]) => array.reduce((a, b) => a + b) / array.length
