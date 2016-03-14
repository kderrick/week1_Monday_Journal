function JournalEntry(inputTitle, inputEntry) {
  this.inputTitle = inputTitle;
  this.inputEntry = inputEntry;
}

// function WordCount() {
//   return inputEntry.split(" ").length;
// }

JournalEntry.prototype.wordCount = function() {
  return this.inputEntry.split(" ").length;
}


$(document).ready(function(){
  $('#journalEntry').submit(function(event){
    event.preventDefault();
    var inputTitle = $('#inputTitle').val();
    var inputEntry = $('#inputEntry').val();
    var newEntry =  new JournalEntry(inputTitle, inputEntry);
    var countWord = newEntry.wordCount();
    // var date = newEntry.moment().format("MMM Do YY");
      $('#output').append("<li>" + newEntry.inputTitle + " " + newEntry.inputEntry + " " + countWord + "</li>");
    });
  });
