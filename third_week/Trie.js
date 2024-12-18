class TrieNode {
    constructor() {
        this.children = {};
        this.endOfNode = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(words) {
        let currentNode = this.root;
        for (let char of words) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.endOfNode = true;
    }

    display(node = this.root, prefix = "", words = []) {
        if (node.endOfNode) {
            words.push(prefix);
        }
        for (let char in node.children) {
            this.display(node.children[char], prefix + char, words);
        }
        return words;
    }

    autoComplete(prefix) {
        let currentNode = this.root;

        
        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return []; 
            }
            currentNode = currentNode.children[char];
        }

        return this.display(currentNode, prefix);
    }
}

let trie = new Trie();
trie.insert("brototype");
trie.insert("ballon");
trie.insert("barber");
trie.insert("harber");
trie.insert("brother");
trie.insert("bronze");


let allWords = trie.display();
console.log("All words:", allWords);

let autoCompleteWords = trie.autoComplete("bro");
console.log("Auto-complete for 'bro':", autoCompleteWords);

autoCompleteWords = trie.autoComplete("ba");
console.log("Auto-complete for 'ba':", autoCompleteWords);

autoCompleteWords = trie.autoComplete("m");
console.log("Auto-complete for 'ha':", autoCompleteWords);
