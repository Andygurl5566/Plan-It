import {useEffect, useState} from "react"
import ProjectCard from "./ProjectCard"
import { useNavigate } from "react-router-dom";
import AddPromptProject from "./AddPromptProject";



function ProjectsPage({currentUser}){

    const [edited, setEdited] = useState(true)
    const [projectList, setProjects] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [searchtag, setSearchTag] = useState("")

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

      const onlyUnique = (array) => (
          array.filter((currentValue, index, arr) =>(
              arr.indexOf(currentValue) == index
          ))
      )

     console.log(projectList) 
        
      
    //   console.log(onlyUnique(project.tag))

    return(
        <>
        <h1 className="cardpagetitle"> {currentUser.name}'s Projects </h1>
        <div className="pageheader">
           
            <div className="binding">
            <button onClick={navigateToProjectForm} className="btn btn-primary">New Project</button>
            <img className ="searchicon" src="http://cdn.onlinewebfonts.com/svg/img_330258.png"/>
           <input className ="searchbar" type="text" placeholder=" Search Projects . . ." onChange={event=> {setSearchTerm(event.target.value)}}></input>
           <select className ="filter">
            
               {projectList.map((project)=>{
                   return(
                   <option value="">{project.title}</option>)
               })}
           </select>  
        </div>
        </div>

        <div className="promptdiv">
            {projectList == "" ? <AddPromptProject  navigateToProjectForm={navigateToProjectForm}/>: ""}
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