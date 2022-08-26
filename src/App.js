import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alerts from './components/Alerts';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
function App() {

  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 3500);
}
  return (
    <>
    <NoteState>
           <Router>
             
        <Navbar />
        <Alerts alert={alert} message = "amit is good boy"/>
      <div className='container'>
        <Routes>
          <Route path="/" element = {<Home showAlert={showAlert} />}>
            
          </Route>
          <Route exact path="/about" element={ <About />}>
           
          </Route>
          <Route exact path="/login" element={ <Login showAlert={showAlert}/>}>
           
          </Route>
         
          <Route exact path="/signup" element={ <Signup showAlert={showAlert}/>}>
           
          </Route>

        </Routes>
      </div>
      </Router>
      </NoteState>
 
    </>
  );
}

export default App;
