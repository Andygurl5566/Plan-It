import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom'
import EntryCard from "./EntryCard"
import NewEntryForm from "./NewEntryForm"



function ProjectDetail(){
    const [edited, setEdited] = useState(true)
    const [entryList, setEntries] = useState([])
    const {project_id} = useParams()
    const [toggle, setToggle] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")

    function handleToggle(){
    
        setToggle(!toggle)
        console.log(toggle)
    }

    function onDeleteEntries(deletedEntries) {
        setEntries((entries) =>
          entries.filter((entries) => entries.id !== deletedEntries.id)
        );
      }

    useEffect(() => {
    
        fetch(`/projects/${project_id}`)
            .then((r) => r.json())
            .then((project) => {
                
                setEntries(project.entries)                
            })
    }, [edited])


    return(
        <>
        <div className="pageheader">

            <h1>Entries</h1>
            <button onClick = {handleToggle} className="btn btn-primary">  Add Entry </button>
            <a  className="btn btn-primary" href="/projects"> Back </a>
            <img className ="searchicon" src="http://cdn.onlinewebfonts.com/svg/img_330258.png"/>
            <input class ="searchbar" type="text" placeholder=" Search Projects . . ." onChange={event=> {setSearchTerm(event.target.value)}}></input>

        </div>

        {toggle == true? <NewEntryForm toggle={toggle} setToggle={setToggle} edited={edited} setEdited={setEdited}/> : ""}

        <div id="CardsDiv">
        
        {entryList.filter((entries)=>{
            if (searchTerm == "") {
                return entries
            } else if (entries.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return entries
            }
        }).map((entries) => {
            return (
                <div id="EntryCards">
                   
                    <EntryCard edited={edited} setEdited={setEdited} entries={entries} onDeleteEntries={onDeleteEntries}/>
                
                </div>
            )})
            }
        </div>
        </>
    )
}



export default ProjectDetail