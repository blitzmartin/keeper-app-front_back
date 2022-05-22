const express = require('express');
const router = express.Router();
const publicControllers = require('../controllers/publicControllers')

// /home
router.get('/', publicControllers.showNotes);
router.post('/newnote', publicControllers.createNote);
router.post('/deletenote', publicControllers.deleteNote)


module.exports = router;