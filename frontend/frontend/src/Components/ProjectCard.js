import EditProjectForm from "./EditProjectForm";
import React, { useState } from "react";

function ProjectCard({project, onDeleteProject, edited, setEdited, setMenuItem,allCategories}){
    const {id} = project
    const [toggle, setToggle] = useState(false);
    const [update, setupdate] = useState(false);

    
    function handleUpdate(){
    
      setupdate(!update)
    

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
            {/* <button onClick={confirmDelete} className="deletebtn"> X </button> */}

            {project.image == "" ? "" : <img className="card-img-top" src={project.image} alt="Card image cap"/>}


                <h5 className="card-title">{project.title  == "null" || null? "" : project.title}</h5>
                {/* 🔴🟠🟡🟢🔵🟣🟤⚫⚪ */}

                <p class="card-text">{project.description == "null" || null? "" : project.description }</p>
                
                <a className="btn btn-primary" href={`/projects/${id}` == "null" || null? "" : `/projects/${id}`}> View Entries  </a> 
                
                <button onClick={handleToggle} className="btn btn-primary"> {toggle == false? "Edit":"Close"} </button>

                <button onClick={confirmDelete} className="btn btn-primary"> Delete </button>

                {toggle == false? "" : <EditProjectForm id={id} project={project} edited={edited} setEdited={setEdited}/>}
            </div>
        </div>
    )
}


export default ProjectCard