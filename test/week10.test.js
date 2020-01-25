const { sumDigits, createRange, getScreentimeAlertList, hexToRGB } = require("../challenges/week10");

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

        expect(() => {
            sumDigits("1a1");
        }).toThrow("int is required");
    });

    test("returns the sum of all the digits of any given number", () => {
        expect(sumDigits(123)).toBe(6);
    });

    test("returns the sum of all the digits of any given number", () => {
        expect(sumDigits(1239837263045)).toBe(53);
    });

    test("returns the same number when there is only 1 digit", () => {
        expect(sumDigits(4)).toBe(4);
    });

});

describe("createRange", () => {
    test("throws an error if start is undefined", () => {
        expect(() => {
            createRange(undefined, 40, 9);
        }).toThrow("start is required");
    });

    test("throws an error if start is not a number", () => {
        expect(() => {
            createRange("three", 40, 9);
        }).toThrow("start number is required");

        expect(() => {
            createRange(null, 40, 9);
        }).toThrow("start number is required");
    });

    test("throws an error if end is undefined", () => {
        expect(() => {
            createRange(10, undefined, 9);
        }).toThrow("end is required");

    });
    test("throws an error if end is not a number", () => {
        expect(() => {
            createRange(10, "two", 9);
        }).toThrow("end number is required");
    });

    test("throws an error if step >=0", () => {
        expect(() => {
            createRange(10, 20, 0);
        }).toThrow("step must be greater than 0");

        expect(() => {
            createRange(10, -20, -5);
        }).toThrow("step must be greater than 0");
    });

    test("throws an error if step is not an integer", () => {
        expect(() => {
            createRange(17.2, 19.1, 0.2);
        }).toThrow("step must be a whole number");
    });

    test("throws an error if step sequence is not possible within range paramters", () => {
        expect(() => {
            createRange(10, 6, 2);
        }).toThrow("end number must be greater than start number");
    });

    test("throws an error if step sequence is not possible within range paramters", () => {
            expect(() => {
                createRange(1, 2, 5);
            }).toThrow("step must be greater than the gap between end and start");
    });

    test("if only two parameters are provided assume step is 1", () => {
        expect(createRange(7, 13)).toEqual([7, 8, 9, 10, 11, 12, 13]);

        expect(createRange(-9, 7)).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);
    });

    test("returns an array sequence of numbers according to the step sequence with start, end and step parameters", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);

        expect(createRange(7, 67, 10)).toEqual([7, 17, 27, 37, 47, 57, 67]);

    });

    test("returns an array sequence of numbers even if start or end includes decimals", () => {
        expect(createRange(7.1, 67, 10)).toEqual([7.1, 17.1, 27.1, 37.1, 47.1, 57.1]);

        expect(createRange(5, 8.7, 2)).toEqual([5, 7]);
    });

    test("returns an array sequence of numbers according to the step sequence stopping before the end range if necessary (start, end, step", () => {
        expect(createRange(2, 13, 2)).toEqual([2, 4, 6, 8, 10, 12]);

        expect(createRange(0, 15, 2)).toEqual([0, 2, 4, 6, 8, 10, 12, 14]);

    });

    test("returns sequence array when start number is negative", () => {
        expect(createRange(-10, 25, 5)).toEqual([-10, -5, 0, 5, 10, 15, 20, 25]);

    });
});

describe("getScreentimeAlertList", () => {
    test("throws an Error if passed something apart from a date", () => {
        const users = [
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
            },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
            },
        ];
        expect(() => {
        getScreentimeAlertList(users, 20);
    }).toThrow("date type required");
    });

    test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
            },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });

    test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
            },
            {
                username: "janet_34",
                name: "Janet Baker",
                screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                ]
                },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "janet_34"]);
    });

    test("returns an empty array if there were no users who used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
            },
            {
                username: "janet_34",
                name: "Janet Baker",
                screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                ]
                },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-07-04")).toEqual([]);
    });

    test("returns an empty array if there were users who used 100 minutes of screentime for a given date", () => {
        const users = [
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            ]
            },
            {
                username: "janet_34",
                name: "Janet Baker",
                screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 0, instagram: 50, facebook: 50} },
                ]
                },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual([]);
    });

    describe("hexToRGB", () => {
        test("throws an error if passed undefined parameter", () => {
            expect(() => {
                hexToRGB();
            }).toThrow("hexStr is required");

            expect(() => {
                hexToRGB(23);
            }).toThrow("String is required");
        });

        test("returns RGB colour code when passed hexidecimal colour code", () => {
            expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");

            expect(hexToRGB("#00bfff")).toBe("rgb(0,191,255)");
        });

        test("returns the RGB colour code when passed the hexidecimal code without the # included", () => {
            expect(hexToRGB("00bfff")).toBe("rgb(0,191,255)");
        })
    });
});
