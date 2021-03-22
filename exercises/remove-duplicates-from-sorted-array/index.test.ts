import { removeDuplicates } from "./index";

test("removeDuplicates([1, 1, 2]) returns 2, [1, 2]", () => {
    const nums = [1, 1, 2];
    const len = removeDuplicates(nums);
    expect(len).toBe(2);
    expect(nums).toEqual([1, 2, expect.anything()]);
});

test(
    "removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) " +
        "returns  5, [0, 1, 2, 3, 4]",
    () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const len = removeDuplicates(nums);
        expect(len).toBe(5);
        expect(nums).toEqual([
            0,
            1,
            2,
            3,
            4,
            expect.anything(),
            expect.anything(),
            expect.anything(),
            expect.anything(),
            expect.anything(),
        ]);
    }
);

test(
    "removeDuplicates([10,10,13,13,15,25,25,32,34,42,42,42]) " +
        "returns  7, [10,13,15,25,32,34,42]",
    () => {
        const nums = [10, 10, 13, 13, 15, 25, 25, 32, 34, 42, 42, 42];
        const len = removeDuplicates(nums);
        expect(len).toBe(7);
        expect(nums[0]).toBe(10);
        expect(nums[1]).toBe(13);
        expect(nums[2]).toBe(15);
        expect(nums[3]).toBe(25);
        expect(nums[4]).toBe(32);
        expect(nums[5]).toBe(34);
        expect(nums[6]).toBe(42);
    }
);
