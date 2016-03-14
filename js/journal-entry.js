exports.function JournalEntry(inputTitle, inputEntry) {
  this.inputTitle = inputTitle;
  this.inputEntry = inputEntry;
}

// function WordCount() {
//   return inputEntry.split(" ").length;
// }

JournalEntry.prototype.wordCount = function() {
  return this.inputEntry.split(" ").length;
}
