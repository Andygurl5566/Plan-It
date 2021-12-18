import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
       <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/profile">Profile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/projects">Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/entries">Entries</a>
  </li>
</ul>
        
        </>
    )
}

export default NavBar