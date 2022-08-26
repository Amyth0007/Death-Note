import React, { useContext, useState } from 'react'
import notecontext from "../context/notes/notecontext";
import { Link } from 'react-router-dom';
import "./addnote.css"

import "./cardd.css"
const AddNote = (props) => {

    const context = useContext(notecontext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("added succesfully", "success");
    }

    let onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            {/* <div className="conatiner my-3">
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control"  value={note.title}  name='title' id="title" aria-describedby="emailHelp" onChange={onChange}  minLength={4} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">description</label>
                        <input type="text" className="form-control" value={note.description}  name='description' id="description" onChange={onChange}  minLength={4} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">tag</label>
                        <input type="text" className="form-control"  value={note.tag} name='tag' id="tag" onChange={onChange}  minLength={4} required/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleclick} >Add note</button>
                </form>
            </div> */}



            <div className="container">
                <div className="heading">
                    <h2 className="heading__title">your Notes</h2>
                    <p className="heading__credits"><Link className="heading__link" target="_blank" to="https://dribbble.com/sl">Design by Amit the great</Link></p>
                </div>
                <div className="row inpuut-container">
                    <div className="col-xs-12">
                        <div className="styleed-input wide">
                            <input type="text" className='input' value={note.title} name='title' id="title" aria-describedby="emailHelp" onChange={onChange} minLength={4} required />
                            <label>Tilte</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styleed-input wide">
                            <input type="text" className='input' value={note.tag} name='tag' id="tag" onChange={onChange} minLength={4} required />
                            <label>Tag</label>
                        </div>
                    </div>

                    <div className="col-xs-12">
                        <div className="styleed-input wide">
                            <textarea value={note.description} name='description' id="description" onChange={onChange} minLength={4} required></textarea>
                            <label>Description</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        {/* <div className="btn-lrg submit-btn">Add Note</div> */}
                        <button type="submit" className="btn-lrg submit-btn" onClick={handleclick} >Add note</button>
                    </div>
                </div>
            </div>







        </>
    )
}

export default AddNote
