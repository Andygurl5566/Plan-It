import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";



function Response({idea, setIdea, getIdea, handleOverlay, setOpen}){



    return(
        <>
        <div className="response"> 
            <p>{idea.activity}
            </p>
         </div>  
         <div className="askdivbuttons">
                    <button onClick={handleOverlay} className="closeaskdivbtn">Awesome!</button>
                    <button onClick={getIdea} className="closeaskdivbtn">Meh...next</button>
                </div> 
        </>
    )
}

export default Response