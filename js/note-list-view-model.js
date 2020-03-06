function NoteListView(noteList) {
  this.noteList = noteList
}

NoteListView.prototype = (function() {
  function displayNoteView() {
    var note = '';
    for(let i = 0; i < this.noteList.displayList().length; i++) {
      thisNote = this.noteList.displayList()[i]
      note += `<li><a href='#${thisNote.id}'>` + thisNote.displayNote().substring(0,20) + '</a></li>'
    }
    return '<ul>' + note + '</ul>'
  }
  return {
    displayNoteView: displayNoteView
  }
})();