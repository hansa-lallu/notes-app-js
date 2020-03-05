describe ('single note view', function(){

  it("Can take a note and return the etxt within as HTML", function(){
    note = new Note("Lets do this");
    singleNoteView = new SingleNoteView(note);

    expect(singleNoteView.displaySingleNote()).toBe("<div>Lets do this</div>")
  })
});