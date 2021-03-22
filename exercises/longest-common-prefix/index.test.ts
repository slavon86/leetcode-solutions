import { longestCommonPrefix } from "./index";

test(`longestCommonPrefix(["flower", "flow", "flight"]) returns "fl"`, () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
});

test(`longestCommonPrefix(["dog", "racecar", "car"]) returns ""`, () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
});

test(`longestCommonPrefix(["oppose", "opponent", "opportune"]) returns "oppo"`, () => {
    expect(longestCommonPrefix(["oppose", "opponent", "opportune"])).toEqual(
        "oppo"
    );
});
