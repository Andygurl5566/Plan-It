import {useEffect, useState} from "react"
import EntryCard from "./EntryCard"
import { useNavigate } from "react-router-dom";


function EntryPage({currentUser}){

    const [edited, setEdited] = useState(true)
    const [entryList, setEntries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    let navigate = useNavigate()

    function navigateToEntryForm(){
        navigate("/new_entry")
    }

    useEffect(() => {
        fetch('/entries')
            .then((r) => r.json())
            .then((entries) => {
               
                setEntries(entries)
                console.log(entries)
            })
    }, [edited])

    function handleDeleteEntry(deletedEntry) {
        setEntries((entries) =>
          entries.filter((entries) => entries.id !== deletedEntry.id)
        );
      }

    return(
        <>
        <div className="pageheader">
           
            <h1 className="pagetitle">All Entries </h1>
            <img className ="searchicon" src="http://cdn.onlinewebfonts.com/svg/img_330258.png"/>

            <input type="text" class ="searchbar" placeholder="Search..." onChange={event=> {setSearchTerm(event.target.value)}}></input>
            
        </div>
        <div id= "CardsDiv">
        {entryList.filter((entries)=>{
            if (searchTerm == "") {
                return entries
            } else if (entries.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return entries
            }
        }).map((entries) => {
            return (
                <div id="EntryCards">
                    <EntryCard 
                    entries={entries} 
                    onDeleteEntries={handleDeleteEntry}
                    edited={edited}
                    setEdited={setEdited}
                    />
                </div>
            )})
            }
            
        </div>
        </>
    )
}

export default EntryPage