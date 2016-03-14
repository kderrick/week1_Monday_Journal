var JournalEntry = require('./journal-entry.js').JournalEntry;
// var wordCount = require('./journal-entry.js').wordCount

var outputTitle = prompt('Please enter a title for your entry');
var outputEntry = prompt('Please enter your entry');
var numberCount = outputEntry.wordCount();

console.log(outputTitle, outputEntry);
console.log(numberCount);
