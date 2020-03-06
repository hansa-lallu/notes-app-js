function NoteList() {
  this.storedNotes = []
};

NoteList.prototype = (function() {
  function displayList() {
    return this.storedNotes
  };

  function createNote(note) {
    this.storedNotes.push(new Note(note))
  };
 
  function findNote(id) {
    for (var i=0; i<this.storedNotes.length; i++) {
      if (this.storedNotes[i].id === id) {
        return this.storedNotes[i] 
      }
    }
  }

  return {
    displayList: displayList, 
    createNote: createNote,
    findNote: findNote
  };
})();
