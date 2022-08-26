const express = require('express');
const router = express.Router();
var fetchuser = require('../Middleware/fetchuser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');


// Route 1: get all the notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
     
    const notes = await Note.find({ user: req.user.id });
    res.json(notes)   
    // eslint-disabled-next-line
    } catch (error) {
        
        console.log(error.message);
        res.status(500).send("internal server error");
    }
});
// Route 2: to add a new note using: Post "/api/auth/addnote" . login required
router.post('/addnote', fetchuser, [
    body('title', "Enter the valid title").isLength({ min: 3 }),
body('description', "description must be at least 5 characters").isLength({ min: 5 }),], async (req, res) => 
    {  

        try {
       
            const {title, description ,tag ,} = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
               title , description , tag , user: req.user.id
            })
            const savedNote = await note.save();
            res.json(savedNote)
        } catch (error) {
            
        console.log(error.message);
        res.status(500).send("internal server error");
        }
       
})

// ROUTE 3 update an existing Noteusing POST "/api/auth/updatenote" .login required

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const {title , description , tag} = req.body;
        // create a new note object
        const newNote = {};
        if(title){newNote.title = title};  
        if(description){newNote.description = description};  
        if(tag){newNote.tag = tag};  
    
        // FInd the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if(!note){res.status(404).send("not found")}
    
        if(note.user.toString()!== req.user.id){
            return res.status(401).send("not allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id , {$set: newNote}, {new: true})
        res.json({note});
    
        
    } catch (error) {
            
        console.log(error.message);
        res.status(500).send("internal server error");
        }
    
        
       
})
// ROUTE 4 delete an existing Noteusing delet "/api/notes/deletenote" .login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

   try {
    // create a new note object
   
    // FInd the note to be updated and delete it
    let note = await Note.findById(req.params.id);
    if(!note){res.status(404).send("not found")}

    
    // allow  deletion only if user own this note
    if(note.user.toString()!== req.user.id){
        return res.status(401).send("not allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id )
    res.json({"success" : "note has been deleted"});
    
   } catch (error) {
            
    console.log(error.message);
    res.status(500).send("internal server error");
    }
   
        
       
})


module.exports = router;