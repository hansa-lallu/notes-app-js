describe("Note list", () => {

  noteList = new NoteList();
  
  it("creates an empty array", () => {
    expect(Array.isArray(noteList.displayList())).toBe(true);
  });

  it("store a note", () => {
    var note1 = noteList.createNote('This is a note'); // new Note
    expect(noteList.displayList()[0]).toBeInstanceOf(Note); // to be an instance of note
  });

  describe("find note", () => {
    it('finds note by id', () => {
      noteList.createNote('This is a note 2')
      noteList.createNote('This is a note 3')
      var note = noteList.storedNotes[1]
      expect(noteList.findNote(noteList.storedNotes[1].id)).toBe(note);
    });
  });
});