import {useEffect, useState} from "react"

function ProjectGenerator(){

    const [idea, setIdea] = useState({})


function getIdea(){
    fetch(`http://www.boredapi.com/api/activity?`)
    .then((r) => r.json())
    .then((idea) => {
        setIdea(idea)
        console.log(idea)
    }) }
               



    return(
        <div className="askdiv">
        <button className ="askPlan" onClick={getIdea}>?</button>
        <p>Need a project idea? </p> 
        {/* <p>Click Here</p> */}
      
        <div className="response"> 
            <p>{idea.activity}
                 <div>
                    {/* <button className="closeaskdivbtn">awesome!</button> */}
                </div> 
            </p>
         </div>  
        
       
        </div>
    )
}

export default ProjectGenerator