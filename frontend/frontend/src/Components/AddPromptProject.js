
function AddPromptProject({navigateToProjectForm}){

    return(
        <>
        <div className="addprompt">
        <h1 className="prompttitle">Let's Get Started</h1>
        {/* <h5>(Add an entry above)</h5> */}
        <button onClick={navigateToProjectForm} className="addbtn"><h1>+</h1></button>
        </div>
        </>
    )
}


export default AddPromptProject