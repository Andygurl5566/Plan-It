import {useEffect, useState} from "react"
import ProjectCard from "./ProjectCard"
import { useNavigate } from "react-router-dom";



function ProjectsPage({currentUser}){

    const [edited, setEdited] = useState(true)
    const [projectList, setProjects] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    let navigate = useNavigate()

    function navigateToProjectForm(){
        navigate("/new_project")
    }

    useEffect(() => {
        fetch('/projects')
            .then((r) => r.json())
            .then((projects) => {  

                setProjects(projects)
              
            })
    }, [edited])

    function handleDeleteProject(deletedProject) {
        setProjects((projects) =>
          projects.filter((projects) => projects.id !== deletedProject.id)
        );
      }


    return(
        <>
        <h1 className="cardpagetitle"> {currentUser.name}'s Projects </h1>
        <div className="pageheader">
           
            <div className="binding">
            <button onClick={navigateToProjectForm} className="btn btn-primary">New Project</button>
            <img className ="searchicon" src="http://cdn.onlinewebfonts.com/svg/img_330258.png"/>
           <input class ="searchbar" type="text" placeholder=" Search Projects . . ." onChange={event=> {setSearchTerm(event.target.value)}}></input>
           </div>
        <div>
            </div>
        </div>

        <div id= "CardsDiv">
            {projectList.filter((project)=>{
                if (searchTerm == "") {
                    return project
                } else if (project.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return project
                }

            }).map((project) => {
                return (
                    <div id="ProjectCards">
                        <ProjectCard  
                         project={project}
                        onDeleteProject={handleDeleteProject}  
                        edited = {edited}
                        setEdited={setEdited}                 
                        />
                    </div>
                )})
            }
            
        </div>
        </>
    )
}

export default ProjectsPage