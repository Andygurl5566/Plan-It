


function Response({idea, getIdea, handleOverlay}){



    return(
        <>
        <div className="response"> 
            <p>{idea.activity}
            </p>
         </div>  
         <div className="askdivbuttons">
                    <button onClick={getIdea} className="closeaskdivbtn">Meh...next</button>
                    <button onClick={handleOverlay} className="closeaskdivbtn">Great! Exit</button>

                </div> 
        </>
    )
}

export default Response