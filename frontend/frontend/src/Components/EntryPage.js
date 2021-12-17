import {useEffect, useState} from "react"
import EntryCard from "./EntryCard"
import { useNavigate } from "react-router-dom";


function EntryPage({currentUser}){

    const [edited, setEdited] = useState(true)
    const [entryList, setEntries] = useState([])

    // function navigateToProjectForm(){
    //     navigate("/new_entry")
    // }

    useEffect(() => {
        fetch('/entries')
            .then((r) => r.json())
            .then((entries) => {
               
                setEntries(entries)
                console.log(entries)
            })
    }, [])

    function handleDeleteEntry(deletedEntry) {
        setEntries((entries) =>
          entries.filter((entries) => entries.id !== deletedEntry.id)
        );
      }

    return(
        <>
        <div className="pageheader">
            <h1 className="pagetitle">{currentUser.name}'s Entries </h1>
            <button className="btn btn-primary">New Entry</button>
        </div>
        <div id= "CardsDiv">
        {entryList.map((entries) => {
            return (
                <div id="EntryCards">
                    <EntryCard 
                    entries={entries} 
                    onDeleteEntry={handleDeleteEntry}
                    edited={edited}
                    setEdited ={setEdited}
                    />
                </div>
            )})
            }
            
        </div>
        </>
    )
}

export default EntryPage