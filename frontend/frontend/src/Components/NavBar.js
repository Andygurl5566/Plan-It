import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ProjectGenerator from './ProjectGenerator';
import { useNavigate } from "react-router-dom";






function NavBar({handleLogout, online, handleOverlay, overlay, setoverlay}){
  
  let navigate = useNavigate()


  function navEntries(){
    navigate("/entries")
  }

  function navProject(){
    navigate("/projects")
  }
  function navProfile(){
    navigate("/profile")
  }
  function navHome(){
    navigate("/")
  }
  
    return(
        <>
          <nav class="navdiv">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={navProfile}>Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={navProject}>Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={navEntries} >Entries</a>
              </li>
              <li className="nav-item">
                 {online == false ? "" : <a className="nav-link" onClick={handleOverlay}>Ideas</a>}
              </li>

              <li className="nav-item">
                  {online == false ? "" : <a className="nav-link" onClick={handleLogout}>Logout</a>} 
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