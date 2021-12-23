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
        <div className="askdiv">
            <div >
                <button className ="askPlan" onClick={getIdea}>?</button>
                {open == true ? " ":<p>Need a project idea? <p>  Click the question mark above</p></p>}      
                {open == false ? "": <Response idea={idea} setIdea={setIdea} getIdea={getIdea} />}
            </div>
                <div class="pointer">     
            </div>
        </div>
    )
}



export default ProjectGenerator