import React, { useContext, useEffect, useRef , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import notecontext from "../context/notes/notecontext";
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes = (props) => {
  const context = useContext(notecontext);
  let navigate = useNavigate();

  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();

    }else{
      navigate("/login")
    }
    
    //eslint-disabled-next-line

  }, [])

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note , setNote] = useState({id: "",etitle: "", edescription: "" , etag: ""})
 
  const updateNote = (currentNote) => {
   ref.current.click();
   setNote({id: currentNote._id, etitle: currentNote.title , edescription: currentNote.description , etag:currentNote.tag})
    
  }
  
  const handleclick = (e)=>{
    console.log("editing notes" , notes);  
    editNote(note.id , note.etitle , note.edescription, note.etag);
    refClose.current.click();
      // e.preventDefault();
    }

    let onChange = (e)=>{
            setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
      <AddNote showAlert={props.showAlert} />


      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
            <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="etitle" className="form-label">Title</label>
                        <input type="text" className="form-control" name='etitle' id="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange}  minLength={4} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edescription" className="form-label">description</label>
                        <input type="text" className="form-control" name='edescription' id="edescription" value={note.edescription} onChange={onChange} minLength={4} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="etag" className="form-label">tag</label>
                        <input type="text" className="form-control" name='etag' id="etag" value={note.etag} onChange={onChange}  minLength={4} required/>
                    </div>
                   
                </form>


            </div>
            <div class="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleclick} type="button" className="btn btn-primary" >Update note</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        <h1>Your Notes</h1>
        <div className="container">
        {notes.length===0 &&   "there is nothing you have added or may be you delet it"}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}  />
        })}
      </div>
    </>
  )
}

export default Notes