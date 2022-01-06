import { useState} from "react"
import Response from "./Response"

function ProjectGenerator({setOpen, open, handleOverlay}){
   
    

    const [idea, setIdea] = useState({})
    const [yes, setYes] = useState(false)
    


  function getIdea(){
    fetch(`http://www.boredapi.com/api/activity?`)
    .then((r) => r.json())
    .then((idea) => {
        setIdea(idea)
        setYes(true)
        console.log(idea)
    }).then(handleOpen) }

    function handleOpen(){
        setOpen(true)
       console.log(open)
       
    }
console.log(idea)
   
    
   


    return(
        <div className="overlay">
        <div className="askdiv">
            <div >
                <button className ="askPlan" onClick={getIdea}>?</button>
                {yes == true ? <h5>Here's an Idea:</h5> : <p> Need a project idea? <p>  Click the question mark above </p></p>}      

                
                {open == false ? "" : <Response idea={idea} 
                setIdea={setIdea}
                 getIdea={getIdea} 
                 handleOverlay = {handleOverlay}
                 setOpen={setOpen}
                />}
            </div>
                {/* <div class="pointer">     
            </div> */}

         
        </div>  
        {/* <img className="askdiv-img" src="https://i.imgur.com/9GeXFq9.png" /> */}

        </div>
    )
}



export default ProjectGenerator