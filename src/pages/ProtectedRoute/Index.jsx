import {Outlet, useNavigate} from 'react-router-dom'
import {getUser} from "../../utils/userInfo";
import {Unauthorized} from "../index";
import {Navbar} from "../../components/Index";
import {ROUTES} from "../../constant/ROUTES";
import {useEffect, useState} from "react";
import {Logout} from "../../utils/Logout";
import {getToken} from "../../utils/token";

const ProtectedRoute = () => {
    const user = JSON.parse(getUser())
    const [token,setToken] = useState(getToken())
    const navigate = useNavigate()
    useEffect(()=>{
        if (!token || !user) {
            navigate(ROUTES.auth.login)
        }
    },[token,user])
    if (user && user.role !== "administrator") {
        return (
            <Unauthorized/>
        )
    }
    return (
        <>
            <Navbar onLogout={()=>{
                Logout()
                setToken(null)
            }}/>
            <Outlet/>
        </>
    )
}
export default ProtectedRoute