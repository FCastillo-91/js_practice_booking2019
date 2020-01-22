const { sumDigits, createRange } = require("../challenges/week10");

describe("sumDigits", () => {
    test("it throws an error if not passed an int", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        expect(() => {
            sumDigits("foo");
        }).toThrow("int is required");

        expect(() => {
            sumDigits(123.56);
        }).toThrow("int is required");

        expect(() => {
            sumDigits("12345");
        }).toThrow("int is required");
    });

    test("returns the sum of all the digits of any given number", () => {
        expect(sumDigits(123)).toBe(6);
    });

    test("returns the sum of all the digits of any given number", () => {
        expect(sumDigits(1239837263045)).toBe(53);
    });
});

describe("createRange", () => {
    // test("throws an error if start is undefined", () => {
    //     expect(() => {
    //         createRange("", 7, 9);
    //     }).toThrow("start is required");
    // });

    test("returns an array sequence of numbers according to the step sequence where parameters (start, end, step", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5 , 7, 9, 11]);
    });

    test("returns an array sequence of numbers according to the step sequence where parameters (start, end, step", () => {
        expect(createRange(7, 67, 10)).toEqual([7, 17, 27, 37, 47, 57, 67]);

        expect(createRange(2, 13, 2)).toEqual([2, 4, 6, 8, 10, 12]);
    });

    test("returns sequence array when number is negative", () => {
        expect(createRange(-10, 25, 5)).toEqual([-10, -5, 0, 5, 10, 15, 20, 25]);
    });

    test("if only two parameters are provided assume step is 1", () => {
        expect(createRange(7, 13)).toEqual([7, 8, 9, 10, 11, 12, 13]);
    });
});

