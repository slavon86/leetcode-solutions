class Node {
    childs: Node[];
    private isRoot: boolean;
    private isReal: boolean;
    private character: string;

    constructor(isRoot: boolean, isReal: boolean, character: string) {
        this.isRoot = isRoot;
        this.isReal = isReal;
        this.character = character;
        this.childs = [];
    }

    getChild(char: string): Node | undefined {
        for (let index = 0; index < this.childs.length; index++) {
            if (this.childs[index].character == char) {
                return this.childs[index];
            }
        }
        return undefined;
    }

    insert(word: string): void {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let currentNode: Node = this;
        for (let i = 0; i < word.length; i++) {
            if (currentNode.getChild(word[i]) === undefined) {
                currentNode.childs.push(new Node(false, false, word[i]));
            }
            currentNode = currentNode.getChild(word[i])!;
            if (i === word.length - 1) {
                currentNode.character = word[i];
                currentNode.isReal = true;
            }
        }
    }

    search(word: string, prefixMode?: boolean): boolean {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let currentNode: Node = this;
        for (let i = 0; i < word.length; i++) {
            if (currentNode.getChild(word[i]) !== undefined) {
                currentNode = currentNode.getChild(word[i])!;
            } else {
                return false;
            }
            if (i === word.length - 1) {
                if (prefixMode === true) {
                    return true;
                }
                return currentNode.isReal !== false;
            }
        }
        return false;
    }
}

export class Trie {
    root: Node;
    constructor() {
        this.root = new Node(true, false, "*");
    }

    insert(word: string): void {
        this.root.insert(word);
    }

    search(word: string): boolean {
        return this.root.search(word);
    }

    startsWith(prefix: string): boolean {
        return this.root.search(prefix, true);
    }
}
