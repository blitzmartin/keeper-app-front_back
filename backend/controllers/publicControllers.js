const notesModel = require("../models/notesModel");


//  /home
async function showNotes(req, res) {
    try {
      const notes = await notesModel.find({})
      return res.json(notes);
    }
    catch (err) {
      console.log(err)
    }
  };
  

// /home/newnote
async function createNote(req, res, next) {
    try {
      const newNote = await notesModel.create({
        title: req.body.title,
        content: req.body.content
      })
      res.status(200).json({
        title: newNote.title,
        content: newNote.content
      });
    } catch (err) {
      console.log(err);
      next(error);
    }
}

  
// /home/deletenote
const deleteNote = function (req, res) {
    notesModel.findByIdAndRemove({ _id: req.body.noteid })
      .then(data => {
        res.status(200).json(data)
      })
      .catch((err) => console.log(err))
}


module.exports = { showNotes, createNote, deleteNote };
