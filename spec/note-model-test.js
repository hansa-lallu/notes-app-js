
describe("Note", () => {

  it("takes a note", () => {
    var note = new Note("My favourite language is javascript!");
    expect(note.displayNote()).toBe("My favourite language is javascript!");
  });


describe("Gives a note an id", () => {
  it("is instantiated with an id", () => {
    var note = new Note("My favourite language is javascript");
    expect(note.id).NotToBe(null)
    })
  });

  it("note id is unique", () => {
    var note1 = new Note("My favourite language is javascript");
    var note2 = new Note("My favourite language is Spanish");
    expect(note1.id).NotToBe(note2.id)
  })
});