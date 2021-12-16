import {useEffect, useState} from "react"
import EntryCard from "./EntryCard"



function EntryPage({currentUser}){

    
    const [entryList, setEntries] = useState([])

    useEffect(() => {
        fetch('/entries')
            .then((r) => r.json())
            .then((entries) => {
               
                setEntries(entries)
                console.log(entries)
            })
    }, [])

    return(
        <>
        <h1 className="pagetitle">{currentUser.name}'s Entries </h1>

        <div id= "CardsDiv">
        {entryList.map((entries) => {
            return (
                <div id="EntryCards">
                    <EntryCard 
                    
                    entries={entries} 
                    
                    />
                </div>
            )})
            }
            
        </div>
        </>
    )
}

export default EntryPage