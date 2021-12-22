import {useEffect, useState} from "react"
import ProjectCard from "./ProjectCard"
import { useNavigate } from "react-router-dom";
import AddPromptProject from "./AddPromptProject";




function ProjectsPage({currentUser}){

    const [edited, setEdited] = useState(true)
    const [projectList, setProjects] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [menuItem, setMenuItem] = useState(projectList)
    const [buttons, setButtons] = useState([])
     let navigate = useNavigate()
    const allCategories = ["All", ...new Set(projectList.map(project => project.tag))]
    console.log(allCategories)


      const filter =(button) =>{

        if(button === "All"){
            setProjects(projectList)
           
        }
          const filterdData = projectList.filter(project => project.tag === button)
          setMenuItem(filterdData)
      }
 console.log(menuItem)

   

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

    console.log(projectList)

    

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
           <input className ="searchbar" type="text" placeholder=" Search Projects . . ." onChange={event=> {setSearchTerm(event.target.value)}}></input>
           <div>
        </div>
       

       {
           allCategories.map((cat, i)=>{
               return <button type="button" onClick={()=> filter(cat)}>{cat}</button>
           })
       }

 
              
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