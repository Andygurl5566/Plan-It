import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import ProjectCard from "./ProjectCard"





function ProjectsPage({currentUser}){

    const [edited, setEdited] = useState(true)
    const [projectList, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects')
            .then((r) => r.json())
            .then((projects) => {
               
                setProjects(projects)
                console.log(projects)
            })
    }, [])

    return(
        <>
        <h1 className="pagetitle">{currentUser.name}'s Projects </h1>

        <div id= "CardsDiv">
        {projectList.map((project) => {
            return (
                <div id="ProjectCards">
                    <ProjectCard 
                    
                    project={project} 
                    
                    />
                </div>
            )})
            }
            
        </div>
        </>
    )
}

export default ProjectsPage