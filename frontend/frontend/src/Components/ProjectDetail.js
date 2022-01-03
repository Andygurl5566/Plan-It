import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import EntryCard from "./EntryCard"
import NewEntryForm from "./NewEntryForm"
import AddPrompt from "./AddPrompt"



function ProjectDetail(){
    const [edited, setEdited] = useState(true)
    const [entryList, setEntries] = useState([])
    const {project_id} = useParams()
    const [toggle, setToggle] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    const [viewmode, setviewmode] = useState(true)
    const [menuItem, setMenuItem] = useState(entryList)

    let navigate = useNavigate()

    const allCategories = ["All", ...new Set(entryList.map(entry => entry.tag))]
    console.log(entryList)
    console.log(menuItem)

    const filter = (button) =>{

        if(button === "All"){
        setMenuItem(entryList)
        return
        }
        const filterdData = entryList.filter(entry => entry.tag === button)
        setMenuItem(filterdData)
    }
 
    function handleNavigate(){
      navigate(`/projects`)
    }

    function handleToggle(){
    
        setToggle(!toggle)
        console.log(toggle)
    }

    function handleViewMode(){
    
        setviewmode(!viewmode)
        console.log(viewmode)
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
                console.log(entryList)               
            })
    }, [edited])


    function handleDeleteEntry(deletedEntry) {
        setEntries((entries) => entries.filter((entries) => entries.id !== deletedEntry.id)
        );
      }

    
    return(
        <>
        <div className="pageheader">
            <h1>Entries</h1>
            <button onClick = {handleToggle} className="general-button-special">  Add Entry </button>
            <button  className="general-button-special" onClick={handleNavigate}> Back </button>
           
           
             
            <img className ="searchicon" src="http://cdn.onlinewebfonts.com/svg/img_330258.png"/>
            <input class ="searchbar" type="text" placeholder=" Search Projects . . ." onChange={event=> {setSearchTerm(event.target.value)}}></input>
        
        <div>
            { allCategories.map((cat, i)=>{
               return <button className="general-button" type="button" onClick={()=> filter(cat)}>{cat}</button>
           })
            }     
           </div>
        </div>

        

            {toggle == true? <NewEntryForm toggle={toggle} setToggle={setToggle} edited={edited} setEdited={setEdited}/> : ""}
        <div className="promptdiv">
            {entryList == "" ? <AddPrompt/>: ""}
        </div>
        <div id="CardsDiv">
        
        {menuItem.filter((entries)=>{
            if (searchTerm == "") {
                return entries
            } else if (entries.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return entries
            }
        }).map((entries) => {
            return (
                <div id="EntryCards">
                   
                    <EntryCard edited={edited} setEdited={setEdited}
                     entries={entries}
                      onDeleteEntries={handleDeleteEntry} 
                      edited = {edited}
                      setEdited={setEdited}
                      setMenuItem={setMenuItem} 
                      menuItem={menuItem} 
                      allCategories={allCategories}  />
                        
                </div>
            )}) 
            }
        </div>

{/* Refactor code below */}

        <div id="CardsDiv">
        
        {menuItem == 0 ? entryList.filter((entries)=>{
            if (searchTerm == "") {
                return entries
            } else if (entries.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return entries
            }
        }).map((entries) => {
            return (
                <div id="EntryCards">
                   
                    <EntryCard edited={edited} setEdited={setEdited} entries={entries} onDeleteEntries={onDeleteEntries} />
                
                </div>
            )}) : ""
            }
        </div>
        </>
    )
}

export default ProjectDetail