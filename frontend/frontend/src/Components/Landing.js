import {useNavigate} from "react-router-dom"

function Landing(){

    let navigate = useNavigate()
    function navigateToLogin(){
        navigate("/login")
    }

    
    function navigateToSignup(){
        navigate("/signup")
    }


    return(
        <>
        <h1>Landing</h1>
        <h1>Welcome Blurb</h1>
        <button onClick={navigateToLogin}>Login</button>
        <button onClick={navigateToSignup}>Signup</button>

        </>
    )
}



export default Landing