const natural = require('natural');
const tokenizer = new natural.WordTokenizer();


/* Tokenization

Tokenization is the process of demarcating and possibly classifying sections of a string of input characters. The resulting tokens are then passed on to some other form of processing. The process can be considered a sub-task of parsing input.

For example, in the text string: The quick brown fox jumps over the lazy dog

The string isn’t implicitly segmented on spaces, as a natural language speaker would do. The raw input, the 43 characters, must be explicitly split into the 9 tokens with a given space delimiter (i.e., matching the string " " or regular expression /\s{1}/).
*/

console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

/*
Stemming
Stemming refers to the reduction of words to their word stem (also known as base or root form).
*/

natural.PorterStemmer.attach();
console.log("I can see that we are going to be friends".tokenizeAndStem());

/*
Hamming distance measures the distance between two strings of equal length by counting the number of different characters.
*/

console.log(natural.HammingDistance("karolin", "kathrin", false));
console.log(natural.HammingDistance("karolin", "kerstin", false));
console.log(natural.HammingDistance("short string", "longer string", false));


/*
Text classification also known as text tagging is the process of classifying text into organized groups. That is, if we have a new unknown statement, our processing system can decide which category it fits in the most based on its content.

*/

var classifier = new natural.BayesClassifier();
classifier.addDocument("i am long qqqq", "buy");
classifier.addDocument("buy the q's", "buy");
classifier.addDocument("short gold", "sell");
classifier.addDocument("sell gold", "sell");
classifier.train();

console.log(classifier.classify("i am short silver"));
console.log(classifier.classify("i am long copper"));
