import { useState} from "react"
import Response from "./Response"

function ProjectGenerator({setOpen, open, handleOverlay}){
   
    console.log(open)

    const [idea, setIdea] = useState({})
   


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
        <div className="overlay">
        <div className="askdiv">
            <div >
                <button className ="askPlan" onClick={getIdea}>?</button>
                {/* {open == true ? "" : <p> Need a project idea? <p>  Click the question mark above </p></p>}       */}
                {open == false ? "" : <Response idea={idea} 
                setIdea={setIdea}
                 getIdea={getIdea} 
                 handleOverlay = {handleOverlay}
                 setOpen={setOpen}
                />}
            </div>
                <div class="pointer">     
            </div>

         
        </div>  
        <img className="askdiv-img" src="https://opendoodles.s3-us-west-1.amazonaws.com/meditating.png" />

        </div>
    )
}



export default ProjectGenerator