import EditProjectForm from "./EditProjectForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function ProjectCard({project, onDeleteProject, edited, setEdited, setMenuItem}){
    const {id} = project
    const [toggle, setToggle] = useState(false);
    let navigate = useNavigate()
    
    function handleNavigate(){
      navigate(`/projects/${id}`)
    }
    
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
        }).then(setEdited(project))
        .then(setMenuItem([]))
  
      }


    return(

        <div className = "card" style={{ width: '25rem' }}>

            <div className = "card-body">

            {project.image == "" ? "" : <img className="card-img-top" src={project.image} alt="Card image cap"/>}


                <h5 className="card-title">{project.title  == "null" || null? "" : project.title}</h5>
                {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

                <p class="card-text">{project.description == "null" || null? "" : project.description }</p>
                
                <button className="general-button2" onClick= {handleNavigate == "null" || null? "" : handleNavigate}> View Entries  </button> 
                
                <button className="general-button2" onClick={handleToggle} > {toggle == false? "Edit":"Close"} </button>

                <button className="general-button2" onClick={confirmDelete} > Delete </button>

                {toggle == false? "" : <EditProjectForm id={id} project={project} edited={edited} setEdited={setEdited} setToggle={setToggle}/>}
            </div>
        </div>
    )
}


export default ProjectCard