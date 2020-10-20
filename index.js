const natural = require('natural');
const tokenizer = new natural.WordTokenizer();


// tokenization
console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

