import React , {useEffect} from 'react' ;

import { Link , useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate  = useNavigate(); 
    let handlelogout =()=>{
      localStorage.removeItem('token');
      navigate('/login')
    }
  let location = useLocation();
  

  return (
    // <!-- Navbar -->
    <>
<nav className="navbar navbar-expand-lg navbar-blue bg-light">
  
  <div className="container">
    <Link className="navbar-brand me-2" to="/">
      {/* <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="16"
        alt="MDB Logo"
        loading="lazy"
        style="margin-top: -1px;"
      /> */}
      DeathNote
    </Link>
  

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/" ? "active" :""}`} to="/">Home</Link>
        </li>
          <Link className={`nav-link ${location.pathname==="/about" ? "active" :""}`} to ="/about">About</Link>
      </ul>

      {!localStorage.getItem('token')? <div className="d-flex align-items-center">
        <Link type="button" className="btn btn-secondary btn-rounded px-3 me-2" role="button" to= "/login" >
          Login
        </Link>
        <Link type="button" className="btn btn-danger btn-rounded px-3 me-2" role="button" to= "/signup" >
          signup
        </Link>
        <Link
          className="btn btn-dark px-3"
          to="https://github.com/Amyth0007"
          role="button"
          ><i className="fab fa-github"></i
        ></Link>
      </div>:         <Link type="button" className="btn btn-danger btn-rounded px-3 me-2" role="button" to= "/login" onClick={handlelogout}>
          logout
        </Link>
 }
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar