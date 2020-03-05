function SingleNoteView(singleNote){
  this.singleNote = singleNote
}

SingleNoteView.prototype = (function() {

  function displaySingleNote() {
    return "<div>" + this.singleNote.displayNote() + "</div>"
    
    }
    return {
      displaySingleNote
    }
  })();