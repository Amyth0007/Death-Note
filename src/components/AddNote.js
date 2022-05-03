import React, { useContext, useState } from 'react'
import notecontext from "../context/notes/notecontext";
import './contact.css';

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
                        <input type="text" className="form-control" value={note.title} name='title' id="title" aria-describedby="emailHelp" onChange={onChange} minLength={4} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">description</label>
                        <input type="text" className="form-control" value={note.description} name='description' id="description" onChange={onChange} minLength={4} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">tag</label>
                        <input type="text" className="form-control" value={note.tag} name='tag' id="tag" onChange={onChange} minLength={4} required />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleclick} >Add note</button>
                </form>
            </div>

 */}

            
                <div className="container">
                             <h1 className='text1'>Here you can add your personal notes</h1>
                    <form id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <label htmlFor="title" className="form-label">Title</label>
                                    {/* <input type="text" className="form-control" name="name" id="name"  /> */}
                                    <input type="text" className="form-control" value={note.title} placeholder="Title" name='title' id="title" aria-describedby="emailHelp" onChange={onChange} minLength={4} required />

                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                <input type="text" className="form-control" value={note.tag} name='tag' id="tag" onChange={onChange} minLength={4} placeholder ="Tag" required />
                                </div>
                            </div>
                           
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea  className="form-control"  cols="30" rows="8" placeholder="Message" value={note.description} name='description' id="description" onChange={onChange} minLength={4} required ></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    {/* <input type="submit" value="Send Message" className="btn btn-primary" /> */}
                                    <button type="submit" className="btn btn-primary" onClick={handleclick} >Add note</button>
                                    <div className="submitting"></div>
                                </div>
                            </div>
                        </div>
                    </form>



                </div>
            




        </>
    )
}

export default AddNote
