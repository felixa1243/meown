import {Navigate} from "react-router-dom";
import {ROUTES} from "../../constant/ROUTES";

const Home = () => {
    if (!localStorage.getItem("TOKEN")) {
        return (
            <Navigate to={ROUTES.auth.login}/>
        )
    }
    return (
        <Navigate to={ROUTES.package.list}/>
    )
}
export default Home