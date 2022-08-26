
import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";


import './login.css';


const Signup = (props) => {

    const[credential, setcredential] = useState({name:"",email:"" , password: "", cpassword: ""});
    
    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
       const {name , email, password, cpassword} = credential;
        
        const response = await fetch(` https://boiling-badlands-40452.herokuapp.com/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({name ,email , password })
        });
        const json = await response.json();
        console.log(json);
        if(json!==0){
          //save the auth token and redirect
           localStorage.setItem("token" , json.authtoken);
           navigate('/');
           props.showAlert(" Account created succesfully ", "success")

        }else{
            props.showAlert("invalid credentials", "danger")
        }
               
    }
    const onChange = (e)=>{
        setcredential({...credential, [e.target.name]: e.target.value})
}


    return (

        <>
            <div>
                <body id="wss">
                    <div className="cont">
                        <div className="ic">
                            <h2 className="log-in">Sign IN</h2>
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="form-inp">
                                <label htmlFor="name" className="label">Name</label>
                                <input className="inp" type="text" value={credential.name} onChange={onChange} id="name" name="name" />
                            </div>
                            <div className="form-inp">
                                <label htmlFor="email" className="label">Email</label>
                                <input className="inp" type="text" value={credential.email} onChange={onChange} id="email" name="email" />
                            </div>
                            <div className="form-inp">
                                <label htmlFor="password" className="label">Password</label>
                                <input className="inp" type="password" value={credential.password} onChange={onChange} id="password" name="password" />
                            </div>
                            <div className="form-inp">
                                <label htmlFor="cpassword" className="label">confirm Password</label>
                                <input className="inp" type="password" value={credential.password} onChange={onChange} id="cpassword" name="cpassword" />
                            </div>
                            <div className="dsb">

                                <div>
                                    <Link to="/login">Already have an account</Link>
                                </div>
                            </div>
                            <div>
                                <button id="btm" type="submit" >Sign up</button>
                            </div>
                        </form>
                        <div className="dsb">
                            <Link to="#">privacy policy</Link>
                            <Link to="#">Terms & condition</Link>
                        </div>
                    </div>
                </body>
            </div>
        </>

    )
}

export default Signup
