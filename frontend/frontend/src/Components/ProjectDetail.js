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

            <h1>your Entries</h1>
            <button onClick = {handleToggle} className="btn btn-primary">  Add Entry </button>
            <a  className="btn btn-primary" href="/projects"> Back </a>

        </div>

        {toggle == true? <NewEntryForm toggle={toggle} setToggle={setToggle} edited={edited} setEdited={setEdited}/> : ""}

        <div id="CardsDiv">
        
        {entryList.map((entries) => {
            return (
                <div>
                   
                    <EntryCard edited={edited} setEdited={setEdited} entries={entries} onDeleteEntries={onDeleteEntries}/>
                
                </div>
            )})
            }
        </div>
        </>
    )
}



export default ProjectDetail