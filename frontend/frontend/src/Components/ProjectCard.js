import EditProjectForm from "./EditProjectForm";
import React, { useState } from "react";
import {Link} from "react-router-dom"

function ProjectCard({project, onDeleteProject, edited, setEdited}){
    const {id} = project
    const [toggle, setToggle] = useState(false);

    function handleToggle(){
    
      setToggle(!toggle)
      console.log(toggle)
  }
    
    function confirmDelete(){
        let result = window.confirm("Are you sure you want to delete this project?")
        if (result) {
            handleDeleteProject()
        }
    }

    function handleDeleteProject() {
        fetch(`/projects/${id}`, {
          method: "DELETE",
        }).then((res) => {
            console.log(res)
          if (res.ok) {
            onDeleteProject(project);
          }
        });
      }


    return(
        <div className = "card" style={{ width: '25rem' }}>
            <div className = "card-body">
                <img className="card-img-top" src={project.image} alt="Card image cap"/>

                <h5 className="card-title">{project.title}</h5>
                {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

                <p class="card-text">{project.details}</p>
                
                <button
                className= "redirect_btn"> 
                <Link className="btn btn-primary" 
                to={`/projects/${id}`}> View Entries </Link>
               
                </button> 
                
                <button onClick={handleToggle} className="btn btn-primary"> {toggle == false? "Edit":"Close"} </button>
                <a href="#" onClick={confirmDelete} className="btn btn-primary">Delete </a>

                {toggle == false? "" : <EditProjectForm id={id} project={project} edited={edited} setEdited={setEdited}/>}
            </div>
        </div>
    )
}


export default ProjectCard