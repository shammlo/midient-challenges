import { getSmallestDivisibleNumber, getSumOfThreeAndFiveMultiples } from '..';

describe('getSmallestDivisibleNumber', () => {
    test('give 3, return 6', () => {
        const result = getSmallestDivisibleNumber(3);

        expect(result).toBe(6);
    });

    test('give 4, return 12', () => {
        const result = getSmallestDivisibleNumber(4);

        expect(result).toBe(12);
    });

    test('give, 5, return 60', () => {
        const result = getSmallestDivisibleNumber(5);

        expect(result).toBe(60);
    });

    test('given 6, return 60', () => {
        const result = getSmallestDivisibleNumber(6);

        expect(result).toBe(60);
    });

    test('given 10 as input, return 2520', () => {
        const result = getSmallestDivisibleNumber(10);

        expect(result).toBe(2520);
    });

    test('can process large numbers', () => {
        getSmallestDivisibleNumber(18);
    });
});

describe('getSumOfThreeAndFiveMultiples', () => {
    test('give 10, should return 23', () => {
        const result = getSumOfThreeAndFiveMultiples(10);

        expect(result).toBe(23);
    });

    test('give 20, should return 78', () => {
        const result = getSumOfThreeAndFiveMultiples(20);

        expect(result).toBe(78);
    });

    // test('if input string throw error', () => {
    //     try {
    //         getSumOfThreeAndFiveMultiples('20');
    //         fail('should throw error');
    //     } catch (error: any) {
    //         expect(error.toString()).toMatch('I expected a number');
    //     }
    // });

    test('does not throw error if string is convertible to a number', () => {
        expect(getSumOfThreeAndFiveMultiples('10')).toBe(23);
    });

    test('throws error if input is not convertible to a number', () => {
        expect(() => getSumOfThreeAndFiveMultiples('ten')).toThrow();
        expect(() => getSumOfThreeAndFiveMultiples({})).toThrow();
        expect(() => getSumOfThreeAndFiveMultiples([])).toThrow();
        expect(() => getSumOfThreeAndFiveMultiples(false)).toThrow();
        expect(() => getSumOfThreeAndFiveMultiples(true)).toThrow();
        expect(() => getSumOfThreeAndFiveMultiples(undefined)).toThrow();
        expect(() => getSumOfThreeAndFiveMultiples(null)).toThrow();
    });
});
