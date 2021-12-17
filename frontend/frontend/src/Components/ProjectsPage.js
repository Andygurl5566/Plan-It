import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import ProjectCard from "./ProjectCard"
import { useNavigate } from "react-router-dom";






function ProjectsPage({currentUser}){

    const [edited, setEdited] = useState(true)
    const [projectList, setProjects] = useState([])
    let navigate = useNavigate()

    function navigateToProjectForm(){
        navigate("/new_project")
    }

    useEffect(() => {
        fetch('/projects')
            .then((r) => r.json())
            .then((projects) => {
               
                setProjects(projects)
                console.log(projects)
            })
    }, [])

    function handleDeleteProject(deletedProject) {
        setProjects((projects) =>
          projects.filter((projects) => projects.id !== deletedProject.id)
        );
      }


    return(
        <>
        <div className="pageheader">
            <h1> {currentUser.name}'s Projects </h1>
            <button onClick={navigateToProjectForm} className="btn btn-primary">New Project</button>
        </div>

        <div id= "CardsDiv">
            {projectList.map((project) => {
                return (
                    <div id="ProjectCards">
                        <ProjectCard  
                         project={project}
                        onDeleteProject={handleDeleteProject}                   
                        />
                    </div>
                )})
            }
            
        </div>
        </>
    )
}

export default ProjectsPage