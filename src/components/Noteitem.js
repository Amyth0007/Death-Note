import React, { useContext } from 'react'
import notecontext from "../context/notes/notecontext";
import { Link } from 'react-router-dom';

import "./cardd.css"
const Noteitem = (props) => {
    const context = useContext(notecontext)
    const { deletnote } = context;
    let { note, updateNote } = props;
    return (
        <div>

            {/* <div className="card col-md-3" >
                <div className="card-body">
                    <h5 className="card-title">title: {note.title}</h5>
                    <p className="card-text"> description: {note.description}</p>
                    <p className="card-text"> date: {note.date}</p>
                    <i className="fas fa-trash" onClick={ ()=>{
                        deletnote(note._id); props.showAlert("deleted succesfully", "success")
                    }}></i>
                    <i className="fas fa-edit" onClick={()=>{updateNote(note); props.showAlert("updated succesfully", "success")}}></i>
                    <br/>
                    <Link to="#" className="btn btn-primary">BE better yourself</Link>
                </div>
            </div> */}


            <div className="main-container">
                
                <div className="cards">
                    <div className="card card-1">
                        <div className="card__icon"><i className="fas fa-bolt"></i></div>
                        <p className="card__exit"><i className="fas fa-times"></i></p>
                        <h2 className="card__title">Title: {note.title}</h2>
                        <h4 className="card__title2">Description: {note.description}</h4>
                        <h4 className="card__title3">Tag: {note.tag}</h4>
                        <h5 className="card__title4">date: {note.date}</h5>
                        <p className="card__apply">
                            <Link className="card__link" to="#">Edit <i className="fas fa-edit" onClick={() => { updateNote(note); props.showAlert("updated succesfully", "success") }}></i></Link>
                            <Link className="card__link" to="#"Delet onClick={() => {
                                deletnote(note._id); props.showAlert("deleted succesfully", "success")
                            }}> Delet <i className="fas fa-trash" ></i>
                            </Link>

                        </p>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Noteitem