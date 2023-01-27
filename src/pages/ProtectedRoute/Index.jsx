import {Outlet} from 'react-router-dom'
import Unauthorized from "../exceptions/Unauthorized/Index";

const ProtectedRoute = () => {
    if (!localStorage.getItem("TOKEN")) {
        return (
            <Unauthorized/>
        )
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default ProtectedRoute