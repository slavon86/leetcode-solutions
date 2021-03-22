export function longestCommonPrefix(strs: string[]): string {
    let result = "";
    if (!strs[0]) {
        return result;
    }
    for (let i = 0; i < strs[0].length; i++) {
        // by characters
        let flag = true;
        for (let j = 1; j < strs.length; j++) {
            // by words
            if (strs[0][i] !== strs[j][i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result = result + strs[0][i];
        } else break;
    }
    return result;
}
