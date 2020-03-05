describe("Note list view", () => {

  var noteList = new NoteList();
  noteList.createNote('Favourite food: pesto pizza')
  var noteListView = new NoteListView(noteList);

    it('instantiates with a note list', () => {
    expect(noteListView.noteList).toBeInstanceOf(NoteList)
    })

    it('returns list of items in html tags', () => {
    expect(noteListView.displayNoteView()).toBe('<ul><li><div>Favourite food: pest</div></li></ul>')
  })

    it('limits characters of note to 20', () => {
      expect(noteListView.displayNoteView()).toBe('<ul><li><div>Favourite food: pest</div></li></ul>')
    })
});