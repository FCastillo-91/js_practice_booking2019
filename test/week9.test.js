const { sumMultiples, areWeCovered, isValidDNA } = require("../challenges/week9");

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

describe("areWeCovered", () => {

    test("if staff is undefined throws an error", () => {
        expect(() => {
            areWeCovered();
        }).toThrow("staff is required");
    });

    test("if day is undefined throws an error", () => {
        expect(() => {
            areWeCovered([]);
        }).toThrow("day is required");
    });

    test("if staff is not an array throws an error", () => {
        expect(() => {
            areWeCovered(2, '');
        }).toThrow("staff needs to be an array");
    });

    test("if day is not a string throws an error", () => {
        expect(() => {
            areWeCovered([], 5);
        }).toThrow("day needs to be a string");
    });

    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("returns false if there are staff but less than 3 are scheduled to work on a given day", () => {
        const staff = [
            { name: "gary", rota: ["Wedneday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "joe", rota: ["Monday", "Tuesday"] },
            { name: "anna", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });

    test("returns true if there are 3 staff scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Wednesday"] },
            { name: "joe", rota: ["Monday", "Friday"] },
        ];
        expect(areWeCovered(staff, "Monday")).toBe(true);
    });

    test("returns true if there are more than 3 staff scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Tuesday"] },
            { name: "joe", rota: ["Saturday", "Tuesday"] },
            { name: "anna", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });

    test("Is not case sensitive", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Tuesday"] },
            { name: "joe", rota: ["Saturday", "Tuesday"] },
            { name: "anna", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "tueSday")).toBe(true);

        expect(areWeCovered(staff, "monday")).toBe(false);
    });
});