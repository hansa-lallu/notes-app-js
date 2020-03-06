(function (exports){
  
  var noteIdCounter = 1 
  
  function Note(text){
    this.text = text
    this.id = noteIdCounter;
    noteIdCounter += 1
  }

  exports.Note = Note;

  Note.prototype.displayNote = function() {
    return this.text;
  };
  
})(this);
