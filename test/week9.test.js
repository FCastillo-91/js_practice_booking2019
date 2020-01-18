const { sumMultiples } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");


        expect(() => {
            sumMultiples("foo");
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples(8);
        }).toThrow("arr is required");

    });

});

test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
});

test("it returns the sum of any numbers that are a multiple of 3 or 5 with decimals", () => {
    const result = sumMultiples([1, 3, 5, 10, 12.0, 4, 9]);
    const expected = 39;
    expect(result).toBe(expected);
});

test("it returns 0 if no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 7, 4, 22])).toBe(0);
});