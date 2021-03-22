export function removeDuplicates(nums: number[]): number {
    let m = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[m - 1]) {
            nums[m] = nums[i];
            m++;
        }
    }
    return m;
}
