import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ProjectGenerator from './ProjectGenerator';




function NavBar({handleLogout, currentUser, handleOverlay, overlay, setoverlay}){
  
  
  
  
    return(
        <>
          <nav class="navdiv">
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
              <li className="nav-item">
                  <a className="nav-link" onClick={handleOverlay}>Ideas</a>
              </li>

              <li className="nav-item">
                  {currentUser.message == "Please Log In" ? "" : <a className="nav-link" onClick={handleLogout}>Logout</a>}
              </li>


            </ul>
        </nav>    

        {overlay == false? "": <ProjectGenerator handleOverlay={handleOverlay}
    setoverlay={setoverlay}
    overlay={overlay}/>}
        </>
    )
}

export default NavBar