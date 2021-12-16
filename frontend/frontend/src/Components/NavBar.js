import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
       <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/profile">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/projects">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Entries</a>
  </li>
  {/* <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li> */}
</ul>
        
        </>
    )
}

export default NavBar