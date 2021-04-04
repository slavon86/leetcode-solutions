import { Trie } from "./index";

describe("Implement prefix-tree", () => {
    let trie: Trie;

    beforeEach(() => {
        trie = new Trie();
        trie.insert("apple");
    });
    test('Check for search with the word "apple"', () => {
        expect(trie.search("app")).toBe(false);
        expect(trie.search("appl")).toBe(false);
        expect(trie.search("apple")).toBe(true);
        expect(trie.search("apples")).toBe(false);
        expect(trie.search("a")).toBe(false);
        expect(trie.search("orange")).toBe(false);
    });
    test('Check for startsWith with the word "app"', () => {
        expect(trie.startsWith("app")).toBe(true);
        expect(trie.startsWith("a")).toBe(true);
        expect(trie.startsWith("ap")).toBe(true);
        expect(trie.startsWith("apples")).toBe(false);
        expect(trie.startsWith("oranges")).toBe(false);
        expect(trie.startsWith("apple")).toBe(true);
    });

    describe('When inserts word "app":', () => {
        beforeEach(() => {
            trie.insert("app");
        });
        test('Check for search with the word "app"', () => {
            expect(trie.search("app")).toBe(true);
            expect(trie.search("ap")).toBe(false);
            expect(trie.search("a")).toBe(false);
            expect(trie.search("apple")).toBe(true);
            expect(trie.search("oranges")).toBe(false);
        });
    });
    describe('When inserts word "addition":', () => {
        beforeEach(() => {
            trie.insert("addition");
        });
        test('Check for search with the word "addition"', () => {
            expect(trie.search("app")).toBe(false);
            expect(trie.search("addition")).toBe(true);
            expect(trie.search("a")).toBe(false);
            expect(trie.search("apple")).toBe(true);
            expect(trie.search("oranges")).toBe(false);
        });
    });
});
