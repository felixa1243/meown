import './assets/style.css'
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./constant/ROUTES";
import {Home, Login, NotFound, Products, ProtectedRoute} from "./pages";

function App() {
    return (
        <div className={"max-w-screen h-screen"}>
            <Routes>
                <Route path={ROUTES.home} element={<Home/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path={ROUTES.package.list}
                           element={<Products/>}
                           index={true}
                    />
                </Route>
                <Route path={ROUTES.auth.login} element={<Login/>} index={true}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
