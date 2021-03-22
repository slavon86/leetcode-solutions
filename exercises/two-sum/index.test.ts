import { twoSum } from "./index";

test("twoSum([2,7,11,15],  9) returns [0, 1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("twoSum([2,7,11,15],  26) returns [2, 3]", () => {
    expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3]);
});

test("twoSum([2,7,11,15],  17) returns [0, 3]", () => {
    expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3]);
});

test("twoSum([1,2,5,8,10],  7) returns [1, 2]", () => {
    expect(twoSum([1, 2, 5, 8, 10], 7)).toEqual([1, 2]);
});

test("twoSum([1,2,5,8,10],  11) returns [0, 4]", () => {
    expect(twoSum([1, 2, 5, 8, 10], 11)).toEqual([0, 4]);
});

test("twoSum([1,2,5,8,10],  3) returns [0, 1]", () => {
    expect(twoSum([1, 2, 5, 8, 10], 3)).toEqual([0, 1]);
});
