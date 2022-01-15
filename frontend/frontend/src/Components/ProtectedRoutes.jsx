import { Outlet } from "react-router-dom";
import PleaseLogIn from "./PleaseLogIn";




const ProtectedRoutes = ({online}) => {

    console.log(online)
    const isAuth = online
    return isAuth ? <Outlet/> : <PleaseLogIn/>
    
}

export default ProtectedRoutes;