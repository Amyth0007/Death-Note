// import React  from 'react'


// const Login = () => {
//   return (
//     <>
//     <div className='formm'>
//     <form >
//   <div className="form-outline mb-4">
//     <input type="email" id="form1Example1" className="form-control" />
//     <label className="form-label" for="form1Example1">Email address</label>
//   </div>

//   <div className="form-outline mb-4">
//     <input type="password" id="form1Example2" className="form-control" />
//     <label className="form-label" for="form1Example2">Password</label>
//   </div>

//   <div className="row mb-4">
//     <div className="col d-flex justify-content-center">
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
//         <label className="form-check-label" for="form1Example3"> Remember me </label>
//       </div>
//     </div>

//     <div className="col">
//       <Link to="#!">Forgot password?</Link>
//     </div>
//   </div>

//   <button type="submit" className="btn btn-primary btn-block">Sign in</button>
// </form>
// </div>
//     </>
//   )
// }

// export default Login



// ________________________________________________________________

import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";


import './login.css';

const Login = (props) => {
  
    const[credential, setcredential] = useState({email:"" , password: ""});
    
    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        fetch();
        const response = await fetch(` https://boiling-badlands-40452.herokuapp.com/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({email : credential.email , password: credential.password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
          //save the auth token and redirect
           localStorage.setItem("token" , json.authtoken);
           navigate('/');
           props.showAlert(" Account created succesfully ", "success")
           
           
        }else{
            props.showAlert(" ERROR 404", "danger")
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
            <h2 className="log-in">Log in</h2>
        </div>
        <div className="ic">
            <p>Dont have an Account -signup first</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="form-inp">
                <label htmlFor="email" className="label">Email</label>
                <input  className="inp" type="text" value={credential.email} onChange={onChange} id="email" name="email" />
            </div>
            <div className="form-inp">
                <label htmlFor="password" className="label">Password</label>
                <input className="inp" type="password" value={credential.password} onChange={onChange} id="password" name="password"/>
            </div>
            <div className="dsb">
                
                <div>
                    <Link to="#">Forget password</Link>
                </div>
            </div>
            <div>
                <button id="btm" type="submit" >Log in</button>
            </div>
        </form>
        <div className="dsb">
            <Link to="#">privacy policy</Link>
            <Link to="/signup">Signup</Link>
        </div>
    </div>
</body>
    </div>
    </>
  )
}

export default Login
