import React from 'react';
import Notecontext from "./notecontext";
import { useState } from "react";
function NoteState(props) {
    const host = " https://boiling-badlands-40452.herokuapp.com"
    const notesinitial = []
    const [notes, setNotes] = useState(notesinitial)

    //get all notes
    const getNotes = async() => {
        //ApI call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('token')

            },
            // body: JSON.stringify({title ,description ,tag}) // body data type must match "Content-Type" header
        });
    const json = await response.json();
    console.log(json);
    setNotes(json);


       

    }
    //Add notes
    const addNote = async(title, description, tag) => {
        // console.log("adding a new note");
        //ApI call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('token')

            },
            body: JSON.stringify({title ,description ,tag})
        });
        const json = await response.json();
        console.log(json);
    
      console.log("adding a new note");

        const note = {
            "_id": "626bb710145badd26f4affassxe1ec",
            "user": "62698f6164e756ab4a62f803",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-04-29T09:59:44.688Z",
            "__v": 0
        };
        setNotes(notes.concat(note));

    }

    // delet note
    const deletnote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('token')

            },
            // body: JSON.stringify({title ,description ,tag})
        });
    const json = await response.json();  
       console.log(json);

        let newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    // edit note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': localStorage.getItem('token')

            },
            body: JSON.stringify({title ,description ,tag})
        });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
            
        }
        setNotes(newNotes);

    }

    return (
        <div>
            <Notecontext.Provider value={{ notes, setNotes, addNote, deletnote, editNote ,getNotes }}>
                {props.children}
            </Notecontext.Provider>
        </div>
    )
}

export default NoteState;