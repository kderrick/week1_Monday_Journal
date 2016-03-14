

$(document).ready(function(){
  $('#journalEntry').submit(function(event){
    event.preventDefault();
    var inputTitle = $('#inputTitle').val();
    var inputEntry = $('#inputEntry').val();
    var countWord = JournalEntry(inputEntry);
    // var date = newEntry.moment().format("MMM Do YY");
      $('#output').append("<li>" + inputTitle + " " + inputEntry + " "   + "Words in entry:" + countWord + "</li>");
    });
  });
