import {useEffect, useState} from "react"

function Structured_Data(){
const [entryList, setEntries] = useState([])

useEffect(() => {
    
    fetch(`/projects/${project_id}`)
        .then((r) => r.json())
        .then((project) => {
            setEntries(project.entries)
            console.log(project.entries)
                              
        })
}, [edited])


const initialData = {

task: {
   "task":{ id: "" , content: ""},

}

}


return(
    <>
    </>
)


}

export default Structured_Data