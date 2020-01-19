const { sumMultiples, areWeCovered, isValidDNA, getComplementaryDNA, isItPrime } = require("../challenges/week9");

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

describe("isValidDNA", () => {
    test("returns true if DNA string includes characters C, G, T or A only", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });

    test("returns true if DNA string includes characters C, G, T or A in any order", () => {
        expect(isValidDNA("AGTC")).toBe(true);

        expect(isValidDNA("GATC")).toBe(true);
    });

    test("return true if string contains characters C, G, T, A in repeated format", () => {
        expect(isValidDNA("AGTCGTCAATGCAGTCAA")).toBe(true);
    });

    test("returns false if string does not include characters C, G, T or A", () => {
        expect(isValidDNA("JBPD")).toBe(false);
    });

    test("returns false if DNA string includes other characters as well as C, G, T or A in any order", () => {
        expect(isValidDNA("PXAGTC")).toBe(false);
    });

    test("not case sensitive", () => {
        expect(isValidDNA("gtca")).toBe(true);

        expect(isValidDNA("gTca")).toBe(true);
    });
});

describe("getComplementaryDNA", () => {

    test("it throws an error if DNA is not valid", () => {
        expect(() => {
            getComplementaryDNA("JPCD");
        }).toThrow("DNA string is not valid");
    });

    test("returns complementary DNA string in base pairs", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");

        expect(getComplementaryDNA("CTGA")).toBe("GACT");
    });

    test("not case sensitive", () => {
        expect(getComplementaryDNA("gtca")).toBe("CAGT");

        expect(getComplementaryDNA("CTaG")).toBe("GATC");
    });
});

describe("isItPrime", () => {
    test("returns true if the number is divisible by 1", () => {
        expect(isItPrime(7)).toBe(true);
    });

    test("returns true if the number is divisible by 1 and divisible by itself", () => {
        expect(isItPrime(13)).toBe(true);
    });

    test("returns false if the number is divisible by other numbers apart from 1 and itself", () => {
        expect(isItPrime(22)).toBe(false);
    });

    test("returns false if the number is a decimal", () => {
        expect(isItPrime(15.2)).toBe(false);
    });

    test("returns false if the number negative", () => {
        expect(isItPrime(-2)).toBe(false);
    });
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