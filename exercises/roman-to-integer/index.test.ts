import { romanToInt } from "./index";

test("romanToInt(III) returns 3", () => {
    expect(romanToInt("III")).toBe(3);
});

test("romanToInt(IV) returns 4", () => {
    expect(romanToInt("IV")).toBe(4);
});

test("romanToInt(IX) returns 9", () => {
    expect(romanToInt("IX")).toBe(9);
});

test("romanToInt(LVIII) returns 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
});

test("romanToInt(MCMXCIV) returns 1994", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
});
