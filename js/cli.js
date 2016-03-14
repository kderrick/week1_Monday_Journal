var JournalEntry = require('./journal-entry.js').JournalEntry;
var prompt = require('prompt');
var moment = require ('moment');
prompt.start();

prompt.get('userInput', function(err, results) {
  var result = JournalEntry(results.userInput);
  console.log(result)
});
