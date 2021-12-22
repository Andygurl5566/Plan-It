import {useEffect, useState} from "react"
import Response from "./Response"

function ProjectGenerator(){

    const [idea, setIdea] = useState({})
    const [open, setOpen] = useState(false)


function getIdea(){
    fetch(`http://www.boredapi.com/api/activity?`)
    .then((r) => r.json())
    .then((idea) => {
        setIdea(idea)
        console.log(idea)
    }).then(handleOpen) }

    function handleOpen(){
        setOpen(true)
    }
               


    return(
        <>
        <div className="askdiv">
        <button className ="askPlan" onClick={getIdea}>?</button>
        {open == true ? " ":<p>Need a project idea? <p>  Click the question mark above</p></p>}
        {/* <a onClick={handleOpen}> {open == true ? " ": <button>Yes!</button>} </a> 
        <a>{open == true ? " ": <button>Nope -jk</button>}</a> */}
      
      { open == false ? "": <Response idea={idea} setIdea={setIdea} getIdea={getIdea} />
        }
        </div>
        </>
    )
}



export default ProjectGenerator