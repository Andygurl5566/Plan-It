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
                    <button onClick={getIdea} className="closeaskdivbtn">Meh...next</button>
                    <button onClick={handleOverlay} className="closeaskdivbtn">Awesome!</button>

                </div> 
        </>
    )
}

export default Response