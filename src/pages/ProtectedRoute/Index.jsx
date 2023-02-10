import {Outlet, useNavigate} from 'react-router-dom'
import {getUser} from "../../utils/userInfo";
import {Navbar} from "../../components/Index";
import {ROUTES} from "../../constant/Routing/ROUTES";
import {useEffect, useState} from "react";
import {Logout} from "../../utils/Logout";
import {getToken} from "../../utils/token";

const ProtectedRoute = () => {
    const user = JSON.parse(getUser())
    const [token, setToken] = useState(getToken())
    const navigate = useNavigate()
    useEffect(() => {
        if (!token || !user) {
            navigate(ROUTES.auth.login)
        }
    }, [token, user])
    return (
        <div className={'font-poppins'}>
            <Navbar onLogout={() => {
                Logout()
                setToken(null)
            }}/>
            <Outlet/>
        </div>
    )
}
export default ProtectedRoute