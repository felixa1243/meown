import {Outlet} from 'react-router-dom'
import {Unauthorized} from "../index";

const ProtectedRoute = () => {
    if (!localStorage.getItem("TOKEN")) {
        return (
            <Unauthorized/>
        )
    } else {
        return (
            <Outlet/>
        )
    }
}
export default ProtectedRoute