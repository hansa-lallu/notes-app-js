function NoteController(noteList) {
  this.noteList = noteList
  this.noteList.createNote("Favourite drink: seltzer")
  this.noteListView = new NoteListView(this.noteList)
}

NoteController.prototype = (function() {
  function insertHTML() {
    document.getElementById('app').innerHTML = this.noteListView.displayNoteView()
  }

  function loadNote() {
    window.addEventListener("hashchange", showTextofSelectedNote);
  }

  function showTextofSelectedNote() {
    showText(getNoteFromURL(window.location))
  }

  function getNoteFromURL(location) {
    var id = parseInt(location.hash.split("#")[1])

    return this.noteList.findNote(id)
  }

  function showText(note) {

    singleNoteView = new SingleNoteView(note)

    document.getElementById('note').innerHTML = singleNoteView.displaySingleNote()
  }

  return {
    insertHTML: insertHTML,
    loadNote: loadNote,
    showText: showText
  }
})();

noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.insertHTML();
noteController.loadNote();

