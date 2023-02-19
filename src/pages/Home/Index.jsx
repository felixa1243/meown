import {Navigate} from "react-router-dom";
import {ROUTES} from "../../constant/Routing/ROUTES";

const Home = () => {
    if (!localStorage.getItem("TOKEN")) {
        return (
            <Navigate to={ROUTES.auth.login}/>
        )
    }
    return (
        <Navigate to={ROUTES.dashboard}/>
    )
}
export default Home