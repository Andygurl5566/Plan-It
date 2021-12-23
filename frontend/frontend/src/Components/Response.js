import {useEffect, useState} from "react"


function Response({idea, setIdea, getIdea}){

    return(
        <>
        <div className="response"> 
            <p>{idea.activity}
            </p>
         </div>  
         <div className="askdivbuttons">
                    <button className="closeaskdivbtn">Awesome!</button>
                    <button onClick={getIdea} className="closeaskdivbtn">Meh...next</button>
                </div> 
        </>
    )
}

export default Response