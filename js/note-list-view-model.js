function NoteListView(noteList) {
  this.noteList = noteList
}

NoteListView.prototype = (function() {
  function displayNoteView() {
    var note = '';
    for(let i = 0; i < this.noteList.displayList().length; i++) {
      note += '<li><div>' + this.noteList.displayList()[i].displayNote().substring(0,20) + '</div></li>'
    }
    return '<ul>' + note + '</ul>'
  }
  return {
    displayNoteView: displayNoteView
  }
})();