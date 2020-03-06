describe ("note controller", function() {

  // noteController = new NoteController(new NoteList);

  it ("can take a note list as a parameter", function() {
    expect(noteController.noteList).toBeInstanceOf(NoteList)
  })

  it("adds a note to the note list", function() {
    thisNote = noteController.noteList.storedNotes[0]
    noteController.insertHTML();
    expect(document.getElementById('app').innerHTML).toBe(`<ul><li><a href="#${thisNote.id}">Favourite drink: sel</a></li></ul>`)
  })

  it("adds more than one note to the view", function() {
    note1 = noteController.noteList.storedNotes[0]
    noteController.noteList.createNote("Buy some milk Ziad!")
    note2 = noteController.noteList.storedNotes[1]
    noteController.insertHTML();
    expect(document.getElementById('app').innerHTML).toBe(`<ul><li><a href="#${note1.id}">Favourite drink: sel</a></li><li><a href="#${note2.id}">Buy some milk Ziad!</a></li></ul>`)
  })
});
