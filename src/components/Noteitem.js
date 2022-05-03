import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import notecontext from "../context/notes/notecontext";


const Noteitem = (props) => {
    const context = useContext(notecontext)
    const { deletnote } = context;
    let { note, updateNote } = props;
    return (
        <div>

            {/* <div className="card col-md-3" >
                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash" onClick={() => {
                        deletnote(note._id); props.showAlert("deleted succesfully", "success")
                    }}></i>
                    <i className="fas fa-edit" onClick={() => { updateNote(note); props.showAlert("updated succesfully", "success") }}></i>
                    <br />
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div> */}


            <div className="card text-center border mb-3">
                <h3 className="card-header">Title: {note.title}</h3>
                <div className="card-body">
                    <h5 class="card-title">About: {note.description}</h5>
                    <i className="fas fa-trash" onClick={() => {
                        deletnote(note._id); props.showAlert("deleted succesfully", "success")
                    }}></i>
                    <i className="fas fa-edit" onClick={() => { updateNote(note); props.showAlert("updated succesfully", "success") }}></i>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                <div className="card-footer text-muted">Date: {note.date}</div>
            </div>
        </div>
    )
}

export default Noteitem