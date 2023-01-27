import {Outlet} from 'react-router-dom'
import Unauthorized from "../exceptions/Unauthorized/Index";
import {Navigate} from 'react-router-dom'
import {ROUTES} from "../../constant/ROUTES";
const ProtectedRoute = () => {
    if (!localStorage.getItem("TOKEN")) {
        return (
            <Navigate to={ROUTES.auth.login}/>
        )
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default ProtectedRoute