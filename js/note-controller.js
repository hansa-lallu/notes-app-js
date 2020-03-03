function NoteController(noteList = new NoteList()) {
this.noteList = noteList
this.noteList.createNote('Favourite drink: seltzer')
this.noteListView = new NoteListView(this.noteList)

}

NoteController.prototype = (function() {
  
  function insertHTML() {
    return document.getElementById('app').innerHTML = this.noteListView.displayNoteView();
  };
  
  return {
    insertHTML: insertHTML
  }

})();