import { useState} from "react"
import Response from "./Response"

function ProjectGenerator({setOpen, open, handleOverlay}){
   
    console.log(open)

    const [idea, setIdea] = useState({})
    const [count, setcount] = useState(0)


  function getIdea(){
    fetch(`http://www.boredapi.com/api/activity?`)
    .then((r) => r.json())
    .then((idea) => {
        setIdea(idea)
        console.log(idea)
    }).then(handleOpen) }

    function handleOpen(){
        setOpen(true)
        setcount(+1)
       
    }

   
    
    


    return(
        <div className="overlay">
        <div className="askdiv">
            <div >
                <button className ="askPlan" onClick={getIdea()}>?</button>
                {/* {open == true ? "" : <p> Need a project idea? <p>  Click the question mark above </p></p>}       */}
                <h5>Here's an Idea:</h5>
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